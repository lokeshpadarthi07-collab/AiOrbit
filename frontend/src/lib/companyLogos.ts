/**
 * Company & Model Logo Retrieval Utility
 * 
 * Provides crisp, authentic vector logos for all AI models, companies, and creators.
 * In accordance with repository architecture, logo vector assets are NOT checked into
 * the code repository as static SVG files. Instead, they are retrieved dynamically
 * from the database BrandLogo records and endpoints:
 * 
 * 1. Database Model BrandLogo relation (model.logo.logoUrl or model.logo.slug)
 * 2. Database Logo Retrieval endpoint (/api/v1/models/logos/:slug/svg or /api/v1/models/:id/logo/svg)
 * 3. Upstream bundled vector logos (/logos/*.svg for core baseline providers)
 * 4. Model-aware brand correction (resolves true creators from generic inference hosts)
 * 5. Official HTTPS CDN / GitHub avatar CDN
 * 6. High-resolution domain favicon service
 */

/**
 * Endpoint helper to retrieve logo directly from the database API.
 */
export function getDatabaseLogoUrl(slug: string): string {
  return `/api/v1/models/logos/${encodeURIComponent(slug)}/svg`;
}

/**
 * Upstream baseline local logos that exist in public/logos/
 */
export const LOCAL_LOGO_MAP: Record<string, string> = {
  // OpenAI
  "openai": "/logos/openai.svg",
  "chatgpt": "/logos/openai.svg",
  "gpt": "/logos/openai.svg",
  "o1": "/logos/openai.svg",
  "o3": "/logos/openai.svg",

  // Anthropic
  "anthropic": "/logos/anthropic.svg",
  "claude": "/logos/anthropic.svg",

  // Google
  "google": "/logos/google.svg",
  "gemini": "/logos/google.svg",

  // Meta
  "meta": "/logos/meta.svg",
  "meta ai": "/logos/meta.svg",
  "meta-llama": "/logos/meta.svg",
  "facebook": "/logos/meta.svg",
  "facebookresearch": "/logos/meta.svg",
  "llama": "/logos/meta.svg",
  "fair": "/logos/meta.svg",

  // Mistral
  "mistral": "/logos/mistralai.svg",
  "mistral ai": "/logos/mistralai.svg",
  "mistralai": "/logos/mistralai.svg",
  "codestral": "/logos/mistralai.svg",
  "mixtral": "/logos/mistralai.svg",

  // Microsoft
  "microsoft": "/logos/microsoft.svg",
  "microsoft research": "/logos/microsoft.svg",
  "msft": "/logos/microsoft.svg",

  // NVIDIA
  "nvidia": "/logos/nvidia.svg",
  "nemotron": "/logos/nvidia.svg",

  // Hugging Face
  "hugging face": "/logos/huggingface.svg",
  "huggingface": "/logos/huggingface.svg",

  // Perplexity
  "perplexity": "/logos/perplexity.svg",
  "perplexity ai": "/logos/perplexity.svg",
};

/**
 * Database Brand Slugs:
 * Maps company / creator keywords to their database `BrandLogo` slug.
 * These are stored in PostgreSQL and retrieved via `/api/v1/models/logos/:slug/svg`.
 */
