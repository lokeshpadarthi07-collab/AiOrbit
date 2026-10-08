/**
 * Model and provider company logo resolver for AI Orbit.
 * Maps companies and creators to official SVG / PNG logos in /logos/
 * or high-resolution domain favicons.
 */

const KNOWN_COMPANY_LOGOS: Record<string, string> = {
  // Major Frontier Labs
  openai: "/logos/openai.svg",
  anthropic: "/logos/anthropic.svg",
  google: "/logos/google.svg",
  deepmind: "/logos/google.svg",
  meta: "/logos/meta.svg",
  facebook: "/logos/meta.svg",
  microsoft: "/logos/microsoft.svg",
  mistral: "/logos/mistralai.svg",
  mistralai: "/logos/mistralai.svg",
  nvidia: "/logos/nvidia.svg",
  huggingface: "/logos/huggingface.svg",
  "hugging-face": "/logos/huggingface.svg",
  "hugging face": "/logos/huggingface.svg",
  perplexity: "/logos/perplexity.svg",

  // Leading AI Model Companies & Labs
  deepseek: "/logos/deepseek.svg",
  "deepseek ai": "/logos/deepseek.svg",
  qwen: "/logos/qwen.svg",
  alibaba: "/logos/qwen.svg",
  "alibaba qwen": "/logos/qwen.svg",
  cohere: "/logos/cohere.svg",
  "cohere ai": "/logos/cohere.svg",
  stability: "/logos/stability.svg",
  "stability ai": "/logos/stability.svg",
  "stability-ai": "/logos/stability.svg",
  xai: "/logos/xai.svg",
  "x.ai": "/logos/xai.svg",
  databricks: "/logos/databricks.svg",
  snowflake: "/logos/snowflake.svg",
  ibm: "/logos/ibm.svg",
  ai21: "/logos/ai21.svg",
  "ai21 labs": "/logos/ai21.svg",
  ai2: "/logos/ai2.svg",
  "allen ai": "/logos/ai2.svg",
  "allen institute for ai": "/logos/ai2.svg",
  "allen institute for ai (ai2)": "/logos/ai2.svg",
  baidu: "/logos/baidu.svg",
  bytedance: "/logos/bytedance.svg",
  amazon: "/logos/aws.svg",
  aws: "/logos/aws.svg",
  "amazon web services": "/logos/aws.svg",
  upstage: "/logos/upstage.svg",
  "upstage ai": "/logos/upstage.svg",
  writer: "/logos/writer.svg",
  zhipu: "/logos/zhipu.svg",
  "zhipu ai": "/logos/zhipu.svg",
  moonshot: "/logos/moonshot.svg",
  "moonshot ai": "/logos/moonshot.svg",
  minimax: "/logos/minimax.svg",
  midjourney: "/logos/midjourney.svg",
  "black forest labs": "/logos/blackforestlabs.svg",
  liquid: "/logos/liquid.svg",
  "liquid ai": "/logos/liquid.svg",
  cartesia: "/logos/cartesia.svg",
  "cartesia ai": "/logos/cartesia.svg",
  ideogram: "/logos/ideogram.svg",
  pika: "/logos/pika.svg",
  "pika labs": "/logos/pika.svg",
  luma: "/logos/luma.svg",
  "luma ai": "/logos/luma.svg",
  tencent: "/logos/tencent.svg",
  together: "/logos/together.svg",
  "together ai": "/logos/together.svg",
  tii: "/logos/tii.png",
  "technology innovation institute": "/logos/tii.png",
  elevenlabs: "/logos/elevenlabs.svg",
  runway: "/logos/runway.svg",
  runwayml: "/logos/runway.svg",
  suno: "/logos/suno.svg",
  "suno ai": "/logos/suno.svg",
  apple: "/logos/apple.svg",
  groq: "/logos/groq.png",
  replicate: "/logos/replicate.svg",
  reka: "/logos/reka.svg",
  "reka ai": "/logos/reka.svg",
  internlm: "/logos/internlm.svg",
  stepfun: "/logos/stepfun.svg",
  baichuan: "/logos/baichuan.svg",
  "baichuan ai": "/logos/baichuan.svg",
  yi: "/logos/yi.svg",
  "01.ai": "/logos/yi.svg",
  "01-ai": "/logos/yi.svg",
  "zero one ai": "/logos/yi.svg",
  unsloth: "/logos/unsloth.png",
  vllm: "/logos/vllm.svg",
  ollama: "/logos/ollama.svg",
  lmsys: "/logos/lmsys.png",
  lmstudio: "/logos/lmstudio.png",
  modal: "/logos/modal.png",
  baseten: "/logos/baseten.png",
  ray: "/logos/ray.png",
  anyscale: "/logos/ray.png",
  eleutherai: "/logos/eleutherai.png",
  comfyui: "/logos/comfyui.png",
  "comfy org": "/logos/comfyui.png",
  jan: "/logos/jan.png",
  langchain: "/logos/langchain.svg",
  llamaindex: "/logos/llamaindex.png",
};

