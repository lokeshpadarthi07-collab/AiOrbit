import { PrismaClient, Prisma } from '@prisma/client';
import type { ModelsListQuery, LogosListQuery } from './models.schema.js';

const RELATED_LIMIT = 6;

const providerSelect = {
  id: true,
  slug: true,
  name: true,
  logoUrl: true,
} as const;

const logoSelect = {
  id: true,
  slug: true,
  name: true,
  logoUrl: true,
  svgContent: true,
  domain: true,
} as const;

export class ModelsService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  private isMissingLogoSchemaError(err: unknown): boolean {
    const msg = err instanceof Error ? err.message : String(err);
    return (
      msg.includes('logoId') ||
      msg.includes('BrandLogo') ||
      msg.includes('brand_logos') ||
      (msg.includes('column') && msg.includes('does not exist'))
    );
  }

  async listModels(query: ModelsListQuery) {
    const { page, limit, sort, search, provider, modality, creator, modelType, openSource, primaryTask, subCategory } = query;

    const and: Prisma.AIModelWhereInput[] = [];

    if (search && search.trim().length > 0) {
      const term = search.trim();
      and.push({
        OR: [
          { name: { contains: term, mode: 'insensitive' } },
          { creator: { contains: term, mode: 'insensitive' } },
        ],
      });
    }

    if (provider) {
      and.push({ provider: { slug: provider } });
    }

    if (modality) {
      and.push({ modality: { contains: modality, mode: 'insensitive' } });
    }

    if (creator) {
      and.push({ creator: { equals: creator, mode: 'insensitive' } });
    }

    if (modelType) {
      and.push({ modelType });
    }

    if (openSource !== undefined) {
      and.push({ openSource });
    }

    if (primaryTask) {
      and.push({ primaryTask: { equals: primaryTask, mode: 'insensitive' } });
    }

    if (subCategory) {
      and.push({
        subCategories: {
          some: {
            subCategory: { slug: subCategory },
          },
        },
      });
    }

    const where: Prisma.AIModelWhereInput = and.length > 0 ? { AND: and } : {};
    let orderBy: Prisma.AIModelOrderByWithRelationInput = { createdAt: 'desc' };
    switch (sort) {
      case 'oldest':
        orderBy = { createdAt: 'asc' };
        break;
      case 'alphabetical':
        orderBy = { name: 'asc' };
        break;
      case 'releaseDate':
        orderBy = { releaseDate: 'desc' };
        break;
      default:
        orderBy = { createdAt: 'desc' };
    }

    const fetchItems = async () => {
      try {
        return await this.prisma.aIModel.findMany({
          where,
          orderBy,
          skip: (page - 1) * limit,
          take: limit,
          include: {
            provider: { select: providerSelect },
            logo: { select: logoSelect },
            subCategories: {
              select: {
                subCategory: {
                  select: { id: true, name: true, slug: true },
                },
              },
            },
          },
        });
      } catch (err: unknown) {
        if (this.isMissingLogoSchemaError(err)) {
          return await this.prisma.aIModel.findMany({
            where,
            orderBy,
            skip: (page - 1) * limit,
            take: limit,
            include: {
              provider: { select: providerSelect },
              subCategories: {
                select: {
                  subCategory: {
                    select: { id: true, name: true, slug: true },
                  },
                },
              },
            },
          });
        }
        throw err;
      }
    };

    const [items, total, companies, modalityGroups] = await Promise.all([
      fetchItems(),
      this.prisma.aIModel.count({ where }),
      this.prisma.company.findMany({
        where: { aiModels: { some: {} } },
        orderBy: { name: 'asc' },
        select: {
          slug: true,
          name: true,
          _count: { select: { aiModels: true } },
        },
      }),
      this.prisma.aIModel.groupBy({
        by: ['modality'],
        _count: { _all: true },
        orderBy: { modality: 'asc' },
      }),
    ]);

    const itemsWithSubCategories = items.map((item: any) => ({
      ...item,
      subCategories: Array.isArray(item.subCategories) ? item.subCategories.map((sc: any) => sc.subCategory) : [],
    }));

    return {
      items: itemsWithSubCategories,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
        hasMore: page * limit < total,
      },
      filters: {
        providers: companies.map((c) => ({
          slug: c.slug,
          name: c.name,
          count: c._count.aiModels,
        })),
        modalities: modalityGroups.map((g) => ({
          modality: g.modality,
          count: g._count._all,
        })),
      },
    };
  }

  async getModelById(id: string) {
    let model: any = null;
    try {
      model = await this.prisma.aIModel.findUnique({
        where: { id },
        include: {
          provider: { select: providerSelect },
          logo: { select: logoSelect },
          tasks: {
            include: {
              task: { select: { id: true, slug: true, title: true } },
            },
          },
        },
      });
    } catch (err: unknown) {
      if (this.isMissingLogoSchemaError(err)) {
        model = await this.prisma.aIModel.findUnique({
          where: { id },
          include: {
            provider: { select: providerSelect },
            tasks: {
              include: {
                task: { select: { id: true, slug: true, title: true } },
              },
            },
          },
        });
      } else {
        throw err;
      }
    }

    if (!model) return null;

    const orClauses: Prisma.AIModelWhereInput[] = [];

    if (model.providerId) {
      orClauses.push({ providerId: model.providerId });
    } else if (model.provider?.id) {
      orClauses.push({ providerId: model.provider.id });
    }

    if (model.modality) {
      orClauses.push({
        modality: { equals: model.modality, mode: 'insensitive' },
      });
    }

    if (model.creator) {
      orClauses.push({
        creator: { equals: model.creator, mode: 'insensitive' },
      });
    }

    let relatedModels: any[] = [];
    if (orClauses.length > 0) {
      try {
        relatedModels = await this.prisma.aIModel.findMany({
          where: {
            id: { not: id },
            OR: orClauses,
          },
          take: RELATED_LIMIT,
          orderBy: { createdAt: 'desc' },
          include: {
            provider: { select: providerSelect },
            logo: { select: logoSelect },
          },
        });
      } catch (err: unknown) {
        if (this.isMissingLogoSchemaError(err)) {
          relatedModels = await this.prisma.aIModel.findMany({
            where: {
              id: { not: id },
              OR: orClauses,
            },
            take: RELATED_LIMIT,
            orderBy: { createdAt: 'desc' },
            include: {
              provider: { select: providerSelect },
            },
          });
        } else {
          throw err;
        }
      }
    }

    return { ...model, relatedModels };
  }

  async getFilterOptions() {
    const [providers, primaryTasks] = await Promise.all([
      this.prisma.company.findMany({
        where: { aiModels: { some: {} } },
        select: { slug: true, name: true },
        orderBy: { name: "asc" },
      }),
      this.prisma.aIModel.findMany({
        where: { primaryTask: { not: null } },
        select: { primaryTask: true },
        distinct: ["primaryTask"],
      }),
    ]);

    return {
      providers,
      primaryTasks: primaryTasks.map((m) => m.primaryTask).filter(Boolean),
      modelTypes: ["TEXT", "IMAGE", "VIDEO", "MULTIMODAL", "AUDIO", "CODE", "THREE_D", "STRUCTURED_DATA"],
    };
  }

  async compareModels(ids: string[]) {
    if (ids.length === 0) return [];
    if (ids.length > 5) throw new Error("Cannot compare more than 5 models at once");

    let models: any[];
    try {
      models = await this.prisma.aIModel.findMany({
        where: { id: { in: ids } },
        include: {
          provider: { select: { id: true, slug: true, name: true, logoUrl: true } },
          logo: { select: logoSelect },
        },
      });
    } catch (err: unknown) {
      if (this.isMissingLogoSchemaError(err)) {
        models = await this.prisma.aIModel.findMany({
          where: { id: { in: ids } },
          include: {
            provider: { select: { id: true, slug: true, name: true, logoUrl: true } },
          },
        });
      } else {
        throw err;
      }
    }

    const foundIds = new Set(models.map((m: any) => m.id));
    const missingIds = ids.filter((id) => !foundIds.has(id));

    if (missingIds.length > 0) {
      throw new Error(`Model(s) not found: ${missingIds.join(", ")}`);
    }

    // findMany doesn't guarantee `id: { in }` order — re-sort to match the
    // caller's requested id sequence so compare columns stay stable.
    const byId = new Map(models.map((m: any) => [m.id, m]));
    return ids.map((id) => byId.get(id)!);
  }

  async listModelSubCategories() {
    return this.prisma.modelSubCategory.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true, slug: true, description: true },
    });
  }

  /**
   * Extract logo from database for a specific model by ID or slug.
   * If the model's logoId relation is not populated, attempts fallback lookup
   * in the database BrandLogo table by matching model creator or provider.
   */
  async extractModelLogo(modelIdOrSlug: string) {
    let model: any;
    try {
      model = await this.prisma.aIModel.findFirst({
        where: {
          OR: [{ id: modelIdOrSlug }, { slug: modelIdOrSlug }],
        },
        include: {
          provider: { select: providerSelect },
          logo: { select: logoSelect },
        },
      });
    } catch (err: unknown) {
      if (this.isMissingLogoSchemaError(err)) {
        model = await this.prisma.aIModel.findFirst({
          where: {
            OR: [{ id: modelIdOrSlug }, { slug: modelIdOrSlug }],
          },
          include: {
            provider: { select: providerSelect },
          },
        });
      } else {
        throw err;
      }
    }

    if (!model) {
      throw new Error(`Model not found with ID or slug: ${modelIdOrSlug}`);
    }

    if (model.logo) {
      return {
        modelId: model.id,
        modelName: model.name,
        creator: model.creator,
        source: 'database_relation',
        logo: model.logo,
      };
    }

    // Fallback extraction: lookup BrandLogo table in database by creator/name
    const creatorLower = (model.creator || '').trim().toLowerCase();
    try {
      const fallbackLogo = await this.prisma.brandLogo.findFirst({
        where: {
          OR: [
            { slug: creatorLower },
            { name: { equals: model.creator, mode: 'insensitive' } },
            { slug: { contains: creatorLower, mode: 'insensitive' } },
          ],
        },
        select: logoSelect,
      });

      if (fallbackLogo) {
        return {
          modelId: model.id,
          modelName: model.name,
          creator: model.creator,
          source: 'database_brand_lookup',
          logo: fallbackLogo,
        };
      }
    } catch {
      // BrandLogo table may not exist yet in unmigrated database
    }

    return {
      modelId: model.id,
      modelName: model.name,
      creator: model.creator,
      source: 'provider_or_default',
      logo: {
        id: 'fallback',
        slug: creatorLower.replace(/[^a-z0-9]+/g, '-'),
        name: model.creator,
        logoUrl: model.provider?.logoUrl || `/logos/${creatorLower.replace(/[^a-z0-9]+/g, '')}.svg`,
        svgContent: null,
        domain: null,
      },
    };
  }

  /**
   * Extract/list all logos stored in the database BrandLogo table
   */
  async listLogos(query?: LogosListQuery) {
    const page = query?.page ?? 1;
    const limit = query?.limit ?? 100;
    const and: Prisma.BrandLogoWhereInput[] = [];

    if (query?.search && query.search.trim().length > 0) {
      const term = query.search.trim();
      and.push({
        OR: [
          { name: { contains: term, mode: 'insensitive' } },
          { slug: { contains: term, mode: 'insensitive' } },
          { description: { contains: term, mode: 'insensitive' } },
        ],
      });
    }

    if (query?.category) {
      and.push({ category: query.category });
    }

    const where: Prisma.BrandLogoWhereInput = and.length > 0 ? { AND: and } : {};

    try {
      const [items, total] = await Promise.all([
        this.prisma.brandLogo.findMany({
          where,
          orderBy: { name: 'asc' },
          skip: (page - 1) * limit,
          take: limit,
          select: logoSelect,
        }),
        this.prisma.brandLogo.count({ where }),
      ]);

      return {
        items,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.max(1, Math.ceil(total / limit)),
          hasMore: page * limit < total,
        },
      };
    } catch {
      return {
        items: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 1,
          hasMore: false,
        },
      };
    }
  }

  /**
   * Extract a specific logo from the database BrandLogo table by slug
   */
  async getLogoBySlug(slug: string) {
    try {
      return await this.prisma.brandLogo.findUnique({
        where: { slug },
        select: logoSelect,
      });
    } catch {
      return null;
    }
  }
}