export const DATABASE_BRAND_SLUGS: Record<string, string> = {
  // DeepSeek
  "deepseek": "deepseek",
  "deepseek ai": "deepseek",
  "deepseek-ai": "deepseek",

  // Cohere
  "cohere": "cohere",
  "cohere-ai": "cohere",

  // Alibaba & Qwen
  "alibaba": "alibaba",
  "alibaba cloud": "alibaba",
  "alibabacloud": "alibaba",
  "qwen": "qwen",
  "alibaba qwen": "qwen",

  // xAI
  "xai": "xai",
  "x.ai": "xai",
  "grok": "xai",

  // AI2 & AI21
  "ai2": "ai2",
  "allen ai": "ai2",
  "allen institute": "ai2",
  "allen institute for ai": "ai2",
  "ai21": "ai21",
  "ai21 labs": "ai21",
  "ai21labs": "ai21",
  "jamba": "ai21",

  // Stability AI & FLUX
  "stability": "stability",
  "stability ai": "stability",
  "stability-ai": "stability",
  "stabilityai": "stability",
  "stable diffusion": "stability",
  "automatic1111": "stability",
  "midjourney": "midjourney",
  "flux": "flux",
  "black forest labs": "flux",
  "blackforestlabs": "flux",

  // Moonshot & Zhipu
  "moonshot": "moonshot",
  "moonshot ai": "moonshot",
  "kimi": "moonshot",
  "zhipu": "zhipu",
  "zhipu ai": "zhipu",
  "glm": "zhipu",
  "chatglm": "zhipu",

  // Audio / Video / Creative
  "minimax": "minimax",
  "hailuo": "minimax",
  "runway": "runway",
  "runwayml": "runway",
  "suno": "suno",
  "suno ai": "suno",
  "suno-ai": "suno",
  "elevenlabs": "elevenlabs",
  "eleven labs": "elevenlabs",

  // Enterprise & Infrastructure
  "databricks": "databricks",
  "dbrx": "databricks",
  "snowflake": "snowflake",
  "arctic": "snowflake",
  "ollama": "ollama",
  "langchain": "langchain",
  "langchain-ai": "langchain",
  "comfyui": "comfyui",
  "comfyanonymous": "comfyui",
  "apple": "apple",
  "amazon": "amazon",
  "amazon web services": "amazon",
  "aws": "aws",
  "baidu": "baidu",
  "ernie": "baidu",
  "bytedance": "bytedance",
  "doubao": "bytedance",
  "tencent": "tencent",
  "hunyuan": "tencent",
  "replit": "replit",
  "ideogram": "ideogram",
  "groq": "groq",
  "together": "together",
  "together ai": "together",
  "fal": "fal",
  "kling": "kling",
  "kuaishou": "kling",
  "stepfun": "stepfun",
  "baichuan": "baichuan",
  "01": "01ai",
  "01ai": "01ai",
  "01 ai": "01ai",
  "01-ai": "01ai",
  "01.ai": "01ai",
  "yi": "01ai",
  "reka": "reka",
  "reka ai": "reka",
  "ibm": "ibm",
  "ibm research": "ibm",
  "lmsys": "lmsys",
  "nous": "nous",
  "nous research": "nous",
  "hermes": "nous",
  "cognitive": "cognitive",
  "cognitive computations": "cognitive",
  "dolphin": "cognitive",
  "tinyllama": "tinyllama",
  "phind": "phind",
  "liquid": "liquid",
  "liquid ai": "liquid",
  "openbmb": "openbmb",
  "tii": "tii",
  "technology innovation institute": "tii",
  "baai": "baai",
  "jina": "jina",
  "jina ai": "jina",
  "nomic": "nomic",
  "arcee": "arcee",
  "arcee ai": "arcee",
  "argilla": "argilla",
  "bespoke": "bespoke",
  "bespoke labs": "bespoke",
  "deepmind": "deepmind",
  "google deepmind": "deepmind",
  "google-deepmind": "deepmind",
  "cogito": "cogito",
  "deep cogito": "cogito",
  "deepreinforce": "deepreinforce",
  "deep reinforce": "deepreinforce",
  "defog": "defog",
  "essential": "essential",
  "essential ai": "essential",
  "hyperwrite": "hyperwrite",
  "inception": "inception",
  "inclusion": "inclusion",
  "inclusion ai": "inclusion",
  "internlm": "internlm",
  "shanghai ai lab": "internlm",
  "joshuant": "joshuant",
  "lg": "lg",
  "lg ai": "lg",
  "lg ai research": "lg",
  "lighton": "lighton",
  "meituan": "meituan",
  "mixedbread": "mixedbread",
  "mixedbread ai": "mixedbread",
  "moondream": "moondream",
  "morph": "morph",
  "motherduck": "motherduck",
  "motherduck numbers station": "motherduck",
  "motherduck & numbers station": "motherduck",
  "nexagi": "nexagi",
  "nex agi": "nexagi",
  "nexusflow": "nexusflow",
  "openorca": "openorca",
  "open-orca": "openorca",
  "open orca": "openorca",
  "openchat": "openchat",
  "opencoder": "opencoder",
  "opencoder team": "opencoder",
  "pankajmathur": "pankajmathur",
  "pankaj mathur": "pankajmathur",
  "perceptron": "perceptron",
  "poolside": "poolside",
  "sailor": "sailor",
  "sailor2": "sailor",
  "sea ai lab": "sailor",
  "sentencetransformers": "sentencetransformers",
  "sentence transformers": "sentencetransformers",
  "thinkingmachines": "thinkingmachines",
  "thinking machines": "thinkingmachines",
  "writer": "writer",
  "writer ai": "writer",
  "xiaomi": "xiaomi",
  "zai": "zai",
  "z.ai": "zai",
  "z ai": "zai",
  "oobabooga": "oobabooga",
  "vllm": "vllm",
  "vllm project": "vllm",
  "llamaindex": "llamaindex",
  "cerebras": "cerebras",
  "luma": "luma",
  "luma ai": "luma",
  "pika": "pika",
  "pika labs": "pika",
  "upstage": "upstage",
  "pytorch": "pytorch",
  "tensorflow": "tensorflow",
  "bigcode": "bigcode",
};

