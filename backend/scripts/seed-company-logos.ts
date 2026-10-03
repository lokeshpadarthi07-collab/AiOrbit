import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

function getPrisma(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not set");
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
}

// Hosted CDN / SVG URLs for known AI companies and labs.
// No static files stored in the codebase; all stored directly in the database.
const COMPANY_LOGOS: Record<string, string> = {
  openai: "https://cdn.simpleicons.org/openai",
  anthropic: "https://cdn.simpleicons.org/anthropic",
  google: "https://cdn.simpleicons.org/google",
  deepmind: "https://cdn.simpleicons.org/google",
  meta: "https://cdn.simpleicons.org/meta",
  microsoft: "https://cdn.simpleicons.org/microsoft",
  mistral: "https://cdn.simpleicons.org/mistralai",
  mistralai: "https://cdn.simpleicons.org/mistralai",
  nvidia: "https://cdn.simpleicons.org/nvidia",
  huggingface: "https://cdn.simpleicons.org/huggingface",
  perplexity: "https://cdn.simpleicons.org/perplexity",
  deepseek: "https://cdn.simpleicons.org/deepseek",
  qwen: "https://qwenlm.github.io/assets/images/logo.png",
  alibaba: "https://cdn.simpleicons.org/alibabacloud",
  cohere: "https://cdn.simpleicons.org/cohere",
  stability: "https://cdn.simpleicons.org/stabilityai",
  "stability ai": "https://cdn.simpleicons.org/stabilityai",
  xai: "https://cdn.simpleicons.org/x",
  databricks: "https://cdn.simpleicons.org/databricks",
  snowflake: "https://cdn.simpleicons.org/snowflake",
  ibm: "https://cdn.simpleicons.org/ibm",
  ai21: "https://cdn.simpleicons.org/ai21labs",
  "ai21 labs": "https://cdn.simpleicons.org/ai21labs",
  ai2: "https://allenai.org/favicon.ico",
  "allen ai": "https://allenai.org/favicon.ico",
  baidu: "https://cdn.simpleicons.org/baidu",
  bytedance: "https://cdn.simpleicons.org/bytedance",
  amazon: "https://cdn.simpleicons.org/amazonwebservices",
  aws: "https://cdn.simpleicons.org/amazonwebservices",
  upstage: "https://en.upstage.ai/favicon.ico",
  writer: "https://writer.com/favicon.ico",
  zhipu: "https://www.zhipuai.cn/favicon.ico",
  moonshot: "https://www.moonshot.cn/favicon.ico",
  minimax: "https://www.minimax.io/favicon.ico",
  midjourney: "https://cdn.simpleicons.org/midjourney",
  "black forest labs": "https://blackforestlabs.ai/favicon.ico",
  liquid: "https://www.liquid.ai/favicon.ico",
  cartesia: "https://cartesia.ai/favicon.ico",
  ideogram: "https://ideogram.ai/favicon.ico",
  pika: "https://pika.art/favicon.ico",
  luma: "https://lumalabs.ai/favicon.ico",
  tencent: "https://cdn.simpleicons.org/tencentqq",
  together: "https://together.ai/favicon.ico",
  elevenlabs: "https://cdn.simpleicons.org/elevenlabs",
  runway: "https://cdn.simpleicons.org/runwayml",
  suno: "https://cdn.simpleicons.org/suno",
  apple: "https://cdn.simpleicons.org/apple",
  groq: "https://groq.com/favicon.ico",
  replicate: "https://cdn.simpleicons.org/replicate",
  reka: "https://reka.ai/favicon.ico",
  internlm: "https://internlm.intern-ai.org.cn/favicon.ico",
  stepfun: "https://www.stepfun.com/favicon.ico",
  baichuan: "https://www.baichuan-ai.com/favicon.ico",
  yi: "https://www.01.ai/favicon.ico",
  "01.ai": "https://www.01.ai/favicon.ico",
  unsloth: "https://unsloth.ai/favicon.ico",
  vllm: "https://cdn.simpleicons.org/vllm",
  ollama: "https://cdn.simpleicons.org/ollama",
  modal: "https://modal.com/favicon.ico",
  baseten: "https://www.baseten.co/favicon.ico",
  langchain: "https://cdn.simpleicons.org/langchain",
  qdrant: "https://cdn.simpleicons.org/qdrant",
  pytorch: "https://cdn.simpleicons.org/pytorch",
};

async function main() {
  const prisma = getPrisma();
  console.log("=== Seeding Company Logos into Database ===");

  let updatedCount = 0;

  for (const [key, logoUrl] of Object.entries(COMPANY_LOGOS)) {
    try {
      const result = await prisma.company.updateMany({
        where: {
          OR: [
            { slug: { equals: key, mode: "insensitive" } },
            { name: { equals: key, mode: "insensitive" } },
            { name: { contains: key, mode: "insensitive" } },
          ],
        },
        data: { logoUrl },
      });

      if (result.count > 0) {
        console.log(`Updated logo for [${key}]: ${result.count} company record(s)`);
        updatedCount += result.count;
      }
    } catch (err: unknown) {
      console.error(`Error updating company logo for ${key}:`, err);
    }
  }

  console.log(`\n✅ Finished updating company logos. Total updated: ${updatedCount}`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