const KNOWN_COMPANY_DOMAINS: Record<string, string> = {
  "01.ai": "01.ai",
  "01-ai": "01.ai",
  "zero one ai": "01.ai",
  "arcee ai": "arcee.ai",
  arcee: "arcee.ai",
  argilla: "argilla.io",
  baai: "baai.ac.cn",
  "bespoke labs": "bespokelabs.ai",
  bigcode: "github.com/bigcode-project.png",
  "deep cogito": "deepcogito.com",
  "deep reinforce": "deepreinforce.ai",
  defog: "defog.ai",
  "essential ai": "essential.ai",
  "fish audio": "fish.audio",
  hyperwrite: "hyperwriteai.com",
  inception: "inceptionlabs.ai",
  "inclusion ai": "inclusionai.com",
  "inflection ai": "inflection.ai",
  internlm: "internlm.com",
  "jina ai": "jina.ai",
  jina: "jina.ai",
  kuaishou: "klingai.com",
  "kuaishou technology": "klingai.com",
  kling: "klingai.com",
  "lg ai research": "lgresearch.ai",
  "lg ai": "lgresearch.ai",
  lighton: "lighton.ai",
  mixedbread: "mixedbread.ai",
  "mixedbread.ai": "mixedbread.ai",
  moondream: "moondream.ai",
  morph: "morph.so",
  "motherduck & numbers station": "motherduck.com",
  motherduck: "motherduck.com",
  nexusflow: "nexusflow.ai",
  nomic: "nomic.ai",
  "nous research": "nousresearch.com",
  "open-orca": "github.com/Open-Orca.png",
  openbmb: "github.com/OpenBMB.png",
  openchat: "openchat.team",
  "open coder team": "github.com/OpenCoder-llm.png",
  "opencoder team": "github.com/OpenCoder-llm.png",
  opencoder: "github.com/OpenCoder-llm.png",
  oobabooga: "github.com/oobabooga.png",
  "pankaj mathur": "huggingface.co",
  perceptron: "perceptron.ai",
  poolside: "poolside.ai",
  "recraft ai": "recraft.ai",
  recraft: "recraft.ai",
  "reka ai": "reka.ai",
  reka: "reka.ai",
  "2noise": "github.com/2noise.png",
  sailor2: "aisingapore.org",
  "sentence transformers": "sbert.net",
  stepfun: "stepfun.com",
  "voyage ai": "voyageai.com",
  voyage: "voyageai.com",
  xiaomi: "mi.com",
  "z.ai": "z.ai",
};

/**
 * Resolves the cleanest, authentic logo for an AI Model provider or creator.
 * 1. Checks curated local SVG/PNG logos first.
 * 2. Checks known curated domains.
 * 3. Falls back to provider `src` (if not an ugly low-res/failed favicon).
 * 4. Resolves from website URL.
 */