/**
 * Normalizes string for key lookup.
 */
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\.com|\.ai|\.io|\.org|\.cn|\.net/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Resolves a company/owner name to the best authentic logo URL.
 * 
 * 1. Checks existing database URL
 * 2. Checks upstream local SVG baseline
 * 3. Checks database BrandLogo retrieval endpoint
 * 4. Checks GitHub owner CDN
 * 5. Fallback domain favicon
 */
export function resolveCompanyLogo(
  companyOrOwner?: string | null,
  existingLogoUrl?: string | null,
  isRepoOwner: boolean = false
): string | null {
  // 1. Primary priority: Retrieve from database / API if provided
  if (existingLogoUrl && existingLogoUrl.trim() !== "") {
    return existingLogoUrl.replace(/^http:\/\//i, "https://");
  }

  const cleanName = (companyOrOwner || "").trim();
  if (!cleanName && !existingLogoUrl) return null;

  const rawLower = cleanName.toLowerCase();
  const normalized = normalizeName(cleanName);
  const compact = normalized.replace(/\s+/g, "");
  const rawCompact = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "");

  // 2. Check upstream bundled local SVG map
  if (LOCAL_LOGO_MAP[rawLower]) return LOCAL_LOGO_MAP[rawLower];
  if (LOCAL_LOGO_MAP[normalized]) return LOCAL_LOGO_MAP[normalized];
  if (LOCAL_LOGO_MAP[compact]) return LOCAL_LOGO_MAP[compact];
  if (LOCAL_LOGO_MAP[rawCompact]) return LOCAL_LOGO_MAP[rawCompact];

  // 3. Check database BrandLogo table retrieval endpoint
  if (DATABASE_BRAND_SLUGS[rawLower]) {
    return getDatabaseLogoUrl(DATABASE_BRAND_SLUGS[rawLower]);
  }
  if (DATABASE_BRAND_SLUGS[normalized]) {
    return getDatabaseLogoUrl(DATABASE_BRAND_SLUGS[normalized]);
  }
  if (DATABASE_BRAND_SLUGS[compact]) {
    return getDatabaseLogoUrl(DATABASE_BRAND_SLUGS[compact]);
  }
  if (DATABASE_BRAND_SLUGS[rawCompact]) {
    return getDatabaseLogoUrl(DATABASE_BRAND_SLUGS[rawCompact]);
  }

  // 4. Strict word matching for upstream and database brands
  const words = normalized.split(/\s+/);
  for (const [key, logoPath] of Object.entries(LOCAL_LOGO_MAP)) {
    if (words.includes(key)) {
      return logoPath;
    }
  }
  for (const [key, slug] of Object.entries(DATABASE_BRAND_SLUGS)) {
    if (words.includes(key)) {
      return getDatabaseLogoUrl(slug);
    }
  }

  // 5. For GitHub repository owners, use GitHub's official avatar CDN
  if (isRepoOwner && cleanName && !cleanName.includes(" ") && !cleanName.includes(".")) {
    return `https://github.com/${encodeURIComponent(cleanName)}.png?size=128`;
  }

  // 6. Fallback domain-based favicon for known domains or clean company names
  if (cleanName && !cleanName.includes(" ")) {
    const domain = cleanName.includes(".") ? cleanName : `${cleanName}.com`;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
  }

  return null;
}

/**
 * Resolves the accurate company/creator and logo for a model.
 * 
 * Corrects anomalies where models are tagged with generic base providers
 * (e.g. DeepSeek R1 attributed to Google, Stable Code attributed to Meta)
 * so that each distinct AI model/company gets its authentic database-extracted logo.
 */
