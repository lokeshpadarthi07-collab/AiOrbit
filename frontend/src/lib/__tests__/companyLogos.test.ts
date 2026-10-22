import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { resolveCompanyLogo, resolveModelBrand, LOCAL_LOGO_MAP, DATABASE_BRAND_SLUGS, getDatabaseLogoUrl } from "../companyLogos";

describe("Database logo retrieval", () => {
  it("prioritizes logoUrl directly from database over local or fallback resolution", () => {
    const dbLogo = "https://cdn.aiorbit.io/providers/openai.png";
    expect(resolveCompanyLogo("OpenAI", dbLogo)).toBe(dbLogo);
    expect(resolveCompanyLogo("Google", "https://db.aiorbit.io/google.svg")).toBe("https://db.aiorbit.io/google.svg");
  });

  it("retrieves model provider logo directly from database model object", () => {
    const modelWithDbLogo = {
      name: "Custom Model",
      provider: { name: "Custom AI", logoUrl: "https://db.aiorbit.io/custom-logo.svg" },
    };
    const resolved = resolveModelBrand(modelWithDbLogo);
    expect(resolved.logoUrl).toBe("https://db.aiorbit.io/custom-logo.svg");
    expect(resolved.companyName).toBe("Custom AI");
  });

  it("retrieves model top-level logoUrl from database if provided", () => {
    const modelWithTopLevelLogo = {
      name: "Autonomous Agent",
      creator: "AgentLab",
      logoUrl: "https://db.aiorbit.io/agentlab.png",
    };
    const resolved = resolveModelBrand(modelWithTopLevelLogo);
    expect(resolved.logoUrl).toBe("https://db.aiorbit.io/agentlab.png");
  });

  it("extracts logo directly from database BrandLogo relation on AIModel", () => {
    const modelWithExtractedDbLogo = {
      name: "Qwen 2.5 Max",
      creator: "Alibaba",
      logo: {
        id: "logo-qwen",
        slug: "qwen",
        name: "Qwen",
        logoUrl: "/api/v1/models/logos/qwen/svg",
      },
    };
    const resolved = resolveModelBrand(modelWithExtractedDbLogo);
    expect(resolved.logoUrl).toBe("/api/v1/models/logos/qwen/svg");
    expect(resolved.companyName).toBe("Qwen");
  });

  it("retrieves database logo endpoint when BrandLogo slug is provided", () => {
    const modelWithSlug = {
      name: "DeepSeek V3",
      creator: "DeepSeek",
      logo: {
        id: "logo-deepseek",
        slug: "deepseek",
        name: "DeepSeek",
      },
    };
    const resolved = resolveModelBrand(modelWithSlug);
    expect(resolved.logoUrl).toBe("/api/v1/models/logos/deepseek/svg");
    expect(resolved.companyName).toBe("DeepSeek");
  });
});

