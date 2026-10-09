import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

function getPrisma(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export interface LogoDefinition {
  slug: string;
  name: string;
  logoFile: string;
  domain?: string;
  category?: string;
  description?: string;
  creatorAliases?: string[];
}

export const BRAND_LOGOS: LogoDefinition[] = [
  { slug: "openai", name: "OpenAI", logoFile: "openai.svg", domain: "openai.com", category: "model_provider", description: "Creator of GPT-4, ChatGPT, and o1 reasoning models", creatorAliases: ["openai", "chatgpt", "gpt"] },
  { slug: "anthropic", name: "Anthropic", logoFile: "anthropic.svg", domain: "anthropic.com", category: "model_provider", description: "Creator of Claude family models", creatorAliases: ["anthropic", "claude"] },
  { slug: "google", name: "Google", logoFile: "google.svg", domain: "google.com", category: "model_provider", description: "Creator of Gemini and Gemma models", creatorAliases: ["google", "gemini", "gemma"] },
  { slug: "deepmind", name: "Google DeepMind", logoFile: "deepmind.svg", domain: "deepmind.google", category: "model_provider", description: "Pioneering AI research and DeepMind models", creatorAliases: ["deepmind", "google deepmind"] },
  { slug: "meta", name: "Meta", logoFile: "meta.svg", domain: "meta.com", category: "model_provider", description: "Creator of Llama open weights foundation models", creatorAliases: ["meta", "meta ai", "llama", "fair", "facebook"] },
  { slug: "mistralai", name: "Mistral AI", logoFile: "mistralai.svg", domain: "mistral.ai", category: "model_provider", description: "Creator of Mistral, Mixtral, and Codestral models", creatorAliases: ["mistral", "mistralai", "mistral ai", "codestral", "mixtral"] },
  { slug: "microsoft", name: "Microsoft", logoFile: "microsoft.svg", domain: "microsoft.com", category: "model_provider", description: "Creator of Phi series small language models", creatorAliases: ["microsoft", "msft", "phi"] },
  { slug: "nvidia", name: "NVIDIA", logoFile: "nvidia.svg", domain: "nvidia.com", category: "model_provider", description: "Creator of Nemotron and NV-Embed foundation models", creatorAliases: ["nvidia", "nemotron"] },
  { slug: "deepseek", name: "DeepSeek", logoFile: "deepseek.svg", domain: "deepseek.com", category: "model_provider", description: "Creator of DeepSeek-V3 and DeepSeek-R1 reasoning models", creatorAliases: ["deepseek", "deepseek-ai", "deepseek ai"] },
  { slug: "qwen", name: "Qwen", logoFile: "qwen.svg", domain: "qwenlm.github.io", category: "model_provider", description: "Alibaba's open and powerful Qwen model family", creatorAliases: ["qwen", "alibaba qwen"] },
  { slug: "alibaba", name: "Alibaba Cloud", logoFile: "alibaba.svg", domain: "alibabacloud.com", category: "model_provider", description: "Cloud and AI foundation services by Alibaba", creatorAliases: ["alibaba", "alibaba cloud", "alibabacloud"] },
  { slug: "xai", name: "xAI", logoFile: "xai.svg", domain: "x.ai", category: "model_provider", description: "Creator of Grok conversational and vision models", creatorAliases: ["xai", "x.ai", "grok"] },
  { slug: "cohere", name: "Cohere", logoFile: "cohere.svg", domain: "cohere.com", category: "model_provider", description: "Enterprise LLMs including Command R and Embed models", creatorAliases: ["cohere", "cohere-ai"] },
  { slug: "huggingface", name: "Hugging Face", logoFile: "huggingface.svg", domain: "huggingface.co", category: "model_provider", description: "Open source AI community and Smollm models", creatorAliases: ["hugging face", "huggingface", "smollm"] },
  { slug: "stability", name: "Stability AI", logoFile: "stability.svg", domain: "stability.ai", category: "model_provider", description: "Creator of Stable Diffusion image and video models", creatorAliases: ["stability", "stability ai", "stability-ai", "stable diffusion"] },
  { slug: "flux", name: "Black Forest Labs", logoFile: "flux.svg", domain: "blackforestlabs.ai", category: "model_provider", description: "Creators of state of the art FLUX image models", creatorAliases: ["black forest labs", "blackforestlabs", "flux"] },
  { slug: "ai2", name: "Allen Institute for AI", logoFile: "ai2.svg", domain: "allenai.org", category: "model_provider", description: "Creator of OLMo open language models and datasets", creatorAliases: ["ai2", "allen ai", "allen institute", "olmo"] },
  { slug: "ai21", name: "AI21 Labs", logoFile: "ai21.svg", domain: "ai21.com", category: "model_provider", description: "Creator of Jamba hybrid Mamba-Transformer models", creatorAliases: ["ai21", "ai21 labs", "jamba"] },
  { slug: "midjourney", name: "Midjourney", logoFile: "midjourney.svg", domain: "midjourney.com", category: "model_provider", description: "Creative generative image synthesis models", creatorAliases: ["midjourney"] },
  { slug: "moonshot", name: "Moonshot AI", logoFile: "moonshot.svg", domain: "moonshot.cn", category: "model_provider", description: "Creator of Kimi long-context LLMs", creatorAliases: ["moonshot", "kimi"] },
  { slug: "zhipu", name: "Zhipu AI", logoFile: "zhipu.svg", domain: "zhipuai.cn", category: "model_provider", description: "Creator of GLM and CogVideo models", creatorAliases: ["zhipu", "glm", "cogvideo"] },
  { slug: "baichuan", name: "Baichuan AI", logoFile: "baichuan.svg", domain: "baichuan-ai.com", category: "model_provider", description: "Bilingual Chinese-English foundation models", creatorAliases: ["baichuan"] },
  { slug: "01ai", name: "01.AI", logoFile: "01ai.svg", domain: "01.ai", category: "model_provider", description: "Dr. Kai-Fu Lee's Yi foundation models", creatorAliases: ["01.ai", "01-ai", "yi", "01ai"] },
  { slug: "minimax", name: "MiniMax", logoFile: "minimax.svg", domain: "minimaxi.com", category: "model_provider", description: "ABAB text and Hailuo video generation models", creatorAliases: ["minimax", "hailuo"] },
  { slug: "stepfun", name: "StepFun", logoFile: "stepfun.svg", domain: "stepfun.com", category: "model_provider", description: "Step-1 and Step-2 multimodal models", creatorAliases: ["stepfun"] },
  { slug: "tencent", name: "Tencent", logoFile: "tencent.svg", domain: "tencent.com", category: "model_provider", description: "Hunyuan foundation and 3D generative models", creatorAliases: ["tencent", "hunyuan"] },
  { slug: "baidu", name: "Baidu", logoFile: "baidu.svg", domain: "baidu.com", category: "model_provider", description: "ERNIE Bot foundation model family", creatorAliases: ["baidu", "ernie"] },
  { slug: "bytedance", name: "ByteDance", logoFile: "bytedance.svg", domain: "bytedance.com", category: "model_provider", description: "Doubao language and visual generation models", creatorAliases: ["bytedance", "doubao"] },
  { slug: "snowflake", name: "Snowflake", logoFile: "snowflake.svg", domain: "snowflake.com", category: "model_provider", description: "Arctic enterprise open-source LLM", creatorAliases: ["snowflake", "arctic"] },
  { slug: "databricks", name: "Databricks", logoFile: "databricks.svg", domain: "databricks.com", category: "model_provider", description: "DBRX open-source mixture-of-experts model", creatorAliases: ["databricks", "dbrx"] },
  { slug: "ibm", name: "IBM", logoFile: "ibm.svg", domain: "ibm.com", category: "model_provider", description: "Granite open foundation models for business and code", creatorAliases: ["ibm", "granite"] },
  { slug: "apple", name: "Apple", logoFile: "apple.svg", domain: "apple.com", category: "model_provider", description: "Apple Intelligence and OpenELM on-device models", creatorAliases: ["apple", "openelm"] },
  { slug: "amazon", name: "Amazon", logoFile: "amazon.svg", domain: "amazon.com", category: "model_provider", description: "Nova and Titan models on AWS Bedrock", creatorAliases: ["amazon", "aws", "nova", "titan"] },
  { slug: "cerebras", name: "Cerebras", logoFile: "cerebras.svg", domain: "cerebras.ai", category: "model_provider", description: "Fast wafer-scale AI models and inference", creatorAliases: ["cerebras"] },
  { slug: "groq", name: "Groq", logoFile: "groq.svg", domain: "groq.com", category: "model_provider", description: "Ultra-fast LPU inference engine for open models", creatorAliases: ["groq"] },
  { slug: "tii", name: "Technology Innovation Institute", logoFile: "tii.svg", domain: "tii.ae", category: "model_provider", description: "Creator of Falcon open foundation models", creatorAliases: ["tii", "falcon"] },
  { slug: "upstage", name: "Upstage", logoFile: "upstage.svg", domain: "upstage.ai", category: "model_provider", description: "Creator of Solar high-performance LLMs", creatorAliases: ["upstage", "solar"] },
  { slug: "arcee", name: "Arcee AI", logoFile: "arcee.svg", domain: "arcee.ai", category: "model_provider", description: "Specialized Small Language Model architectures (SLMs)", creatorAliases: ["arcee", "arcee ai", "virtuoso"] },
  { slug: "defog", name: "Defog", logoFile: "defog.svg", domain: "defog.ai", category: "model_provider", description: "SQLCoder models for text-to-SQL generation", creatorAliases: ["defog", "sqlcoder"] },
  { slug: "moondream", name: "Moondream", logoFile: "moondream.svg", domain: "moondream.ai", category: "model_provider", description: "Tiny, fast vision-language model for edge devices", creatorAliases: ["moondream"] },
  { slug: "jina", name: "Jina AI", logoFile: "jina.svg", domain: "jina.ai", category: "model_provider", description: "Search, embeddings, and Reader LM models", creatorAliases: ["jina", "jina ai", "readerlm"] },
  { slug: "openchat", name: "OpenChat", logoFile: "openchat.svg", domain: "openchat.team", category: "model_provider", description: "Advancing open-source instruction tuned LLMs", creatorAliases: ["openchat"] },
  { slug: "opencoder", name: "OpenCoder Team", logoFile: "opencoder.svg", domain: "opencoder-llm.github.io", category: "model_provider", description: "Open reproducible code LLMs", creatorAliases: ["opencoder"] },
  { slug: "openorca", name: "Open-Orca", logoFile: "openorca.svg", domain: "open-orca.org", category: "model_provider", description: "Platypus and Orca reasoning datasets and models", creatorAliases: ["openorca", "platypus", "orca"] },
  { slug: "reka", name: "Reka AI", logoFile: "reka.svg", domain: "reka.ai", category: "model_provider", description: "Reka Flash and Core multimodal models", creatorAliases: ["reka", "reka ai"] },
  { slug: "internlm", name: "InternLM", logoFile: "internlm.svg", domain: "internlm.intern-ai.org.cn", category: "model_provider", description: "Shanghai AI Lab foundation models", creatorAliases: ["internlm"] },
  { slug: "nexusflow", name: "Nexusflow", logoFile: "nexusflow.svg", domain: "nexusflow.ai", category: "model_provider", description: "Athene and Starling models for function calling", creatorAliases: ["nexusflow", "athene", "starling"] },
  { slug: "hyperwrite", name: "HyperWrite", logoFile: "hyperwrite.svg", domain: "hyperwriteai.com", category: "model_provider", description: "Reflection Llama reasoning models", creatorAliases: ["hyperwrite", "reflection"] },
  { slug: "together", name: "Together AI", logoFile: "together.svg", domain: "together.ai", category: "model_provider", description: "Open model cloud and RedPajama datasets", creatorAliases: ["together", "together ai", "redpajama"] },
  { slug: "ollama", name: "Ollama", logoFile: "ollama.svg", domain: "ollama.com", category: "model_provider", description: "Local model runtime and distribution", creatorAliases: ["ollama"] },
  { slug: "vllm", name: "vLLM", logoFile: "vllm.svg", domain: "vllm.ai", category: "model_provider", description: "High-throughput and memory-efficient LLM serving", creatorAliases: ["vllm"] },
];

export async function seedLogos(prisma: PrismaClient) {
  console.log(`Starting logo database population (${BRAND_LOGOS.length} logos)...`);

  const possibleLogoDirs = [
    path.resolve(process.cwd(), "../frontend/public/logos"),
    path.resolve(process.cwd(), "frontend/public/logos"),
    path.resolve(process.cwd(), "public/logos"),
  ];

  let logoDir = possibleLogoDirs.find((d) => fs.existsSync(d)) || "";

  let insertedCount = 0;
  const brandLogoMap = new Map<string, string>(); // slug -> brandLogo.id

  for (const item of BRAND_LOGOS) {
    let svgContent: string | null = null;
    if (logoDir) {
      const filePath = path.join(logoDir, item.logoFile);
      if (fs.existsSync(filePath)) {
        try {
          svgContent = fs.readFileSync(filePath, "utf-8");
        } catch {
          // ignore read error
        }
      }
    }

    const logoUrl = `/logos/${item.logoFile}`;

    const brandLogo = await prisma.brandLogo.upsert({
      where: { slug: item.slug },
      update: {
        name: item.name,
        logoUrl,
        svgContent: svgContent || undefined,
        domain: item.domain,
        category: item.category || "model_provider",
        description: item.description,
      },
      create: {
        slug: item.slug,
        name: item.name,
        logoUrl,
        svgContent,
        domain: item.domain,
        category: item.category || "model_provider",
        description: item.description,
      },
    });

    brandLogoMap.set(item.slug, brandLogo.id);
    insertedCount++;
  }

  console.log(`Successfully stored/upserted ${insertedCount} brand logos in database.`);

  // Link existing AIModel records in the database to their corresponding BrandLogo
  try {
    const models = await prisma.aIModel.findMany({
      select: { id: true, name: true, creator: true, slug: true, logoId: true },
    });

    let linkedCount = 0;
    for (const model of models) {
      const creatorLower = (model.creator || "").toLowerCase();
      const nameLower = (model.name || "").toLowerCase();

      // Find matching logo definition
      let matchedSlug: string | null = null;
      for (const brand of BRAND_LOGOS) {
        if (brand.slug === creatorLower || brand.name.toLowerCase() === creatorLower) {
          matchedSlug = brand.slug;
          break;
        }
        if (brand.creatorAliases?.some((alias) => creatorLower.includes(alias) || nameLower.includes(alias))) {
          matchedSlug = brand.slug;
          break;
        }
      }

      if (matchedSlug && brandLogoMap.has(matchedSlug)) {
        const logoId = brandLogoMap.get(matchedSlug)!;
        if (model.logoId !== logoId) {
          await prisma.aIModel.update({
            where: { id: model.id },
            data: { logoId },
          });
          linkedCount++;
        }
      }
    }
    console.log(`Linked ${linkedCount} AI models to their database brand logos.`);
  } catch (err) {
    console.warn("Could not link existing models (maybe no models seeded yet):", err);
  }
}

async function run() {
  const prisma = getPrisma();
  try {
    await seedLogos(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

if (process.argv[1]?.endsWith("seed-logos.ts")) {
  run().catch((e) => {
    console.error("Failed to seed logos:", e);
    process.exit(1);
  });
}
