/**
 * Company & Repository Logo Resolution Utility
 * 
 * Provides crisp, authentic, secure vector logos for all AI companies and repositories.
 * Priority:
 * 1. Bundled local SVG assets (/logos/*.svg) matching known company/creator names or slugs
 * 2. Model-aware brand resolution (correcting misattributed inference hosts like Meta/Google to true creators)
 * 3. Custom logo URL provided in dataset (if valid HTTPS or local path)
 * 4. GitHub organization / user avatar CDN (https://github.com/<owner>.png?size=128)
 * 5. Google S2 Favicon service with 128px high-resolution fallback
 * 6. Clean, styled monogram fallback badge
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

  // Google & DeepMind
  "google": "/logos/google.svg",
  "gemini": "/logos/google.svg",
  "google deepmind": "/logos/deepmind.svg",
  "deepmind": "/logos/deepmind.svg",
  "google-deepmind": "/logos/deepmind.svg",

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

  // BigCode
  "bigcode": "/logos/bigcode.svg",

  // Perplexity
  "perplexity": "/logos/perplexity.svg",
  "perplexity ai": "/logos/perplexity.svg",

  // Cohere
  "cohere": "/logos/cohere.svg",
  "cohere-ai": "/logos/cohere.svg",

  // DeepSeek
  "deepseek": "/logos/deepseek.svg",
  "deepseek ai": "/logos/deepseek.svg",
  "deepseek-ai": "/logos/deepseek.svg",

  // Alibaba vs Qwen
  "alibaba": "/logos/alibaba.svg",
  "alibaba cloud": "/logos/alibaba.svg",
  "alibabacloud": "/logos/alibaba.svg",
  "qwen": "/logos/qwen.svg",
  "alibaba qwen": "/logos/qwen.svg",

  // xAI
  "xai": "/logos/xai.svg",
  "x.ai": "/logos/xai.svg",
  "x": "/logos/xai.svg",
  "grok": "/logos/xai.svg",

  // AI2 (Allen Institute for AI)
  "ai2": "/logos/ai2.svg",
  "allen ai": "/logos/ai2.svg",
  "allen institute": "/logos/ai2.svg",
  "allen institute for ai": "/logos/ai2.svg",

  // AI21 Labs
  "ai21": "/logos/ai21.svg",
  "ai21 labs": "/logos/ai21.svg",
  "ai21labs": "/logos/ai21.svg",
  "jamba": "/logos/ai21.svg",

  // Stability AI
  "stability": "/logos/stability.svg",
  "stability ai": "/logos/stability.svg",
  "stability-ai": "/logos/stability.svg",
  "stabilityai": "/logos/stability.svg",
  "stable diffusion": "/logos/stability.svg",
  "automatic1111": "/logos/stability.svg",

  // Midjourney
  "midjourney": "/logos/midjourney.svg",

  // Black Forest Labs / FLUX
  "black forest labs": "/logos/flux.svg",
  "blackforestlabs": "/logos/flux.svg",
  "flux": "/logos/flux.svg",

  // Moonshot AI / Kimi
  "moonshot": "/logos/moonshot.svg",
  "moonshot ai": "/logos/moonshot.svg",
  "kimi": "/logos/moonshot.svg",

  // Zhipu AI / GLM
  "zhipu": "/logos/zhipu.svg",
  "zhipu ai": "/logos/zhipu.svg",
  "glm": "/logos/zhipu.svg",
  "chatglm": "/logos/zhipu.svg",

  // MiniMax
  "minimax": "/logos/minimax.svg",
  "hailuo": "/logos/minimax.svg",

  // Runway
  "runway": "/logos/runway.svg",
  "runwayml": "/logos/runway.svg",

  // Suno
  "suno": "/logos/suno.svg",
  "suno ai": "/logos/suno.svg",
  "suno-ai": "/logos/suno.svg",
  "bark": "/logos/suno.svg",

  // ElevenLabs
  "elevenlabs": "/logos/elevenlabs.svg",
  "eleven labs": "/logos/elevenlabs.svg",

  // Databricks
  "databricks": "/logos/databricks.svg",
  "dbrx": "/logos/databricks.svg",

  // Snowflake
  "snowflake": "/logos/snowflake.svg",
  "arctic": "/logos/snowflake.svg",

  // Ollama
  "ollama": "/logos/ollama.svg",

  // LangChain
  "langchain": "/logos/langchain.svg",
  "langchain-ai": "/logos/langchain.svg",

  // ComfyUI
  "comfyui": "/logos/comfyui.svg",
  "comfyanonymous": "/logos/comfyui.svg",

  // Apple
  "apple": "/logos/apple.svg",

  // Amazon & AWS
  "amazon": "/logos/amazon.svg",
  "amazon web services": "/logos/amazon.svg",
  "aws": "/logos/aws.svg",

  // Baidu
  "baidu": "/logos/baidu.svg",
  "ernie": "/logos/baidu.svg",

  // ByteDance
  "bytedance": "/logos/bytedance.svg",
  "doubao": "/logos/bytedance.svg",

  // Tencent
  "tencent": "/logos/tencent.svg",
  "hunyuan": "/logos/tencent.svg",

  // Replit
  "replit": "/logos/replit.svg",

  // Ideogram
  "ideogram": "/logos/ideogram.svg",

  // Groq
  "groq": "/logos/groq.svg",

  // Together AI
  "together": "/logos/together.svg",
  "together ai": "/logos/together.svg",
  "together-ai": "/logos/together.svg",

  // Fal.ai
  "fal": "/logos/fal.svg",
  "fal-ai": "/logos/fal.svg",

  // Kling / Kuaishou
  "kling": "/logos/kling.svg",
  "kuaishou": "/logos/kling.svg",
  "kuaishou technology": "/logos/kling.svg",

  // StepFun
  "stepfun": "/logos/stepfun.svg",

  // Baichuan
  "baichuan": "/logos/baichuan.svg",

  // 01.AI
  "01": "/logos/01ai.svg",
  "01ai": "/logos/01ai.svg",
  "01 ai": "/logos/01ai.svg",
  "01-ai": "/logos/01ai.svg",
  "01.ai": "/logos/01ai.svg",
  "yi": "/logos/01ai.svg",

  // Reka AI
  "reka": "/logos/reka.svg",
  "reka ai": "/logos/reka.svg",

  // IBM
  "ibm": "/logos/ibm.svg",
  "ibm research": "/logos/ibm.svg",

  // LMSYS
  "lmsys": "/logos/lmsys.svg",
  "lmsys org": "/logos/lmsys.svg",
  "vicuna": "/logos/lmsys.svg",

  // Nous Research
  "nous research": "/logos/nous.svg",
  "nous": "/logos/nous.svg",
  "hermes": "/logos/nous.svg",

  // Cognitive Computations
  "cognitive computations": "/logos/cognitive.svg",
  "cognitive": "/logos/cognitive.svg",
  "dolphin": "/logos/cognitive.svg",

  // TinyLlama
  "tinyllama": "/logos/tinyllama.svg",

  // Phind
  "phind": "/logos/phind.svg",

  // Liquid AI
  "liquid ai": "/logos/liquid.svg",
  "liquid": "/logos/liquid.svg",

  // OpenBMB
  "openbmb": "/logos/openbmb.svg",

  // TII (Technology Innovation Institute)
  "tii": "/logos/tii.svg",
  "technology innovation institute": "/logos/tii.svg",

  // BAAI
  "baai": "/logos/baai.svg",

  // Jina AI
  "jina": "/logos/jina.svg",
  "jina ai": "/logos/jina.svg",

  // Nomic
  "nomic": "/logos/nomic.svg",

  // Arcee AI
  "arcee": "/logos/arcee.svg",
  "arcee ai": "/logos/arcee.svg",

  // Argilla
  "argilla": "/logos/argilla.svg",

  // Bespoke Labs
  "bespoke": "/logos/bespoke.svg",
  "bespoke labs": "/logos/bespoke.svg",

  // Deep Cogito
  "deep cogito": "/logos/cogito.svg",
  "cogito": "/logos/cogito.svg",

  // Deep Reinforce
  "deep reinforce": "/logos/deepreinforce.svg",
  "deepreinforce": "/logos/deepreinforce.svg",

  // Defog
  "defog": "/logos/defog.svg",

  // Essential AI
  "essential": "/logos/essential.svg",
  "essential ai": "/logos/essential.svg",

  // HyperWrite
  "hyperwrite": "/logos/hyperwrite.svg",

  // Inception
  "inception": "/logos/inception.svg",

  // Inclusion AI
  "inclusion": "/logos/inclusion.svg",
  "inclusion ai": "/logos/inclusion.svg",

  // InternLM
  "internlm": "/logos/internlm.svg",
  "shanghai ai lab": "/logos/internlm.svg",
  "shanghai ai laboratory": "/logos/internlm.svg",

  // Joshuant
  "joshuant": "/logos/joshuant.svg",

  // LG AI Research
  "lg": "/logos/lg.svg",
  "lg ai": "/logos/lg.svg",
  "lg ai research": "/logos/lg.svg",
  "exaone": "/logos/lg.svg",

  // LightOn
  "lighton": "/logos/lighton.svg",

  // Meituan
  "meituan": "/logos/meituan.svg",

  // Mixedbread AI
  "mixedbread": "/logos/mixedbread.svg",
  "mixedbread ai": "/logos/mixedbread.svg",

  // Moondream
  "moondream": "/logos/moondream.svg",

  // Morph
  "morph": "/logos/morph.svg",

  // MotherDuck
  "motherduck": "/logos/motherduck.svg",
  "motherduck numbers station": "/logos/motherduck.svg",
  "motherduck & numbers station": "/logos/motherduck.svg",

  // Nex AGI
  "nex agi": "/logos/nexagi.svg",
  "nexagi": "/logos/nexagi.svg",

  // Nexusflow
  "nexusflow": "/logos/nexusflow.svg",

  // Open-Orca
  "open-orca": "/logos/openorca.svg",
  "open orca": "/logos/openorca.svg",

  // OpenChat
  "openchat": "/logos/openchat.svg",

  // OpenCoder Team
  "opencoder": "/logos/opencoder.svg",
  "opencoder team": "/logos/opencoder.svg",

  // Pankaj Mathur
  "pankaj mathur": "/logos/pankajmathur.svg",
  "pankajmathur": "/logos/pankajmathur.svg",

  // Perceptron
  "perceptron": "/logos/perceptron.svg",

  // Poolside
  "poolside": "/logos/poolside.svg",

  // Sailor2 / Sea AI Lab
  "sailor": "/logos/sailor.svg",
  "sailor2": "/logos/sailor.svg",
  "sea ai lab": "/logos/sailor.svg",
  "sea group": "/logos/sailor.svg",

  // Sentence Transformers
  "sentence transformers": "/logos/sentencetransformers.svg",
  "sentence-transformers": "/logos/sentencetransformers.svg",

  // Thinking Machines
  "thinking machines": "/logos/thinkingmachines.svg",

  // Writer AI
  "writer": "/logos/writer.svg",
  "writer ai": "/logos/writer.svg",

  // Xiaomi
  "xiaomi": "/logos/xiaomi.svg",

  // Z.ai
  "zai": "/logos/zai.svg",
  "z.ai": "/logos/zai.svg",
  "z ai": "/logos/zai.svg",
  "z": "/logos/zai.svg",

  // oobabooga
  "oobabooga": "/logos/oobabooga.svg",

  // Frameworks & Tools
  "vllm": "/logos/vllm.svg",
  "vllm project": "/logos/vllm.svg",
  "vllm-project": "/logos/vllm.svg",
  "llamaindex": "/logos/llamaindex.svg",
  "run llama": "/logos/llamaindex.svg",
  "run-llama": "/logos/llamaindex.svg",
  "cerebras": "/logos/cerebras.svg",
  "luma": "/logos/luma.svg",
  "luma ai": "/logos/luma.svg",
  "pika": "/logos/pika.svg",
  "pika labs": "/logos/pika.svg",
  "upstage": "/logos/upstage.svg",
  "pytorch": "/logos/pytorch.svg",
  "tensorflow": "/logos/tensorflow.svg",
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
 * @param companyOrOwner Name of the company, creator, or GitHub repository owner
 * @param existingLogoUrl Existing logoUrl or avatarUrl from backend / data
 * @param isRepoOwner Set to true when resolving for a GitHub repository owner
 * @returns Secure logo URL (local SVG, official HTTPS CDN) or null if unresolvable
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

  const normalized = normalizeName(cleanName);
  const compact = normalized.replace(/\s+/g, "");
  const rawCompact = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "");

  // 1. Check exact match in local SVG map
  if (LOCAL_LOGO_MAP[normalized]) {
    return LOCAL_LOGO_MAP[normalized];
  }
  if (LOCAL_LOGO_MAP[compact]) {
    return LOCAL_LOGO_MAP[compact];
  }
  if (LOCAL_LOGO_MAP[rawCompact]) {
    return LOCAL_LOGO_MAP[rawCompact];
  }

  // 2. Strict whole-word and robust prefix matching (NEVER match substring of key to avoid collisions)
  const words = normalized.split(/\s+/);
  for (const [key, logoPath] of Object.entries(LOCAL_LOGO_MAP)) {
    if (words.includes(key)) {
      return logoPath;
    }
    if (key.length >= 4 && normalized.includes(key)) {
      return logoPath;
    }
  }

  // 3. If an existing URL is provided and valid, use it
  if (existingLogoUrl && existingLogoUrl.trim() !== "" && (existingLogoUrl.startsWith("http://") || existingLogoUrl.startsWith("https://") || existingLogoUrl.startsWith("/"))) {
    return existingLogoUrl.replace(/^http:\/\//i, "https://");
  }

  // 4. For GitHub repository owners, use GitHub's official avatar CDN
  if (isRepoOwner && cleanName && !cleanName.includes(" ") && !cleanName.includes(".")) {
    return `https://github.com/${encodeURIComponent(cleanName)}.png?size=128`;
  }

  // 5. Fallback domain-based favicon for known domains or clean company names
  if (cleanName && !cleanName.includes(" ")) {
    const domain = cleanName.includes(".") ? cleanName : `${cleanName}.com`;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
  }

  return null;
}

/**
 * Resolves the accurate company/creator and logo for a model.
 * 
 * Corrects database anomalies where models are tagged with generic base providers
 * (e.g. DeepSeek R1 attributed to Google, Stable Code attributed to Meta, WizardLM attributed to Meta)
 * so that each distinct AI model/company gets its authentic, unconflicted logo.
 */
