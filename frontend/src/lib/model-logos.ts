/**
 * Model and provider company logo resolver for AI Orbit.
 * Prioritizes database logoUrl from backend API (Company.logoUrl).
 * Falls back to high-resolution domain favicons or dynamic CDN URLs.
 * Does not rely on static local SVG/PNG assets in the codebase.
 */

const KNOWN_COMPANY_DOMAINS: Record<string, string> = {
  // Frontier Labs & Providers
  openai: "openai.com",
  anthropic: "anthropic.com",
  google: "google.com",
  deepmind: "deepmind.google",
  meta: "meta.com",
  facebook: "meta.com",
  microsoft: "microsoft.com",
  mistral: "mistral.ai",
  mistralai: "mistral.ai",
  nvidia: "nvidia.com",
  huggingface: "huggingface.co",
  "hugging-face": "huggingface.co",
  "hugging face": "huggingface.co",
  perplexity: "perplexity.ai",
  deepseek: "deepseek.com",
  "deepseek ai": "deepseek.com",
  qwen: "qwenlm.github.io",
  alibaba: "alibabacloud.com",
  "alibaba qwen": "qwenlm.github.io",
  cohere: "cohere.com",
  "cohere ai": "cohere.com",
  stability: "stability.ai",
  "stability ai": "stability.ai",
  "stability-ai": "stability.ai",
  xai: "x.ai",
  "x.ai": "x.ai",
  databricks: "databricks.com",
  snowflake: "snowflake.com",
  ibm: "ibm.com",
  ai21: "ai21.com",
  "ai21 labs": "ai21.com",
  ai2: "allenai.org",
  "allen ai": "allenai.org",
  "allen institute for ai": "allenai.org",
  baidu: "baidu.com",
  bytedance: "bytedance.com",
  amazon: "aws.amazon.com",
  aws: "aws.amazon.com",
  upstage: "upstage.ai",
  writer: "writer.com",
  zhipu: "zhipuai.cn",
  moonshot: "moonshot.cn",
  minimax: "minimax.io",
  midjourney: "midjourney.com",
  "black forest labs": "blackforestlabs.ai",
  liquid: "liquid.ai",
  cartesia: "cartesia.ai",
  ideogram: "ideogram.ai",
  pika: "pika.art",
  luma: "lumalabs.ai",
  tencent: "tencent.com",
  together: "together.ai",
  tii: "tii.ae",
  elevenlabs: "elevenlabs.io",
  runway: "runwayml.com",
  suno: "suno.com",
  apple: "apple.com",
  groq: "groq.com",
  replicate: "replicate.com",
  reka: "reka.ai",
  internlm: "internlm.com",
  stepfun: "stepfun.com",
  baichuan: "baichuan-ai.com",
  yi: "01.ai",
  "01.ai": "01.ai",
  unsloth: "unsloth.ai",
  vllm: "vllm.ai",
  ollama: "ollama.com",
  lmsys: "lmsys.org",
  lmstudio: "lmstudio.ai",
  modal: "modal.com",
  baseten: "baseten.co",
  ray: "anyscale.com",
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
  "jina ai": "jina.ai",
  jina: "jina.ai",
  kuaishou: "klingai.com",
  kling: "klingai.com",
  "lg ai research": "lgresearch.ai",
  lighton: "lighton.ai",
  mixedbread: "mixedbread.ai",
  moondream: "moondream.ai",
  morph: "morph.so",
  motherduck: "motherduck.com",
  nexusflow: "nexusflow.ai",
  nomic: "nomic.ai",
  "nous research": "nousresearch.com",
  "open-orca": "github.com/Open-Orca.png",
  openbmb: "github.com/OpenBMB.png",
  openchat: "openchat.team",
  "open coder team": "github.com/OpenCoder-llm.png",
  oobabooga: "github.com/oobabooga.png",
  perceptron: "perceptron.ai",
  poolside: "poolside.ai",
  recraft: "recraft.ai",
  sailor2: "aisingapore.org",
  "sentence transformers": "sbert.net",
  "voyage ai": "voyageai.com",
  voyage: "voyageai.com",
  xiaomi: "mi.com",
  "z.ai": "z.ai",
};

/**
 * Resolves the logo for an AI Model provider or creator.
 * 1. Database-backed logoUrl (src) takes top priority.
 * 2. If no logo in database, falls back to dynamic Google Favicon or GitHub avatar.
 * 3. Falls back to websiteUrl domain.
 */
export function resolveProviderLogo(
  src: string | null | undefined,
  name: string | null | undefined,
  websiteUrl?: string | null,
  modelName?: string | null
): string | null {
  // 1. Primary: If provided src (from DB) is non-empty, use it
  if (src && src.trim().length > 0) {
    return src.trim();
  }

  const n = (name || "").trim().toLowerCase();

  // 2. Check known domains dictionary for dynamic favicon
  const knownDomain = KNOWN_COMPANY_DOMAINS[n];
  if (knownDomain) {
    if (knownDomain.startsWith("github.com/")) {
      return `https://${knownDomain}`;
    }
    return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(knownDomain)}`;
  }

  // 3. Resolve from websiteUrl if available
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
        if (host === "huggingface.co") {
          const parts = website.pathname.split("/").filter(Boolean);
          if (parts.length > 0) {
            const org = parts[0].toLowerCase();
            if (KNOWN_COMPANY_DOMAINS[org]) {
              const dom = KNOWN_COMPANY_DOMAINS[org];
              if (dom.startsWith("github.com/")) return `https://${dom}`;
              return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(dom)}`;
            }
          }
        }
        return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(host)}`;
      }
    } catch {
      // invalid URL, ignore
    }
  }

  return null;
}
