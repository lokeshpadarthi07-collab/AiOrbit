export interface CompanyInfo {
  name: string;
  logoUrl: string;
}

// Local SVG and PNG logos saved in frontend/public/logos/
export const LOCAL_COMPANY_LOGOS: Record<string, string> = {
  // Major AI Ecosystem Brands & Labs
  stability: "/logos/stability.png",
  "stability-ai": "/logos/stability.png",
  "stability ai": "/logos/stability.png",
  comfyui: "/logos/comfyui.png",
  "comfy-org": "/logos/comfyui.png",
  "comfy org": "/logos/comfyui.png",
  suno: "/logos/suno.svg",
  "suno-ai": "/logos/suno.svg",
  "suno ai": "/logos/suno.svg",
  huggingface: "/logos/huggingface.svg",
  "hugging-face": "/logos/huggingface.svg",
  "hugging face": "/logos/huggingface.svg",
  openai: "/logos/openai.svg",
  anthropic: "/logos/anthropic.svg",
  google: "/logos/google.svg",
  "google-research": "/logos/google.svg",
  "google-deepmind": "/logos/google.svg",
  "google deepmind": "/logos/google.svg",
  deepmind: "/logos/google.svg",
  tensorflow: "/logos/tensorflow.svg",
  "jax-ml": "/logos/google.svg",
  meta: "/logos/meta.svg",
  facebook: "/logos/meta.svg",
  facebookresearch: "/logos/meta.svg",
  "meta-llama": "/logos/meta.svg",
  pytorch: "/logos/pytorch.svg",
  microsoft: "/logos/microsoft.svg",
  azure: "/logos/microsoft.svg",
  mistralai: "/logos/mistralai.svg",
  "mistral-ai": "/logos/mistralai.svg",
  "mistral ai": "/logos/mistralai.svg",
  mistral: "/logos/mistralai.svg",
  nvidia: "/logos/nvidia.svg",
  perplexity: "/logos/perplexity.svg",
  "perplexity-ai": "/logos/perplexity.svg",
  "perplexity ai": "/logos/perplexity.svg",
  ollama: "/logos/ollama.svg",
  vllm: "/logos/vllm.svg",
  "vllm-project": "/logos/vllm.svg",
  langchain: "/logos/langchain.svg",
  "langchain-ai": "/logos/langchain.svg",
  llamaindex: "/logos/llamaindex.png",
  "run-llama": "/logos/llamaindex.png",
  "llama index": "/logos/llamaindex.png",
  deepseek: "/logos/deepseek.svg",
  "deepseek-ai": "/logos/deepseek.svg",
  "deepseek ai": "/logos/deepseek.svg",
  qwen: "/logos/qwen.png",
  qwenlm: "/logos/qwen.png",
  alibaba: "/logos/qwen.png",
  eleutherai: "/logos/eleutherai.png",
  cohere: "/logos/cohere.png",
  "cohere-ai": "/logos/cohere.png",
  replicate: "/logos/replicate.svg",
  groq: "/logos/groq.png",
  pinecone: "/logos/pinecone.png",
  "pinecone-io": "/logos/pinecone.png",
  weaviate: "/logos/weaviate.png",
  qdrant: "/logos/qdrant.svg",
  chroma: "/logos/chroma.png",
  "chroma-core": "/logos/chroma.png",
  elevenlabs: "/logos/elevenlabs.svg",
  ggml: "/logos/ggml.png",
  "ggml-org": "/logos/ggml.png",

  // Developer Frameworks & Autonomous Agent Orgs
  apple: "/logos/apple.svg",
  runway: "/logos/runway.png",
  runwayml: "/logos/runway.png",
  together: "/logos/together.png",
  togethercomputer: "/logos/together.png",
  "together-ai": "/logos/together.png",
  "significant-gravitas": "/logos/autogpt.png",
  autogpt: "/logos/autogpt.png",
  "auto-gpt": "/logos/autogpt.png",
  "lmstudio-ai": "/logos/lmstudio.png",
  lmstudio: "/logos/lmstudio.png",
  "lightning-ai": "/logos/lightning.png",
  lightning: "/logos/lightning.png",
  unsloth: "/logos/unsloth.png",
  unslothai: "/logos/unsloth.png",
  "modal-labs": "/logos/modal.png",
  modal: "/logos/modal.png",
  baseten: "/logos/baseten.png",
  "ray-project": "/logos/ray.png",
  ray: "/logos/ray.png",
  anyscale: "/logos/ray.png",
  "lm-sys": "/logos/lmsys.png",
  lmsys: "/logos/lmsys.png",
  tiiuae: "/logos/tii.png",
  tii: "/logos/tii.png",
  crewai: "/logos/crewai.png",
  crewaiinc: "/logos/crewai.png",
  langflow: "/logos/langflow.png",
  "langflow-ai": "/logos/langflow.png",
  dify: "/logos/dify.png",
  langgenius: "/logos/dify.png",
  flowise: "/logos/flowise.png",
  flowiseai: "/logos/flowise.png",
  anythingllm: "/logos/anythingllm.png",
  "mintplex-labs": "/logos/anythingllm.png",
  jan: "/logos/jan.png",
  janhq: "/logos/jan.png",
  localai: "/logos/localai.png",
  mudler: "/logos/localai.png",
  tabby: "/logos/tabby.png",
  tabbyml: "/logos/tabby.png",
  continue: "/logos/continue.png",
  continuedev: "/logos/continue.png",
  opendevin: "/logos/opendevin.png",
  "all-hands-ai": "/logos/opendevin.png",
  openbmb: "https://github.com/OpenBMB.png",
  "laion-ai": "https://github.com/LAION-AI.png",
  laion: "https://github.com/LAION-AI.png",
};