export function resolveModelBrand(model: {
  name?: string | null;
  creator?: string | null;
  provider?: { name?: string | null; logoUrl?: string | null } | null;
  slug?: string | null;
  logoUrl?: string | null;
  company?: { name?: string | null; logoUrl?: string | null } | null;
}): { companyName: string; logoUrl: string | null } {
  const name = (model.name || "").trim();
  const nameLower = name.toLowerCase();
  const creator = (model.creator || "").trim();
  const providerName = (model.provider?.name || "").trim();
  const dbLogo = model.provider?.logoUrl || (model as any).company?.logoUrl || (model as any).logoUrl || null;

  // Retrieve logo directly from database if available
  if (dbLogo && dbLogo.trim() !== "") {
    const companyName = providerName || creator || "—";
    return { companyName, logoUrl: dbLogo.replace(/^http:\/\//i, "https://") };
  }

  // Model-name based creator attribution when DB has host/generic provider
  if (nameLower.includes("deepseek") || nameLower.startsWith("r1 ") || nameLower === "deepseek r1") {
    return { companyName: "DeepSeek", logoUrl: "/logos/deepseek.svg" };
  }
  if (nameLower.startsWith("stable code") || nameLower.startsWith("stable beluga") || nameLower.startsWith("stablelm") || nameLower.startsWith("stable diffusion") || nameLower.startsWith("sdxl")) {
    return { companyName: "Stability AI", logoUrl: "/logos/stability.svg" };
  }
  if (nameLower.startsWith("wizardlm") || nameLower.startsWith("wizardcoder") || nameLower.startsWith("wizard math")) {
    return { companyName: "Microsoft", logoUrl: "/logos/microsoft.svg" };
  }
  if (nameLower === "vicuna" || nameLower.startsWith("wizard vicuna")) {
    return { companyName: "LMSYS", logoUrl: "/logos/lmsys.svg" };
  }
  if (nameLower.startsWith("tinyllama")) {
    return { companyName: "TinyLlama", logoUrl: "/logos/tinyllama.svg" };
  }
  if (nameLower.startsWith("tinydolphin") || nameLower.includes("dolphin") || nameLower.startsWith("samantha")) {
    return { companyName: "Cognitive Computations", logoUrl: "/logos/cognitive.svg" };
  }
  if (nameLower.includes("phind")) {
    return { companyName: "Phind", logoUrl: "/logos/phind.svg" };
  }
  if (nameLower.startsWith("starcoder")) {
    return { companyName: "BigCode", logoUrl: "/logos/bigcode.svg" };
  }
  if (nameLower.startsWith("tulu") || nameLower.startsWith("olmo")) {
    return { companyName: "AI2", logoUrl: "/logos/ai2.svg" };
  }
  if (nameLower.startsWith("nous hermes") || nameLower.includes("hermes") || nameLower.startsWith("openhermes")) {
    return { companyName: "Nous Research", logoUrl: "/logos/nous.svg" };
  }
  if (nameLower.startsWith("granite")) {
    return { companyName: "IBM", logoUrl: "/logos/ibm.svg" };
  }
  if (nameLower.startsWith("falcon")) {
    return { companyName: "TII", logoUrl: "/logos/tii.svg" };
  }
  if (nameLower.startsWith("minicpm")) {
    return { companyName: "OpenBMB", logoUrl: "/logos/openbmb.svg" };
  }
  if (nameLower.startsWith("lfm")) {
    return { companyName: "Liquid AI", logoUrl: "/logos/liquid.svg" };
  }
  if (nameLower.startsWith("bge")) {
    return { companyName: "BAAI", logoUrl: "/logos/baai.svg" };
  }
  if (nameLower.startsWith("gemma") || nameLower.startsWith("shieldgemma") || nameLower.startsWith("codegemma") || nameLower.startsWith("translategemma") || nameLower.startsWith("medgemma")) {
    return { companyName: "Google", logoUrl: "/logos/google.svg" };
  }
  if (nameLower.startsWith("qwen") || nameLower.startsWith("qwq") || nameLower.startsWith("smallthinker")) {
    return { companyName: "Alibaba", logoUrl: "/logos/qwen.svg" };
  }
  if (nameLower.startsWith("smollm")) {
    return { companyName: "Hugging Face", logoUrl: "/logos/huggingface.svg" };
  }
  if (nameLower.startsWith("solar")) {
    return { companyName: "Upstage", logoUrl: "/logos/upstage.svg" };
  }
  if (nameLower.startsWith("snowflake") || nameLower.startsWith("arctic")) {
    return { companyName: "Snowflake", logoUrl: "/logos/snowflake.svg" };
  }
  if (nameLower.includes("paraphrase") || nameLower.includes("minilm") || nameLower.includes("sentence-transformer")) {
    return { companyName: "Sentence Transformers", logoUrl: "/logos/sentencetransformers.svg" };
  }
  if (nameLower.includes("orca mini")) {
    return { companyName: "Pankaj Mathur", logoUrl: "/logos/pankajmathur.svg" };
  }
  if (nameLower.includes("mxbai")) {
    return { companyName: "Mixedbread", logoUrl: "/logos/mixedbread.svg" };
  }
  if (nameLower.includes("alfred")) {
    return { companyName: "LightOn", logoUrl: "/logos/lighton.svg" };
  }
  if (nameLower.includes("cogito")) {
    return { companyName: "Deep Cogito", logoUrl: "/logos/cogito.svg" };
  }
  if (nameLower.includes("ornith")) {
    return { companyName: "Deep Reinforce", logoUrl: "/logos/deepreinforce.svg" };
  }
  if (nameLower.includes("codebooga")) {
    return { companyName: "oobabooga", logoUrl: "/logos/oobabooga.svg" };
  }
  if (nameLower.includes("notus") || nameLower.includes("notux")) {
    return { companyName: "Argilla", logoUrl: "/logos/argilla.svg" };
  }
  if (nameLower.includes("duckdb")) {
    return { companyName: "MotherDuck", logoUrl: "/logos/motherduck.svg" };
  }
  if (nameLower.includes("virtuoso")) {
    return { companyName: "Arcee AI", logoUrl: "/logos/arcee.svg" };
  }
  if (nameLower.includes("laguna")) {
    return { companyName: "Poolside", logoUrl: "/logos/poolside.svg" };
  }
  if (nameLower.includes("reka")) {
    return { companyName: "Reka AI", logoUrl: "/logos/reka.svg" };
  }
  if (nameLower.includes("internlm")) {
    return { companyName: "InternLM", logoUrl: "/logos/internlm.svg" };
  }
  if (nameLower.includes("starling") || nameLower.includes("nexusraven") || nameLower.includes("athene")) {
    return { companyName: "Nexusflow", logoUrl: "/logos/nexusflow.svg" };
  }
  if (nameLower.includes("sqlcoder")) {
    return { companyName: "Defog", logoUrl: "/logos/defog.svg" };
  }
  if (nameLower.includes("sailor")) {
    return { companyName: "Sailor2", logoUrl: "/logos/sailor.svg" };
  }
  if (nameLower.includes("rnj")) {
    return { companyName: "Essential AI", logoUrl: "/logos/essential.svg" };
  }
  if (nameLower.includes("reflection")) {
    return { companyName: "HyperWrite", logoUrl: "/logos/hyperwrite.svg" };
  }
  if (nameLower.includes("reader lm") || nameLower.includes("readerlm")) {
    return { companyName: "Jina AI", logoUrl: "/logos/jina.svg" };
  }
  if (nameLower.includes("openchat")) {
    return { companyName: "OpenChat", logoUrl: "/logos/openchat.svg" };
  }
  if (nameLower.includes("opencoder")) {
    return { companyName: "OpenCoder Team", logoUrl: "/logos/opencoder.svg" };
  }
  if (nameLower.includes("platypus")) {
    return { companyName: "Open-Orca", logoUrl: "/logos/openorca.svg" };
  }
  if (nameLower.includes("bespoke")) {
    return { companyName: "Bespoke Labs", logoUrl: "/logos/bespoke.svg" };
  }
  if (nameLower.includes("moondream")) {
    return { companyName: "Moondream", logoUrl: "/logos/moondream.svg" };
  }

  // Default attribution
  const companyName = providerName || creator || "—";
  const logoUrl = resolveCompanyLogo(companyName, model.provider?.logoUrl);
  return { companyName, logoUrl };
}
