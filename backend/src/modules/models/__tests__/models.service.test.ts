import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ModelsService } from '../models.service.js';

function createMockPrisma() {
  return {
    aIModel: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      count: vi.fn(),
      groupBy: vi.fn(),
      update: vi.fn(),
    },
    company: {
      findMany: vi.fn(),
    },
    brandLogo: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      count: vi.fn(),
    },
    modelSubCategory: {
      findMany: vi.fn(),
    },
  };
}

const baseModel = {
  id: 'm1',
  name: 'GPT-4',
  creator: 'OpenAI',
  modality: 'Text',
  parameterSize: '1.76 Trillion',
  contextWindow: '128K',
  description: 'A large language model',
  releaseDate: new Date('2024-01-01'),
  createdAt: new Date('2024-01-01'),
  provider: { id: 'p1', slug: 'openai', name: 'OpenAI', logoUrl: null },
  logo: { id: 'l1', slug: 'openai', name: 'OpenAI', logoUrl: '/logos/openai.svg', svgContent: null, domain: 'openai.com' },
};

describe('ModelsService', () => {
  let prisma: ReturnType<typeof createMockPrisma>;
  let service: ModelsService;

  beforeEach(() => {
    prisma = createMockPrisma();
    service = new ModelsService(prisma as never);
  });

  describe('listModels', () => {
    beforeEach(() => {
      prisma.aIModel.findMany.mockResolvedValue([baseModel]);
      prisma.aIModel.count.mockResolvedValue(1);
      prisma.company.findMany.mockResolvedValue([]);
      prisma.aIModel.groupBy.mockResolvedValue([]);
    });

    it('returns paginated results', async () => {
      const result = await service.listModels({ page: 1, limit: 20, sort: 'newest' });

      expect(result.items).toHaveLength(1);
      expect(result.pagination.page).toBe(1);
      expect(result.pagination.limit).toBe(20);
      expect(result.pagination.total).toBe(1);
      expect(result.pagination.totalPages).toBe(1);
      expect(result.pagination.hasMore).toBe(false);
    });

    it('applies search on name and creator', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'newest', search: 'GPT' });

      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            AND: expect.arrayContaining([
              expect.objectContaining({
                OR: expect.arrayContaining([
                  { name: { contains: 'GPT', mode: 'insensitive' } },
                  { creator: { contains: 'GPT', mode: 'insensitive' } },
                ]),
              }),
            ]),
          }),
        }),
      );
    });

    it('applies provider filter', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'newest', provider: 'openai' });

      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            AND: expect.arrayContaining([
              { provider: { slug: 'openai' } },
            ]),
          }),
        }),
      );
    });

    it('applies modality filter', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'newest', modality: 'Text' });

      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            AND: expect.arrayContaining([
              { modality: { contains: 'Text', mode: 'insensitive' } },
            ]),
          }),
        }),
      );
    });

    it('applies creator filter', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'newest', creator: 'OpenAI' });

      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            AND: expect.arrayContaining([
              { creator: { equals: 'OpenAI', mode: 'insensitive' } },
            ]),
          }),
        }),
      );
    });

    it('sorts by newest', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'newest' });
      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { createdAt: 'desc' } }),
      );
    });

    it('sorts by oldest', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'oldest' });
      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { createdAt: 'asc' } }),
      );
    });

    it('sorts by alphabetical', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'alphabetical' });
      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { name: 'asc' } }),
      );
    });

    it('sorts by releaseDate', async () => {
      await service.listModels({ page: 1, limit: 20, sort: 'releaseDate' });
      expect(prisma.aIModel.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ orderBy: { releaseDate: 'desc' } }),
      );
    });
  });

  describe('getModelById', () => {
    it('returns model with provider and tasks when found', async () => {
      const fullModel = { ...baseModel, tasks: [{ task: { id: 't1', slug: 'chat', title: 'Chat' } }] };
      prisma.aIModel.findUnique.mockResolvedValue(fullModel);

      const result = await service.getModelById('m1');

      expect(result).toEqual(fullModel);
      expect(prisma.aIModel.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { id: 'm1' } }),
      );
    });

    it('returns null when not found', async () => {
      prisma.aIModel.findUnique.mockResolvedValue(null);

      const result = await service.getModelById('nonexistent');

      expect(result).toBeNull();
    });
  });

  describe('database logo extraction', () => {
    it('extracts logo from model database relation', async () => {
      prisma.aIModel.findFirst.mockResolvedValue({
        id: 'm1',
        name: 'GPT-4o',
        creator: 'OpenAI',
        provider: { id: 'p1', slug: 'openai', name: 'OpenAI', logoUrl: '/logos/openai.svg' },
        logo: { id: 'l1', slug: 'openai', name: 'OpenAI', logoUrl: '/logos/openai.svg', svgContent: '<svg>test</svg>', domain: 'openai.com' },
      });

      const result = await service.extractModelLogo('m1');

      expect(result.source).toBe('database_relation');
      expect(result.logo.slug).toBe('openai');
      expect(result.logo.logoUrl).toBe('/logos/openai.svg');
    });

    it('falls back to querying BrandLogo in database if model logo relation is null', async () => {
      prisma.aIModel.findFirst.mockResolvedValue({
        id: 'm2',
        name: 'DeepSeek-V3',
        creator: 'DeepSeek',
        provider: null,
        logo: null,
      });

      prisma.brandLogo.findFirst.mockResolvedValue({
        id: 'l2',
        slug: 'deepseek',
        name: 'DeepSeek',
        logoUrl: '/logos/deepseek.svg',
        svgContent: '<svg>deepseek</svg>',
        domain: 'deepseek.com',
      });

      const result = await service.extractModelLogo('m2');

      expect(result.source).toBe('database_brand_lookup');
      expect(result.logo.slug).toBe('deepseek');
      expect(result.logo.logoUrl).toBe('/logos/deepseek.svg');
    });

    it('lists all stored logos from the BrandLogo table', async () => {
      prisma.brandLogo.findMany.mockResolvedValue([
        { id: 'l1', slug: 'openai', name: 'OpenAI', logoUrl: '/logos/openai.svg', svgContent: null, domain: 'openai.com' },
        { id: 'l2', slug: 'anthropic', name: 'Anthropic', logoUrl: '/logos/anthropic.svg', svgContent: null, domain: 'anthropic.com' },
      ]);
      prisma.brandLogo.count.mockResolvedValue(2);

      const result = await service.listLogos({ page: 1, limit: 10 });

      expect(result.items).toHaveLength(2);
      expect(result.pagination.total).toBe(2);
      expect(prisma.brandLogo.findMany).toHaveBeenCalled();
    });

    it('gets a logo by slug from the database', async () => {
      prisma.brandLogo.findUnique.mockResolvedValue({
        id: 'l1',
        slug: 'openai',
        name: 'OpenAI',
        logoUrl: '/logos/openai.svg',
        svgContent: null,
        domain: 'openai.com',
      });

      const result = await service.getLogoBySlug('openai');

      expect(result?.slug).toBe('openai');
      expect(prisma.brandLogo.findUnique).toHaveBeenCalledWith({
        where: { slug: 'openai' },
        select: expect.any(Object),
      });
    });

    it('gracefully falls back when database table BrandLogo or column logoId does not exist', async () => {
      // Mock findMany throwing "column AIModel.logoId does not exist" on first call, succeeding on fallback
      prisma.aIModel.findMany
        .mockRejectedValueOnce(new Error('Invalid prisma.aIModel.findMany() invocation: column AIModel.logoId does not exist'))
        .mockResolvedValueOnce([baseModel]);
      prisma.aIModel.count.mockResolvedValue(1);
      prisma.company.findMany.mockResolvedValue([]);
      prisma.aIModel.groupBy.mockResolvedValue([]);

      const result = await service.listModels({ page: 1, limit: 10, sort: 'newest' });
      expect(result.items).toHaveLength(1);
      expect(prisma.aIModel.findMany).toHaveBeenCalledTimes(2);
    });

    it('gracefully handles missing BrandLogo table in listLogos', async () => {
      prisma.brandLogo.findMany.mockRejectedValue(new Error('Table brand_logos does not exist'));

      const result = await service.listLogos({ page: 1, limit: 10 });
      expect(result.items).toEqual([]);
      expect(result.pagination.total).toBe(0);
    });
  });
});