// Known repositories and individual creators mapped to authentic company/org brand identities
export const REPO_COMPANY_MAPPING: Record<string, CompanyInfo> = {
  // Stability AI
  automatic1111: { name: "Stability AI", logoUrl: "/logos/stability.png" },
  "stable-diffusion-webui": { name: "Stability AI", logoUrl: "/logos/stability.png" },
  "stable-diffusion": { name: "Stability AI", logoUrl: "/logos/stability.png" },
  stablediffusion: { name: "Stability AI", logoUrl: "/logos/stability.png" },
  "stability-ai": { name: "Stability AI", logoUrl: "/logos/stability.png" },
  stability: { name: "Stability AI", logoUrl: "/logos/stability.png" },

  // ComfyUI / Comfy Org
  comfyanonymous: { name: "ComfyUI", logoUrl: "/logos/comfyui.png" },
  comfyui: { name: "ComfyUI", logoUrl: "/logos/comfyui.png" },
  "comfy-org": { name: "ComfyUI", logoUrl: "/logos/comfyui.png" },

  // Suno
  "suno-ai": { name: "Suno", logoUrl: "/logos/suno.svg" },
  suno: { name: "Suno", logoUrl: "/logos/suno.svg" },
  bark: { name: "Suno", logoUrl: "/logos/suno.svg" },

  // Hugging Face
  huggingface: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  "hugging-face": { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  transformers: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  diffusers: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  accelerate: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  peft: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  safetensors: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  tgi: { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },
  "text-generation-inference": { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" },

  // GGML
  ggerganov: { name: "GGML", logoUrl: "/logos/ggml.png" },
  "llama.cpp": { name: "GGML", logoUrl: "/logos/ggml.png" },
  "whisper.cpp": { name: "GGML", logoUrl: "/logos/ggml.png" },
  ggml: { name: "GGML", logoUrl: "/logos/ggml.png" },
  "ggml-org": { name: "GGML", logoUrl: "/logos/ggml.png" },

  // OpenAI
  karpathy: { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  nanogpt: { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  mingpt: { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  micrograd: { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  openai: { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  whisper: { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  "gpt-2": { name: "OpenAI", logoUrl: "/logos/openai.svg" },
  "openai-python": { name: "OpenAI", logoUrl: "/logos/openai.svg" },

  // Meta
  tloen: { name: "Meta", logoUrl: "/logos/meta.svg" },
  "alpaca-lora": { name: "Meta", logoUrl: "/logos/meta.svg" },
  meta: { name: "Meta", logoUrl: "/logos/meta.svg" },
  facebook: { name: "Meta", logoUrl: "/logos/meta.svg" },
  facebookresearch: { name: "Meta", logoUrl: "/logos/meta.svg" },
  "meta-llama": { name: "Meta", logoUrl: "/logos/meta.svg" },
  llama: { name: "Meta", logoUrl: "/logos/meta.svg" },
  segment: { name: "Meta", logoUrl: "/logos/meta.svg" },
  "segment-anything": { name: "Meta", logoUrl: "/logos/meta.svg" },
  sam: { name: "Meta", logoUrl: "/logos/meta.svg" },

  // PyTorch
  pytorch: { name: "PyTorch", logoUrl: "/logos/pytorch.svg" },
  torch: { name: "PyTorch", logoUrl: "/logos/pytorch.svg" },
  torchaudio: { name: "PyTorch", logoUrl: "/logos/pytorch.svg" },
  torchvision: { name: "PyTorch", logoUrl: "/logos/pytorch.svg" },

  // vLLM
  "vllm-project": { name: "vLLM", logoUrl: "/logos/vllm.svg" },
  vllm: { name: "vLLM", logoUrl: "/logos/vllm.svg" },

  // Ollama
  ollama: { name: "Ollama", logoUrl: "/logos/ollama.svg" },

  // LangChain
  "langchain-ai": { name: "LangChain", logoUrl: "/logos/langchain.svg" },
  langchain: { name: "LangChain", logoUrl: "/logos/langchain.svg" },
  langsmith: { name: "LangChain", logoUrl: "/logos/langchain.svg" },
  langgraph: { name: "LangChain", logoUrl: "/logos/langchain.svg" },

  // LlamaIndex
  "run-llama": { name: "LlamaIndex", logoUrl: "/logos/llamaindex.png" },
  llamaindex: { name: "LlamaIndex", logoUrl: "/logos/llamaindex.png" },
  "llama-index": { name: "LlamaIndex", logoUrl: "/logos/llamaindex.png" },

  // DeepSeek
  "deepseek-ai": { name: "DeepSeek", logoUrl: "/logos/deepseek.svg" },
  deepseek: { name: "DeepSeek", logoUrl: "/logos/deepseek.svg" },

  // Qwen (Alibaba)
  qwen: { name: "Qwen", logoUrl: "/logos/qwen.png" },
  qwenlm: { name: "Qwen", logoUrl: "/logos/qwen.png" },
  alibaba: { name: "Qwen", logoUrl: "/logos/qwen.png" },

  // Anthropic
  anthropic: { name: "Anthropic", logoUrl: "/logos/anthropic.svg" },
  claude: { name: "Anthropic", logoUrl: "/logos/anthropic.svg" },

  // Google
  google: { name: "Google", logoUrl: "/logos/google.svg" },
  "google-research": { name: "Google", logoUrl: "/logos/google.svg" },
  "google-deepmind": { name: "Google DeepMind", logoUrl: "/logos/google.svg" },
  deepmind: { name: "Google DeepMind", logoUrl: "/logos/google.svg" },
  tensorflow: { name: "TensorFlow", logoUrl: "/logos/tensorflow.svg" },
  "jax-ml": { name: "Google", logoUrl: "/logos/google.svg" },
  jax: { name: "Google", logoUrl: "/logos/google.svg" },
  gemma: { name: "Google", logoUrl: "/logos/google.svg" },

  // Microsoft
  microsoft: { name: "Microsoft", logoUrl: "/logos/microsoft.svg" },
  azure: { name: "Microsoft", logoUrl: "/logos/microsoft.svg" },
  deepspeed: { name: "Microsoft", logoUrl: "/logos/microsoft.svg" },
  autogen: { name: "Microsoft", logoUrl: "/logos/microsoft.svg" },

  // Mistral AI
  mistralai: { name: "Mistral AI", logoUrl: "/logos/mistralai.svg" },
  "mistral-ai": { name: "Mistral AI", logoUrl: "/logos/mistralai.svg" },
  mistral: { name: "Mistral AI", logoUrl: "/logos/mistralai.svg" },

  // NVIDIA
  nvidia: { name: "NVIDIA", logoUrl: "/logos/nvidia.svg" },
  tensorrt: { name: "NVIDIA", logoUrl: "/logos/nvidia.svg" },
  megatron: { name: "NVIDIA", logoUrl: "/logos/nvidia.svg" },
  triton: { name: "NVIDIA", logoUrl: "/logos/nvidia.svg" },
  nemo: { name: "NVIDIA", logoUrl: "/logos/nvidia.svg" },

  // Perplexity
  perplexity: { name: "Perplexity", logoUrl: "/logos/perplexity.svg" },
  "perplexity-ai": { name: "Perplexity", logoUrl: "/logos/perplexity.svg" },

  // EleutherAI
  eleutherai: { name: "EleutherAI", logoUrl: "/logos/eleutherai.png" },
  "gpt-neox": { name: "EleutherAI", logoUrl: "/logos/eleutherai.png" },
  "lm-evaluation-harness": { name: "EleutherAI", logoUrl: "/logos/eleutherai.png" },

  // Cohere
  "cohere-ai": { name: "Cohere", logoUrl: "/logos/cohere.png" },
  cohere: { name: "Cohere", logoUrl: "/logos/cohere.png" },

  // Replicate
  replicate: { name: "Replicate", logoUrl: "/logos/replicate.svg" },
  cog: { name: "Replicate", logoUrl: "/logos/replicate.svg" },

  // Groq
  groq: { name: "Groq", logoUrl: "/logos/groq.png" },

  // Pinecone
  "pinecone-io": { name: "Pinecone", logoUrl: "/logos/pinecone.png" },
  pinecone: { name: "Pinecone", logoUrl: "/logos/pinecone.png" },

  // Weaviate
  weaviate: { name: "Weaviate", logoUrl: "/logos/weaviate.png" },

  // Qdrant
  qdrant: { name: "Qdrant", logoUrl: "/logos/qdrant.svg" },

  // Chroma
  "chroma-core": { name: "Chroma", logoUrl: "/logos/chroma.png" },
  chroma: { name: "Chroma", logoUrl: "/logos/chroma.png" },

  // ElevenLabs
  elevenlabs: { name: "ElevenLabs", logoUrl: "/logos/elevenlabs.svg" },

  // Apple
  apple: { name: "Apple", logoUrl: "/logos/apple.svg" },
  ml_explore: { name: "Apple", logoUrl: "/logos/apple.svg" },
  mlx: { name: "Apple", logoUrl: "/logos/apple.svg" },

  // Runway
  runway: { name: "Runway", logoUrl: "/logos/runway.png" },
  runwayml: { name: "Runway", logoUrl: "/logos/runway.png" },

  // AutoGPT
  "significant-gravitas": { name: "AutoGPT", logoUrl: "/logos/autogpt.png" },
  autogpt: { name: "AutoGPT", logoUrl: "/logos/autogpt.png" },
  "auto-gpt": { name: "AutoGPT", logoUrl: "/logos/autogpt.png" },

  // LM Studio
  "lmstudio-ai": { name: "LM Studio", logoUrl: "/logos/lmstudio.png" },
  lmstudio: { name: "LM Studio", logoUrl: "/logos/lmstudio.png" },

  // Lightning AI
  "lightning-ai": { name: "Lightning AI", logoUrl: "/logos/lightning.png" },
  "pytorch-lightning": { name: "Lightning AI", logoUrl: "/logos/lightning.png" },

  // Unsloth
  unslothai: { name: "Unsloth", logoUrl: "/logos/unsloth.png" },
  unsloth: { name: "Unsloth", logoUrl: "/logos/unsloth.png" },

  // Together AI
  togethercomputer: { name: "Together AI", logoUrl: "/logos/together.png" },
  "together-ai": { name: "Together AI", logoUrl: "/logos/together.png" },

  // Modal Labs
  "modal-labs": { name: "Modal", logoUrl: "/logos/modal.png" },

  // Baseten
  baseten: { name: "Baseten", logoUrl: "/logos/baseten.png" },

  // Ray / Anyscale
  "ray-project": { name: "Ray", logoUrl: "/logos/ray.png" },

  // LMSYS
  "lm-sys": { name: "LMSYS", logoUrl: "/logos/lmsys.png" },
  fastchat: { name: "LMSYS", logoUrl: "/logos/lmsys.png" },

  // TII
  tiiuae: { name: "TII", logoUrl: "/logos/tii.png" },

  // CrewAI
  crewaiinc: { name: "CrewAI", logoUrl: "/logos/crewai.png" },
  crewai: { name: "CrewAI", logoUrl: "/logos/crewai.png" },

  // Langflow
  "langflow-ai": { name: "Langflow", logoUrl: "/logos/langflow.png" },
  langflow: { name: "Langflow", logoUrl: "/logos/langflow.png" },

  // Dify
  langgenius: { name: "Dify", logoUrl: "/logos/dify.png" },
  dify: { name: "Dify", logoUrl: "/logos/dify.png" },

  // Flowise
  flowiseai: { name: "Flowise", logoUrl: "/logos/flowise.png" },
  flowise: { name: "Flowise", logoUrl: "/logos/flowise.png" },

  // AnythingLLM
  "mintplex-labs": { name: "AnythingLLM", logoUrl: "/logos/anythingllm.png" },
  "anything-llm": { name: "AnythingLLM", logoUrl: "/logos/anythingllm.png" },

  // Jan
  janhq: { name: "Jan", logoUrl: "/logos/jan.png" },
  jan: { name: "Jan", logoUrl: "/logos/jan.png" },

  // LocalAI
  mudler: { name: "LocalAI", logoUrl: "/logos/localai.png" },
  localai: { name: "LocalAI", logoUrl: "/logos/localai.png" },

  // Tabby
  tabbyml: { name: "Tabby", logoUrl: "/logos/tabby.png" },
  tabby: { name: "Tabby", logoUrl: "/logos/tabby.png" },

  // Continue
  continuedev: { name: "Continue", logoUrl: "/logos/continue.png" },
  continue: { name: "Continue", logoUrl: "/logos/continue.png" },

  // OpenDevin
  "all-hands-ai": { name: "OpenDevin", logoUrl: "/logos/opendevin.png" },
  opendevin: { name: "OpenDevin", logoUrl: "/logos/opendevin.png" },
};

/**
 * Resolves a repository to its authentic corporate / open-source project brand logo and display name.
 * Strictly guarantees:
 * 1. NO personal human selfies/faces.
 * 2. NO raw letter badges or identicon squares.
 * 3. Exact matching for major AI repositories and companies.
 */
export function resolveRepositoryCompany(repo: {
  owner?: string | null;
  name?: string | null;
  companySlug?: string | null;
  logoUrl?: string | null;
}): CompanyInfo {
  const ownerLower = (repo.owner || "").toLowerCase().trim();
  const nameLower = (repo.name || "").toLowerCase().trim();
  const slugLower = (repo.companySlug || "").toLowerCase().trim();

  // 1. Direct repo name match in known mapping
  if (nameLower && REPO_COMPANY_MAPPING[nameLower]) {
    return REPO_COMPANY_MAPPING[nameLower];
  }

  // 2. Direct owner match in known mapping
  if (ownerLower && REPO_COMPANY_MAPPING[ownerLower]) {
    return REPO_COMPANY_MAPPING[ownerLower];
  }

  // 3. Substring patterns for popular repositories
  if (nameLower.includes("stable-diffusion") || nameLower.includes("stablediffusion")) {
    return { name: "Stability AI", logoUrl: "/logos/stability.png" };
  }
  if (nameLower.includes("comfyui")) {
    return { name: "ComfyUI", logoUrl: "/logos/comfyui.png" };
  }
  if (nameLower.includes("llama.cpp") || nameLower.includes("whisper.cpp")) {
    return { name: "GGML", logoUrl: "/logos/ggml.png" };
  }
  if (
    nameLower.includes("transformers") ||
    nameLower.includes("diffusers") ||
    nameLower.includes("accelerate") ||
    nameLower.includes("peft") ||
    nameLower.includes("safetensors")
  ) {
    return { name: "Hugging Face", logoUrl: "/logos/huggingface.svg" };
  }
  if (nameLower.includes("langchain") || nameLower.includes("langgraph")) {
    return { name: "LangChain", logoUrl: "/logos/langchain.svg" };
  }
  if (nameLower.includes("llama-index") || nameLower.includes("llamaindex")) {
    return { name: "LlamaIndex", logoUrl: "/logos/llamaindex.png" };
  }
  if (nameLower.includes("deepseek")) {
    return { name: "DeepSeek", logoUrl: "/logos/deepseek.svg" };
  }
  if (nameLower.includes("ollama")) {
    return { name: "Ollama", logoUrl: "/logos/ollama.svg" };
  }
  if (nameLower.includes("vllm")) {
    return { name: "vLLM", logoUrl: "/logos/vllm.svg" };
  }
  if (nameLower.includes("pytorch")) {
    return { name: "PyTorch", logoUrl: "/logos/pytorch.svg" };
  }
  if (nameLower.includes("tensorflow")) {
    return { name: "TensorFlow", logoUrl: "/logos/tensorflow.svg" };
  }
  if (nameLower.includes("autogen")) {
    return { name: "Microsoft", logoUrl: "/logos/microsoft.svg" };
  }
  if (nameLower.includes("crewai")) {
    return { name: "CrewAI", logoUrl: "/logos/crewai.png" };
  }
  if (nameLower.includes("fastchat")) {
    return { name: "LMSYS", logoUrl: "/logos/lmsys.png" };
  }
  if (nameLower.includes("autogpt") || nameLower.includes("auto-gpt")) {
    return { name: "AutoGPT", logoUrl: "/logos/autogpt.png" };
  }
  if (nameLower.includes("flowise")) {
    return { name: "Flowise", logoUrl: "/logos/flowise.png" };
  }
  if (nameLower.includes("langflow")) {
    return { name: "Langflow", logoUrl: "/logos/langflow.png" };
  }
  if (nameLower.includes("anything-llm") || nameLower.includes("anythingllm")) {
    return { name: "AnythingLLM", logoUrl: "/logos/anythingllm.png" };
  }

  // 4. Match company slug in REPO_COMPANY_MAPPING or LOCAL_COMPANY_LOGOS
  if (slugLower && REPO_COMPANY_MAPPING[slugLower]) {
    return REPO_COMPANY_MAPPING[slugLower];
  }
  if (slugLower && LOCAL_COMPANY_LOGOS[slugLower]) {
    return { name: repo.companySlug || repo.owner || "Company", logoUrl: LOCAL_COMPANY_LOGOS[slugLower] };
  }

  // 5. Match owner in LOCAL_COMPANY_LOGOS
  if (ownerLower && LOCAL_COMPANY_LOGOS[ownerLower]) {
    return { name: repo.owner || "Company", logoUrl: LOCAL_COMPANY_LOGOS[ownerLower] };
  }

  // 6. Explicit curated logoUrl from DB if not a personal github avatar
  if (
    repo.logoUrl &&
    !repo.logoUrl.includes("avatars.githubusercontent.com") &&
    !repo.logoUrl.includes("github.com/identicons")
  ) {
    return { name: repo.owner || "Company", logoUrl: repo.logoUrl };
  }

  // 7. Check if owner is an organization on GitHub (exclude known individual humans)
  const isPersonalUser = [
    "automatic1111",
    "comfyanonymous",
    "karpathy",
    "ggerganov",
    "tloen",
    "cpacker",
    "mudler",
    "paul-gauthier",
  ].includes(ownerLower);

  if (repo.owner && !isPersonalUser && !/^\d+$/.test(repo.owner)) {
    return { name: repo.owner, logoUrl: `https://github.com/${repo.companySlug || repo.owner}.png` };
  }

  // Reliable company fallback (Hugging Face) - never null, never a letter badge
  return { name: repo.owner || "Hugging Face", logoUrl: "/logos/huggingface.svg" };
}