export function resolveProviderLogo(
  src: string | null | undefined,
  name: string | null | undefined,
  websiteUrl?: string | null,
  modelName?: string | null
): string | null {
  const n = (name || "").trim().toLowerCase();
  const m = (modelName || "").trim().toLowerCase();

  // 1. Check exact match in known local logos
  if (n && KNOWN_COMPANY_LOGOS[n]) {
    return KNOWN_COMPANY_LOGOS[n];
  }

  // 2. Check substring matching in company name
  if (n.includes("openai")) return "/logos/openai.svg";
  if (n.includes("anthropic")) return "/logos/anthropic.svg";
  if (n.includes("google") || n.includes("deepmind")) return "/logos/google.svg";
  if (n.includes("meta") || n.includes("facebook") || n.includes("fair")) return "/logos/meta.svg";
  if (n.includes("microsoft")) return "/logos/microsoft.svg";
  if (n.includes("mistral")) return "/logos/mistralai.svg";
  if (n.includes("nvidia")) return "/logos/nvidia.svg";
  if (n.includes("hugging")) return "/logos/huggingface.svg";
  if (n.includes("perplexity")) return "/logos/perplexity.svg";
  if (n.includes("deepseek")) return "/logos/deepseek.svg";
  if (n.includes("alibaba") || n.includes("qwen")) return "/logos/qwen.svg";
  if (n.includes("cohere")) return "/logos/cohere.svg";
  if (n.includes("stability")) return "/logos/stability.svg";
  if (n.includes("xai") || n === "x.ai") return "/logos/xai.svg";
  if (n.includes("databricks")) return "/logos/databricks.svg";
  if (n.includes("snowflake")) return "/logos/snowflake.svg";
  if (n.includes("ibm")) return "/logos/ibm.svg";
  if (n.includes("ai21")) return "/logos/ai21.svg";
  if (n.includes("allen institute") || n.includes("allen ai") || n === "ai2") return "/logos/ai2.svg";
  if (n.includes("baidu")) return "/logos/baidu.svg";
  if (n.includes("bytedance") || n.includes("doubao")) return "/logos/bytedance.svg";
  if (n.includes("amazon") || n.includes("aws")) return "/logos/aws.svg";
  if (n.includes("upstage")) return "/logos/upstage.svg";
  if (n.includes("writer")) return "/logos/writer.svg";
  if (n.includes("zhipu") || n.includes("chatglm")) return "/logos/zhipu.svg";
  if (n.includes("moonshot") || n.includes("kimi")) return "/logos/moonshot.svg";
  if (n.includes("minimax")) return "/logos/minimax.svg";
  if (n.includes("midjourney")) return "/logos/midjourney.svg";
  if (n.includes("black forest")) return "/logos/blackforestlabs.svg";
  if (n.includes("liquid")) return "/logos/liquid.svg";
  if (n.includes("cartesia")) return "/logos/cartesia.svg";
  if (n.includes("ideogram")) return "/logos/ideogram.svg";
  if (n.includes("pika")) return "/logos/pika.svg";
  if (n.includes("luma")) return "/logos/luma.svg";
  if (n.includes("tencent") || n.includes("hunyuan")) return "/logos/tencent.svg";
  if (n.includes("together")) return "/logos/together.svg";
  if (n.includes("tii") || n.includes("technology innovation institute")) return "/logos/tii.png";
  if (n.includes("elevenlabs") || n.includes("eleven labs")) return "/logos/elevenlabs.svg";
  if (n.includes("runway")) return "/logos/runway.svg";
  if (n.includes("suno")) return "/logos/suno.svg";
  if (n.includes("apple")) return "/logos/apple.svg";
  if (n.includes("reka")) return "/logos/reka.svg";
  if (n.includes("internlm")) return "/logos/internlm.svg";
  if (n.includes("stepfun")) return "/logos/stepfun.svg";
  if (n.includes("baichuan")) return "/logos/baichuan.svg";
  if (n.includes("01.ai") || n.includes("01-ai") || n === "yi") return "/logos/yi.svg";
  if (n.includes("groq")) return "/logos/groq.png";
  if (n.includes("replicate")) return "/logos/replicate.svg";
  if (n.includes("unsloth")) return "/logos/unsloth.png";
  if (n.includes("vllm")) return "/logos/vllm.svg";
  if (n.includes("ollama")) return "/logos/ollama.svg";
  if (n.includes("lmsys") || n.includes("lm-sys")) return "/logos/lmsys.png";
  if (n.includes("lmstudio") || n.includes("lm studio")) return "/logos/lmstudio.png";
  if (n.includes("modal")) return "/logos/modal.png";
  if (n.includes("baseten")) return "/logos/baseten.png";
  if (n.includes("anyscale") || n.includes("ray")) return "/logos/ray.png";
  if (n.includes("eleuther")) return "/logos/eleutherai.png";
  if (n.includes("comfy")) return "/logos/comfyui.png";
  if (n.includes("jan")) return "/logos/jan.png";

  // 3. Fallback check by model name prefix/slug
  if (m) {
    if (m.startsWith("gpt") || m.startsWith("o1") || m.startsWith("o3") || m.startsWith("chatgpt")) return "/logos/openai.svg";
    if (m.startsWith("claude")) return "/logos/anthropic.svg";
    if (m.startsWith("gemini") || m.startsWith("gemma")) return "/logos/google.svg";
    if (m.startsWith("llama")) return "/logos/meta.svg";
    if (m.startsWith("qwen")) return "/logos/qwen.svg";
    if (m.startsWith("deepseek")) return "/logos/deepseek.svg";
    if (m.startsWith("mistral") || m.startsWith("mixtral") || m.startsWith("codestral") || m.startsWith("pixtral")) return "/logos/mistralai.svg";
    if (m.startsWith("grok")) return "/logos/xai.svg";
    if (m.startsWith("flux")) return "/logos/blackforestlabs.svg";
    if (m.startsWith("command-r") || m.startsWith("command r")) return "/logos/cohere.svg";
    if (m.startsWith("stable-diffusion") || m.startsWith("sdxl")) return "/logos/stability.svg";
    if (m.startsWith("dbrx")) return "/logos/databricks.svg";
    if (m.startsWith("arctic")) return "/logos/snowflake.svg";
    if (m.startsWith("granite")) return "/logos/ibm.svg";
    if (m.startsWith("jamba")) return "/logos/ai21.svg";
    if (m.startsWith("olmo") || m.startsWith("molmo")) return "/logos/ai2.svg";
    if (m.startsWith("ernie")) return "/logos/baidu.svg";
    if (m.startsWith("doubao")) return "/logos/bytedance.svg";
    if (m.startsWith("solar")) return "/logos/upstage.svg";
    if (m.startsWith("glm")) return "/logos/zhipu.svg";
    if (m.startsWith("kimi")) return "/logos/moonshot.svg";
    if (m.startsWith("reka")) return "/logos/reka.svg";
    if (m.startsWith("internlm")) return "/logos/internlm.svg";
    if (m.startsWith("baichuan")) return "/logos/baichuan.svg";
    if (m.startsWith("yi-") || m.startsWith("yi ")) return "/logos/yi.svg";
    if (m.startsWith("step-") || m.startsWith("stepfun")) return "/logos/stepfun.svg";
  }

  // 4. Check known domains dictionary
  const knownDomain = KNOWN_COMPANY_DOMAINS[n];
  if (knownDomain) {
    if (knownDomain.startsWith("github.com/")) {
      return `https://${knownDomain}`;
    }
    return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(knownDomain)}`;
  }

  // 5. If provided src is not null and not a generic broken/low-res URL, use it
  if (src?.trim()) {
    return src;
  }

  // 6. Resolve from websiteUrl if available
  return resolveWebsiteLogo(name, websiteUrl);
}

export function resolveWebsiteLogo(
  name?: string | null,
  websiteUrl?: string | null
): string | null {
  const n = (name || "").trim().toLowerCase();
  const knownDomain = KNOWN_COMPANY_DOMAINS[n];
  if (knownDomain) {
    if (knownDomain.startsWith("github.com/")) {
      return `https://${knownDomain}`;
    }
    return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(knownDomain)}`;
  }

  if (websiteUrl) {
    try {
      const website = new URL(websiteUrl);
      if (website.protocol === "http:" || website.protocol === "https:") {
        const host = website.hostname.toLowerCase();
        // If it's a huggingface model repo, check if we can get the org logo
        if (host === "huggingface.co") {
          const parts = website.pathname.split("/").filter(Boolean);
          if (parts.length > 0) {
            const org = parts[0].toLowerCase();
            if (KNOWN_COMPANY_LOGOS[org]) return KNOWN_COMPANY_LOGOS[org];
            if (KNOWN_COMPANY_DOMAINS[org]) {
              const dom = KNOWN_COMPANY_DOMAINS[org];
              if (dom.startsWith("github.com/")) return `https://${dom}`;
              return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(dom)}`;
            }
          }
          return "/logos/huggingface.svg";
        }
        return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(host)}`;
      }
    } catch {
      // invalid URL, ignore
    }
  }

  return null;
}
