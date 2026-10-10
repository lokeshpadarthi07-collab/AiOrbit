import { AIModel, ModelType } from "@/lib/types";
// @ts-expect-error - modelsData is a JS module
import { AI_MODELS_DATA } from "./modelsData";

function mapModelType(cat?: string, modalities?: string): ModelType {
  const c = (cat || "").toLowerCase();
  const m = (modalities || "").toLowerCase();
  if (c.includes("image") || m.includes("image")) return "IMAGE";
  if (c.includes("video") || m.includes("video")) return "VIDEO";
  if (c.includes("audio") || c.includes("voice") || m.includes("audio")) return "AUDIO";
  if (c.includes("multimodal") || m.includes("vision")) return "MULTIMODAL";
  if (c.includes("code") || c.includes("coding")) return "CODE";
  return "TEXT";
}

export const FALLBACK_MODELS: AIModel[] = (AI_MODELS_DATA as any[]).map((m) => {
  const modelType = mapModelType(m.category, m.specs?.modalities);
  const orgName = m.org || "AI Lab";
  const orgSlug = orgName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const catSlug = (m.category || "llm").toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    id: m.id || m.slug,
    slug: m.slug || m.id,
    name: m.name,
    modality: m.specs?.modalities || (m.category === "Coding" ? "Text, Code" : "Text"),
    description: m.shortDescription || m.fullDescription || m.name,
    creator: orgName,
    parameterSize: m.specs?.parameters || m.superpowerDetail || "Frontier",
    contextWindow: m.contextWindow || m.specs?.contextWindow || "128k tokens",
    releaseDate: m.releaseDate || "2025-01-01",
    openSource: Boolean(m.isOpenWeights),
    modelType,
    primaryTask: m.category || "General LLM",
    provider: {
      id: orgSlug,
      slug: orgSlug,
      name: orgName,
      logoUrl: null,
    },
    subCategories: [
      {
        id: catSlug,
        name: m.category || "LLM",
        slug: catSlug,
      },
    ],
  };
});