export function resolveModelBrand(model: {
  id?: string | null;
  name?: string | null;
  creator?: string | null;
  provider?: { name?: string | null; logoUrl?: string | null } | null;
  logo?: { id?: string | null; slug?: string | null; name?: string | null; logoUrl?: string | null } | null;
  slug?: string | null;
  logoUrl?: string | null;
  company?: { name?: string | null; logoUrl?: string | null } | null;
}): { companyName: string; logoUrl: string | null } {
  const name = (model.name || "").trim();
  const nameLower = name.toLowerCase();
  const creator = (model.creator || "").trim();
  const providerName = (model.provider?.name || "").trim();

  // 1. Check direct extracted logo from database BrandLogo relation
  if (model.logo?.logoUrl && model.logo.logoUrl.trim() !== "") {
    return {
      companyName: model.logo.name || providerName || creator || "—",
      logoUrl: model.logo.logoUrl,
    };
  }
  if (model.logo?.slug && model.logo.slug.trim() !== "") {
    return {
      companyName: model.logo.name || providerName || creator || "—",
      logoUrl: getDatabaseLogoUrl(model.logo.slug),
    };
  }

  const dbLogo = model.provider?.logoUrl || (model as any).company?.logoUrl || (model as any).logoUrl || null;

  // Retrieve logo directly from database provider if available
  if (dbLogo && dbLogo.trim() !== "") {
    const isGenericFavicon = dbLogo.includes("google.com/s2/favicons");
    const localLogo = resolveCompanyLogo(providerName || creator || "");
    if (!isGenericFavicon || !localLogo) {
      const companyName = providerName || creator || "—";
      return { companyName, logoUrl: dbLogo.replace(/^http:\/\//i, "https://") };
    }
  }

  // Model-name based creator attribution when DB has host/generic provider
  if (nameLower.includes("deepseek") || nameLower.startsWith("r1 ") || nameLower === "deepseek r1") {
    return { companyName: "DeepSeek", logoUrl: getDatabaseLogoUrl("deepseek") };
  }
  if (nameLower.startsWith("stable code") || nameLower.startsWith("stable beluga") || nameLower.startsWith("stablelm") || nameLower.startsWith("stable diffusion") || nameLower.startsWith("sdxl")) {
    return { companyName: "Stability AI", logoUrl: getDatabaseLogoUrl("stability") };
  }
  if (nameLower.startsWith("wizardlm") || nameLower.startsWith("wizardcoder") || nameLower.startsWith("wizard math")) {
    return { companyName: "Microsoft", logoUrl: "/logos/microsoft.svg" };
  }
  if (nameLower === "vicuna" || nameLower.startsWith("wizard vicuna")) {
    return { companyName: "LMSYS", logoUrl: getDatabaseLogoUrl("lmsys") };
  }
  if (nameLower.startsWith("tinyllama")) {
    return { companyName: "TinyLlama", logoUrl: getDatabaseLogoUrl("tinyllama") };
  }
  if (nameLower.startsWith("tinydolphin") || nameLower.includes("dolphin") || nameLower.startsWith("samantha")) {
    return { companyName: "Cognitive Computations", logoUrl: getDatabaseLogoUrl("cognitive") };
  }
  if (nameLower.includes("phind")) {
    return { companyName: "Phind", logoUrl: getDatabaseLogoUrl("phind") };
  }
  if (nameLower.startsWith("starcoder")) {
    return { companyName: "BigCode", logoUrl: getDatabaseLogoUrl("bigcode") };
  }
  if (nameLower.startsWith("tulu") || nameLower.startsWith("olmo")) {
    return { companyName: "AI2", logoUrl: getDatabaseLogoUrl("ai2") };
  }
  if (nameLower.startsWith("nous hermes") || nameLower.includes("hermes") || nameLower.startsWith("openhermes")) {
    return { companyName: "Nous Research", logoUrl: getDatabaseLogoUrl("nous") };
  }
  if (nameLower.startsWith("granite")) {
    return { companyName: "IBM", logoUrl: getDatabaseLogoUrl("ibm") };
  }
  if (nameLower.startsWith("falcon")) {
    return { companyName: "TII", logoUrl: getDatabaseLogoUrl("tii") };
  }
  if (nameLower.startsWith("minicpm")) {
    return { companyName: "OpenBMB", logoUrl: getDatabaseLogoUrl("openbmb") };
  }
  if (nameLower.startsWith("lfm")) {
    return { companyName: "Liquid AI", logoUrl: getDatabaseLogoUrl("liquid") };
  }
  if (nameLower.startsWith("bge")) {
    return { companyName: "BAAI", logoUrl: getDatabaseLogoUrl("baai") };
  }
  if (nameLower.startsWith("gemma") || nameLower.startsWith("shieldgemma") || nameLower.startsWith("codegemma") || nameLower.startsWith("translategemma") || nameLower.startsWith("medgemma")) {
    return { companyName: "Google", logoUrl: "/logos/google.svg" };
  }
  if (nameLower.startsWith("qwen") || nameLower.startsWith("qwq") || nameLower.startsWith("smallthinker")) {
    return { companyName: "Alibaba", logoUrl: getDatabaseLogoUrl("qwen") };
  }
  if (nameLower.startsWith("smollm")) {
    return { companyName: "Hugging Face", logoUrl: "/logos/huggingface.svg" };
  }
  if (nameLower.startsWith("solar")) {
    return { companyName: "Upstage", logoUrl: getDatabaseLogoUrl("upstage") };
  }
  if (nameLower.startsWith("snowflake") || nameLower.startsWith("arctic")) {
    return { companyName: "Snowflake", logoUrl: getDatabaseLogoUrl("snowflake") };
  }
  if (nameLower.includes("paraphrase") || nameLower.includes("minilm") || nameLower.includes("sentence-transformer")) {
    return { companyName: "Sentence Transformers", logoUrl: getDatabaseLogoUrl("sentencetransformers") };
  }
  if (nameLower.includes("orca mini")) {
    return { companyName: "Pankaj Mathur", logoUrl: getDatabaseLogoUrl("pankajmathur") };
  }
  if (nameLower.includes("mxbai")) {
    return { companyName: "Mixedbread", logoUrl: getDatabaseLogoUrl("mixedbread") };
  }
  if (nameLower.includes("alfred")) {
    return { companyName: "LightOn", logoUrl: getDatabaseLogoUrl("lighton") };
  }
  if (nameLower.includes("cogito")) {
    return { companyName: "Deep Cogito", logoUrl: getDatabaseLogoUrl("cogito") };
  }
  if (nameLower.includes("ornith")) {
    return { companyName: "Deep Reinforce", logoUrl: getDatabaseLogoUrl("deepreinforce") };
  }
  if (nameLower.includes("codebooga")) {
    return { companyName: "oobabooga", logoUrl: getDatabaseLogoUrl("oobabooga") };
  }
  if (nameLower.includes("notus") || nameLower.includes("notux")) {
    return { companyName: "Argilla", logoUrl: getDatabaseLogoUrl("argilla") };
  }
  if (nameLower.includes("duckdb")) {
    return { companyName: "MotherDuck", logoUrl: getDatabaseLogoUrl("motherduck") };
  }
  if (nameLower.includes("virtuoso")) {
    return { companyName: "Arcee AI", logoUrl: getDatabaseLogoUrl("arcee") };
  }
  if (nameLower.includes("laguna")) {
    return { companyName: "Poolside", logoUrl: getDatabaseLogoUrl("poolside") };
  }
  if (nameLower.includes("reka")) {
    return { companyName: "Reka AI", logoUrl: getDatabaseLogoUrl("reka") };
  }
  if (nameLower.includes("internlm")) {
    return { companyName: "InternLM", logoUrl: getDatabaseLogoUrl("internlm") };
  }
  if (nameLower.includes("starling") || nameLower.includes("nexusraven") || nameLower.includes("athene")) {
    return { companyName: "Nexusflow", logoUrl: getDatabaseLogoUrl("nexusflow") };
  }
  if (nameLower.includes("sqlcoder")) {
    return { companyName: "Defog", logoUrl: getDatabaseLogoUrl("defog") };
  }
  if (nameLower.includes("sailor")) {
    return { companyName: "Sailor2", logoUrl: getDatabaseLogoUrl("sailor") };
  }
  if (nameLower.includes("rnj")) {
    return { companyName: "Essential AI", logoUrl: getDatabaseLogoUrl("essential") };
  }
  if (nameLower.includes("reflection")) {
    return { companyName: "HyperWrite", logoUrl: getDatabaseLogoUrl("hyperwrite") };
  }
  if (nameLower.includes("reader lm") || nameLower.includes("readerlm")) {
    return { companyName: "Jina AI", logoUrl: getDatabaseLogoUrl("jina") };
  }
  if (nameLower.includes("openchat")) {
    return { companyName: "OpenChat", logoUrl: getDatabaseLogoUrl("openchat") };
  }
  if (nameLower.includes("opencoder")) {
    return { companyName: "OpenCoder Team", logoUrl: getDatabaseLogoUrl("opencoder") };
  }
  if (nameLower.includes("platypus")) {
    return { companyName: "Open-Orca", logoUrl: getDatabaseLogoUrl("openorca") };
  }
  if (nameLower.includes("bespoke")) {
    return { companyName: "Bespoke Labs", logoUrl: getDatabaseLogoUrl("bespoke") };
  }
  if (nameLower.includes("moondream")) {
    return { companyName: "Moondream", logoUrl: getDatabaseLogoUrl("moondream") };
  }

  // Default attribution
  const companyName = providerName || creator || "—";
  const logoUrl = resolveCompanyLogo(companyName, model.provider?.logoUrl);
  return { companyName, logoUrl };
}