describe("LOCAL_LOGO_MAP and Database Brand Logo Retrieval", () => {
  it("ensures all entries have valid database logo retrieval endpoints", () => {
    const keys = ["openai", "anthropic", "google", "meta", "mistral", "microsoft", "nvidia", "huggingface", "perplexity"];
    for (const key of keys) {
      const val = LOCAL_LOGO_MAP[key];
      expect(typeof val).toBe("string");
      expect(val).toMatch(/^\/api\/v1\/models\/logos\/[a-z0-9_-]+\/svg$/);
    }
  });

  it("retrieves logos for AI labs and companies via database endpoints", () => {
    const allCompanies = [
      "01.AI", "AI2", "AI21", "Alibaba", "Amazon", "Anthropic", "Arcee AI",
      "Argilla", "BAAI", "Baidu", "Bespoke Labs", "BigCode", "ByteDance",
      "Cohere", "Databricks", "Deep Cogito", "Deep Reinforce", "DeepSeek",
      "Defog", "Essential AI", "Google", "Hugging Face", "HyperWrite", "IBM",
      "Inception", "Inclusion AI", "InternLM", "Jina AI", "Joshuant", "LG AI Research",
      "LightOn", "Liquid AI", "Meituan", "Meta", "Microsoft", "MiniMax",
      "Mistral AI", "Mixedbread", "Moondream", "Moonshot AI", "Morph",
      "MotherDuck & Numbers Station", "NVIDIA", "Nex AGI", "Nexusflow",
      "Nomic", "Nous Research", "Open-Orca", "OpenAI", "OpenBMB", "OpenChat",
      "OpenCoder Team", "Pankaj Mathur", "Perceptron", "Perplexity", "Poolside",
      "Reka AI", "Sailor2", "Sentence Transformers", "Snowflake", "Stability AI",
      "StepFun", "Technology Innovation Institute", "Tencent", "Thinking Machines",
      "Upstage", "Writer", "Xiaomi", "Z.ai", "Zhipu AI", "oobabooga", "xAI",
      "Inflection AI", "Recraft AI", "Cartesia AI", "Fish Audio", "Voyage AI",
      "2noise", "Kuaishou", "Ideogram", "Runway", "Luma AI", "Pika Labs",
      "ElevenLabs", "Suno"
    ];

    for (const company of allCompanies) {
      const resolved = resolveCompanyLogo(company);
      expect(resolved, `Company "${company}" must have a non-null logo`).not.toBeNull();
      expect(resolved?.startsWith("/api/v1/models/logos/"), `Company "${company}" logo must be retrieved from database endpoint`).toBe(true);
    }
  });

  it("ensures distinct companies have distinct logo identifiers or endpoints", () => {
    // AI2 vs AI21 Labs
    expect(resolveCompanyLogo("AI2")).not.toBe(resolveCompanyLogo("AI21 Labs"));
    // Alibaba vs Qwen
    expect(resolveCompanyLogo("Alibaba")).not.toBe(resolveCompanyLogo("Qwen"));
    // BigCode vs Hugging Face
    expect(resolveCompanyLogo("BigCode")).not.toBe(resolveCompanyLogo("Hugging Face"));
    // DeepSeek vs Deep Cogito
    expect(resolveCompanyLogo("DeepSeek")).not.toBe(resolveCompanyLogo("Deep Cogito"));
    // Google vs DeepMind
    expect(resolveCompanyLogo("Google")).not.toBe(resolveCompanyLogo("DeepMind"));
  });

  it("resolves repository owners to authentic company logos or GitHub avatar CDNs", () => {
    expect(resolveCompanyLogo("suno-ai", null, true)).toBe("/api/v1/models/logos/suno/svg");
    expect(resolveCompanyLogo("AUTOMATIC1111", null, true)).toBe("/api/v1/models/logos/stability/svg");
    expect(resolveCompanyLogo("huggingface", null, true)).toBe("/api/v1/models/logos/huggingface/svg");
    expect(resolveCompanyLogo("meta-llama", null, true)).toBe("/api/v1/models/logos/meta/svg");
    expect(resolveCompanyLogo("facebookresearch", null, true)).toBe("/api/v1/models/logos/meta/svg");

    // Generic github owner fallback
    expect(resolveCompanyLogo("some-developer", null, true)).toBe("https://github.com/some-developer.png?size=128");
  });

  it("handles null and empty values gracefully", () => {
    expect(resolveCompanyLogo(null)).toBeNull();
    expect(resolveCompanyLogo("")).toBeNull();
    expect(resolveCompanyLogo("   ")).toBeNull();
  });
});

