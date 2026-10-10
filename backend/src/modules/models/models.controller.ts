import { Context } from 'hono';
import { getPrisma } from '../../lib/prisma.js';
import { ModelsService } from './models.service.js';
import { modelsListQuerySchema, modelsCompareQuerySchema, logosListQuerySchema } from './models.schema.js';

export class ModelsController {
  async getFilterOptions(c: Context) {
    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const options = await service.getFilterOptions();
      return c.json(options);
    } catch (error: any) {
      return c.json({ error: error.message }, 500);
    }
  }

  async compareModels(c: Context) {
    const parsed = modelsCompareQuerySchema.safeParse(c.req.query());

    if (!parsed.success) {
      return c.json({ error: "Invalid query parameters", details: parsed.error.flatten() }, 400);
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const models = await service.compareModels(parsed.data.ids);
      return c.json({ items: models });
    } catch (error: any) {
      const status = error.message.includes("Cannot compare") ? 422
        : error.message.includes("not found") ? 404
        : 500;
      return c.json({ error: error.message }, status);
    }
  }

  async listModelSubCategories(c: Context) {
    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const subCategories = await service.listModelSubCategories();
      return c.json(subCategories);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return c.json({ error: message }, 500);
    }
  }

  async listModels(c: Context) {
    const parsed = modelsListQuerySchema.safeParse(c.req.query());

    if (!parsed.success) {
      return c.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        400
      );
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const result = await service.listModels(parsed.data);
      return c.json(result);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Unknown error';
      return c.json({ error: message }, 500);
    }
  }

  async getModel(c: Context) {
    const id = c.req.param('id');

    if (!id) {
      return c.json({ error: "Model ID is required" }, 400);
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const model = await service.getModelById(id);

      if (!model) {
        return c.json({ error: "Model not found" }, 404);
      }

      return c.json(model);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Unknown error';
      return c.json({ error: message }, 500);
    }
  }

  /**
   * Extract logo for a specific model from database
   */
  async getModelLogo(c: Context) {
    const id = c.req.param('id');

    if (!id) {
      return c.json({ error: "Model ID is required" }, 400);
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const logoData = await service.extractModelLogo(id);
      return c.json(logoData);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      const status = message.includes("not found") ? 404 : 500;
      return c.json({ error: message }, status);
    }
  }

  /**
   * Extract/list all logos stored in the database
   */
  async listLogos(c: Context) {
    const parsed = logosListQuerySchema.safeParse(c.req.query());

    if (!parsed.success) {
      return c.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        400
      );
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const result = await service.listLogos(parsed.data);
      return c.json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return c.json({ error: message }, 500);
    }
  }

  /**
   * Extract a single logo by slug from database
   */
  async getLogoBySlug(c: Context) {
    const slug = c.req.param('slug');

    if (!slug) {
      return c.json({ error: "Slug is required" }, 400);
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const logo = await service.getLogoBySlug(slug);

      if (!logo) {
        return c.json({ error: "Logo not found" }, 404);
      }

      return c.json(logo);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return c.json({ error: message }, 500);
    }
  }

  /**
   * Serve raw SVG directly from database BrandLogo table
   */
  async getLogoSvg(c: Context) {
    const slug = c.req.param('slug');
    if (!slug) {
      return c.text('Slug is required', 400);
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const logo = await service.getLogoBySlug(slug);
      if (!logo) {
        return c.text('Logo not found', 404);
      }

      if (logo.svgContent) {
        return c.body(logo.svgContent, 200, {
          'Content-Type': 'image/svg+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        });
      }

      const initial = (logo.name || slug).charAt(0).toUpperCase();
      const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="20" fill="#18181B"/><text x="50" y="55" fill="#E4E4E7" font-family="sans-serif" font-size="44" font-weight="bold" text-anchor="middle" dominant-baseline="central">${initial}</text></svg>`;
      return c.body(fallbackSvg, 200, {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      });
    } catch (error: unknown) {
      return c.text('Error retrieving logo', 500);
    }
  }

  /**
   * Serve raw SVG directly from database for a specific model
   */
  async getModelLogoSvg(c: Context) {
    const id = c.req.param('id');
    if (!id) {
      return c.text('Model ID is required', 400);
    }

    const prisma = getPrisma(c.env);
    const service = new ModelsService(prisma);

    try {
      const extracted = await service.extractModelLogo(id);
      if (extracted?.logo?.svgContent) {
        return c.body(extracted.logo.svgContent, 200, {
          'Content-Type': 'image/svg+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400',
        });
      }

      const name = extracted?.logo?.name || extracted?.creator || id;
      const initial = name.charAt(0).toUpperCase();
      const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="20" fill="#18181B"/><text x="50" y="55" fill="#E4E4E7" font-family="sans-serif" font-size="44" font-weight="bold" text-anchor="middle" dominant-baseline="central">${initial}</text></svg>`;
      return c.body(fallbackSvg, 200, {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      });
    } catch (error: unknown) {
      return c.text('Error retrieving model logo', 500);
    }
  }
}
