import { Hono } from 'hono';
import { ModelsController } from './models.controller.js';

const router = new Hono();
const controller = new ModelsController();

router.get('/filters', (c) => controller.getFilterOptions(c));
router.get('/compare', (c) => controller.compareModels(c));
router.get('/subcategories', (c) => controller.listModelSubCategories(c));

// Logo extraction endpoints in models module
router.get('/logos', (c) => controller.listLogos(c));
router.get('/logos/:slug/svg', (c) => controller.getLogoSvg(c));
router.get('/logos/:slug', (c) => controller.getLogoBySlug(c));
router.get('/:id/logo/svg', (c) => controller.getModelLogoSvg(c));
router.get('/:id/logo', (c) => controller.getModelLogo(c));

router.get('/', (c) => controller.listModels(c));
router.get('/:id', (c) => controller.getModel(c));

export { router as modelsRouter };