describe("resolveModelBrand", () => {
  it("resolves models with provider anomalies to their authentic creators and database logos", () => {
    // DeepSeek R1 attributed to Google in raw DB
    const deepseek = resolveModelBrand({
      name: "Deepseek R1",
      creator: "Google",
      provider: { name: "Google" }
    });
    expect(deepseek.companyName).toBe("DeepSeek");
    expect(deepseek.logoUrl).toBe("/api/v1/models/logos/deepseek/svg");

    // Stable Code attributed to Meta in raw DB
    const stableCode = resolveModelBrand({
      name: "Stable Code",
      creator: "Meta",
      provider: null
    });
    expect(stableCode.companyName).toBe("Stability AI");
    expect(stableCode.logoUrl).toBe("/api/v1/models/logos/stability/svg");

    // WizardLM attributed to Meta in raw DB
    const wizard = resolveModelBrand({
      name: "Wizardlm",
      creator: "Meta",
      provider: null
    });
    expect(wizard.companyName).toBe("Microsoft");
    expect(wizard.logoUrl).toBe("/api/v1/models/logos/microsoft/svg");

    // TinyLlama attributed to Meta in raw DB
    const tiny = resolveModelBrand({
      name: "Tinyllama",
      creator: "Meta",
      provider: null
    });
    expect(tiny.companyName).toBe("TinyLlama");
    expect(tiny.logoUrl).toBe("/api/v1/models/logos/tinyllama/svg");

    // Tulu3 (AI2)
    const tulu = resolveModelBrand({
      name: "Tulu3",
      creator: "AI2",
      provider: { name: "Ai2" }
    });
    expect(tulu.companyName).toBe("AI2");
    expect(tulu.logoUrl).toBe("/api/v1/models/logos/ai2/svg");

    // Starcoder2 (BigCode)
    const starcoder = resolveModelBrand({
      name: "Starcoder2",
      creator: "BigCode",
      provider: null
    });
    expect(starcoder.companyName).toBe("BigCode");
    expect(starcoder.logoUrl).toBe("/api/v1/models/logos/bigcode/svg");

    // Granite (IBM)
    const granite = resolveModelBrand({
      name: "Granite3 2 Vision",
      creator: "Microsoft",
      provider: null
    });
    expect(granite.companyName).toBe("IBM");
    expect(granite.logoUrl).toBe("/api/v1/models/logos/ibm/svg");

    // Sentence Transformers
    const st = resolveModelBrand({
      name: "Paraphrase Multilingual",
      creator: "Sentence Transformers",
      provider: null
    });
    expect(st.companyName).toBe("Sentence Transformers");
    expect(st.logoUrl).toBe("/api/v1/models/logos/sentencetransformers/svg");

    // Nexusflow
    const starling = resolveModelBrand({
      name: "Starling Lm",
      creator: "Nexusflow",
      provider: null
    });
    expect(starling.companyName).toBe("Nexusflow");
    expect(starling.logoUrl).toBe("/api/v1/models/logos/nexusflow/svg");

    // Inflection AI
    const inflection = resolveModelBrand({
      name: "Pi (Inflection 2.5)",
      creator: "Inflection AI",
      provider: null
    });
    expect(inflection.companyName).toBe("Inflection AI");
    expect(inflection.logoUrl).toBe("/api/v1/models/logos/inflection/svg");

    // Recraft AI
    const recraft = resolveModelBrand({
      name: "Recraft 20B",
      creator: "Recraft AI",
      provider: null
    });
    expect(recraft.companyName).toBe("Recraft AI");
    expect(recraft.logoUrl).toBe("/api/v1/models/logos/recraft/svg");

    // Cartesia AI
    const cartesia = resolveModelBrand({
      name: "Cartesia Sonic",
      creator: "Cartesia AI",
      provider: null
    });
    expect(cartesia.companyName).toBe("Cartesia AI");
    expect(cartesia.logoUrl).toBe("/api/v1/models/logos/cartesia/svg");

    // Fish Audio
    const fish = resolveModelBrand({
      name: "Fish Speech 1.5",
      creator: "Fish Audio",
      provider: null
    });
    expect(fish.companyName).toBe("Fish Audio");
    expect(fish.logoUrl).toBe("/api/v1/models/logos/fishaudio/svg");

    // Voyage AI
    const voyage = resolveModelBrand({
      name: "voyage-code-3",
      creator: "Voyage AI",
      provider: null
    });
    expect(voyage.companyName).toBe("Voyage AI");
    expect(voyage.logoUrl).toBe("/api/v1/models/logos/voyageai/svg");

    // 2noise (ChatTTS)
    const chattts = resolveModelBrand({
      name: "ChatTTS",
      creator: "2noise",
      provider: null
    });
    expect(chattts.companyName).toBe("2noise");
    expect(chattts.logoUrl).toBe("/api/v1/models/logos/2noise/svg");

    // Kling (Kuaishou)
    const kling = resolveModelBrand({
      name: "Kling 1.5 Pro",
      creator: "Kuaishou",
      provider: null
    });
    expect(kling.companyName).toBe("Kuaishou");
    expect(kling.logoUrl).toBe("/api/v1/models/logos/kling/svg");
  });
});
