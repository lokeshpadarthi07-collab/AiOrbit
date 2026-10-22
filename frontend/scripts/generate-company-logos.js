const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

const logos = {
  // DeepSeek
  'deepseek.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16s6.044 13.5 13.5 13.5 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5z" fill="#0D62FF"/>
    <path d="M7 16.8c1.8-4.2 6.2-6.8 11.2-5.8 4.2.8 7.3 4.2 7.8 8.4-3.2.6-7.8-1.2-10.2-3.8-1.5-1.6-3.2-1.2-4.8.4-.9.9-2.2 1.2-4 .8z" fill="#FFFFFF"/>
    <circle cx="11.5" cy="13.5" r="1.5" fill="#0D62FF"/>
  </svg>`,

  // Alibaba & Qwen
  'qwen.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#615CED"/>
    <path d="M16 6l7.794 4.5v9L16 24l-7.794-4.5v-9L16 6z" stroke="#FFFFFF" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M16 11l4.33 2.5v5L16 21l-4.33-2.5v-5L16 11z" fill="#FFFFFF"/>
    <circle cx="16" cy="16" r="2" fill="#615CED"/>
  </svg>`,

  'alibaba.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FF6A00"/>
    <path d="M16 7c-4.97 0-9 4.03-9 9 0 3.86 2.44 7.15 5.88 8.39-.18-.74-.32-1.72-.05-2.55.33-1.02 1.48-4.37 1.48-4.37s-.38-.76-.38-1.88c0-1.76 1.02-3.07 2.29-3.07 1.08 0 1.6 1.01 1.6 1.78 0 .72-.46 1.8-.7 2.8-.2 1.01.44 1.76 1.43 1.76 1.72 0 3.05-1.81 3.05-4.43 0-2.31-1.66-3.93-4.04-3.93-2.75 0-4.37 2.06-4.37 4.2 0 .83.32 1.72.72 2.2.08.1.09.18.07.28l-.27 1.11c-.04.18-.15.22-.34.13-1.28-.59-2.08-2.46-2.08-3.96 0-3.22 2.34-6.18 6.76-6.18 3.55 0 6.31 2.53 6.31 5.91 0 3.52-2.22 6.36-5.3 6.36-1.03 0-2.01-.54-2.34-1.18l-.64 2.43c-.23.89-.86 2.01-1.28 2.69C14.15 24.89 15.06 25 16 25c4.97 0 9-4.03 9-9s-4.03-9-9-9z" fill="#FFFFFF"/>
  </svg>`,

  // IBM
  'ibm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F62FE"/>
    <g fill="#FFFFFF">
      <path d="M6 9h4v1.5H6zM6 11.5h4V13H6zM6 14h4v1.5H6zM6 16.5h4V18H6zM6 19h4v1.5H6zM6 21.5h4V23H6z"/>
      <path d="M12 9h5v1.5h-5zM12 11.5h7V13h-7zM12 14h8v1.5h-8zM12 16.5h7V18h-7zM12 19h7v1.5h-7zM12 21.5h5V23h-5z"/>
      <path d="M22 9h4v1.5h-4zM21 11.5h6V13h-6zM21 14h6v1.5h-6zM21 16.5h6V18h-6zM22 19h4v1.5h-4zM22 21.5h4V23h-4z"/>
    </g>
  </svg>`,

  // Snowflake
  'snowflake.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#29B5E8"/>
    <path d="M16 5v22M6.5 10.5l19 11M6.5 21.5l19-11" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M13 7.5L16 5l3 2.5M13 24.5L16 27l3-2.5M7.5 13L6.5 10.5 9.5 9.5M22.5 22.5l3-1-1 3M7.5 19l-1 2.5 3 1M22.5 9.5l3 1-1-2.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Stability AI
  'stability.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#7C3AED"/>
    <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
    <circle cx="16" cy="8.5" r="2.2" fill="#FFFFFF"/>
    <circle cx="22.5" cy="12.2" r="2.2" fill="#FFFFFF"/>
    <circle cx="22.5" cy="19.8" r="2.2" fill="#FFFFFF"/>
    <circle cx="16" cy="23.5" r="2.2" fill="#FFFFFF"/>
    <circle cx="9.5" cy="19.8" r="2.2" fill="#FFFFFF"/>
    <circle cx="9.5" cy="12.2" r="2.2" fill="#FFFFFF"/>
    <circle cx="16" cy="5" r="1.3" fill="#FFFFFF" fill-opacity="0.7"/>
    <circle cx="25.5" cy="10.5" r="1.3" fill="#FFFFFF" fill-opacity="0.7"/>
    <circle cx="25.5" cy="21.5" r="1.3" fill="#FFFFFF" fill-opacity="0.7"/>
    <circle cx="16" cy="27" r="1.3" fill="#FFFFFF" fill-opacity="0.7"/>
    <circle cx="6.5" cy="21.5" r="1.3" fill="#FFFFFF" fill-opacity="0.7"/>
    <circle cx="6.5" cy="10.5" r="1.3" fill="#FFFFFF" fill-opacity="0.7"/>
  </svg>`,

  // Cohere
  'cohere.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#D95B43"/>
    <path d="M12.5 8C8.91 8 6 10.91 6 14.5s2.91 6.5 6.5 6.5c2.4 0 4.51-1.3 5.62-3.23l-3.24-1.87A3.25 3.25 0 1112.5 11.25c1.47 0 2.72.98 3.11 2.33l3.35-1.42C17.65 9.7 15.26 8 12.5 8z" fill="#FFFFFF"/>
    <circle cx="22" cy="19.5" r="4.5" fill="#39594C"/>
  </svg>`,

  // xAI
  'xai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#000000"/>
    <path d="M8 8l6.8 9.5L8 24h3.2l5.1-5.8 4.7 5.8H24l-7.2-10L23.2 8H20l-4.7 5.3L11 8H8z" fill="#FFFFFF"/>
  </svg>`,

  // AI2 (Allen Institute for AI)
  'ai2.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1D2A44"/>
    <path d="M16 6L7 21h4.8l1.8-3.5h4.8L20.2 21H25L16 6zm-1.2 8.5L16 12.2l1.2 2.3h-2.4z" fill="#EA384D"/>
    <circle cx="24" cy="9" r="2.5" fill="#EA384D"/>
  </svg>`,

  // AI21 Labs
  'ai21.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <path d="M7 23l4.5-14h2.5L18.5 23h-2.6l-1.2-4h-4.4l-1.2 4H7zm4.5-6h3l-1.5-5.5-1.5 5.5z" fill="#FFFFFF"/>
    <path d="M21 9h2.4v14H21V9zm3.5 0h4.5c1.8 0 2.8 1 2.8 2.6 0 1.5-.9 2.4-2 2.6v.1c1.4.2 2.4 1.2 2.4 2.8 0 1.8-1.2 2.9-3.2 2.9h-4.5V9z" fill="#FF3E3E"/>
  </svg>`,

  // Databricks
  'databricks.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FF3621"/>
    <path d="M16 6l8 4.5-8 4.5-8-4.5L16 6z" fill="#FFFFFF"/>
    <path d="M8 13.5l8 4.5 8-4.5-2.5-1.4-5.5 3.1-5.5-3.1L8 13.5z" fill="#FFFFFF" fill-opacity="0.85"/>
    <path d="M8 17.5l8 4.5 8-4.5-2.5-1.4-5.5 3.1-5.5-3.1L8 17.5z" fill="#FFFFFF" fill-opacity="0.85"/>
    <path d="M8 21.5l8 4.5 8-4.5-2.5-1.4-5.5 3.1-5.5-3.1L8 21.5z" fill="#FFFFFF" fill-opacity="0.85"/>
  </svg>`,

  // Moonshot AI / Kimi
  'moonshot.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0D1117"/>
    <path d="M18.5 6C13.25 6 9 10.25 9 15.5S13.25 25 18.5 25c2.4 0 4.6-.9 6.25-2.4-3.8-.4-6.75-3.6-6.75-7.6s2.95-7.2 6.75-7.6C23.1 6.9 20.9 6 18.5 6z" fill="#165DFF"/>
    <circle cx="22.5" cy="11.5" r="1.5" fill="#FFFFFF"/>
  </svg>`,

  // Zhipu AI / GLM
  'zhipu.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1E293B"/>
    <path d="M8 9h16l-10 14h10" stroke="#2B66FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="21" cy="9" r="2.5" fill="#38BDF8"/>
    <circle cx="11" cy="23" r="2.5" fill="#38BDF8"/>
  </svg>`,

  // MiniMax / Hailuo
  'minimax.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F53FF"/>
    <path d="M7 21V11l4.5 5 4.5-5v10" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 21V11l4.5 5 4.5-5v10" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Runway
  'runway.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#000000"/>
    <path d="M9 8h8c3.3 0 6 2.7 6 6s-2.7 6-6 6h-3.5L20 25h-4l-6.5-5H9v5H6V8h3zm0 9h8c1.7 0 3-1.3 3-3s-1.3-3-3-3H9v6z" fill="#19E68C"/>
  </svg>`,

  // Suno
  'suno.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#121212"/>
    <path d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#FFC700" stroke-width="3" stroke-linecap="round"/>
    <circle cx="16" cy="16" r="3.5" fill="#FFC700"/>
  </svg>`,

  // ElevenLabs
  'elevenlabs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#000000"/>
    <rect x="10.5" y="7" width="4" height="18" rx="2" fill="#FFFFFF"/>
    <rect x="17.5" y="7" width="4" height="18" rx="2" fill="#FFFFFF"/>
  </svg>`,

  // Midjourney
  'midjourney.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F1E36"/>
    <path d="M16 6l7 14h-14l7-14z" fill="#FFFFFF"/>
    <path d="M8 22l8-4 8 4-4 4H12l-4-4z" fill="#38BDF8"/>
  </svg>`,

  // Flux / Black Forest Labs
  'flux.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#111111"/>
    <path d="M8 8h16v4H12v4h10v4H12v6H8V8z" fill="#00FFA3"/>
  </svg>`,

  // Ollama
  'ollama.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <circle cx="16" cy="17" r="7" fill="#FFFFFF"/>
    <circle cx="12.5" cy="8.5" r="2.5" fill="#FFFFFF"/>
    <circle cx="19.5" cy="8.5" r="2.5" fill="#FFFFFF"/>
    <circle cx="14" cy="16" r="1.2" fill="#18181B"/>
    <circle cx="18" cy="16" r="1.2" fill="#18181B"/>
    <ellipse cx="16" cy="19.5" rx="2.5" ry="1.5" fill="#E4E4E7"/>
  </svg>`,

  // LangChain
  'langchain.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1C3C3C"/>
    <path d="M11 11c-2.2 0-4 1.8-4 4s1.8 4 4 4h3v-2.5h-3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h3V11h-3zm10 0h-3v2.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3V19h3c2.2 0 4-1.8 4-4s-1.8-4-4-4zm-8 3h6v2h-6v-2z" fill="#2ECC71"/>
  </svg>`,

  // ComfyUI
  'comfyui.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#222222"/>
    <rect x="7" y="7" width="7" height="7" rx="2" fill="#FF7700"/>
    <rect x="18" y="7" width="7" height="7" rx="2" fill="#FF7700"/>
    <rect x="12.5" y="18" width="7" height="7" rx="2" fill="#FF9933"/>
    <path d="M10.5 14v3.5a2 2 0 002 2h0M21.5 14v3.5a2 2 0 01-2 2h0" stroke="#FF7700" stroke-width="2"/>
  </svg>`,

  // Apple
  'apple.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#000000"/>
    <path d="M19.9 8.7c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.9.9-3.8 2-.8 1-1.5 2.5-1.3 4 1.5.1 3-0.8 3.8-1.9zm2.4 7.6c0-3.1 2.5-4.6 2.6-4.7-1.4-2.1-3.7-2.4-4.5-2.4-1.9-.2-3.8 1.1-4.8 1.1-.9 0-2.5-1.1-4.1-1.1-2.1 0-4.1 1.2-5.1 3.1-2.2 3.8-.6 9.4 1.5 12.5 1 1.5 2.3 3.1 3.9 3 1.6-.1 2.2-1 4.1-1 1.9 0 2.4 1 4.1 1 1.7 0 2.8-1.5 3.8-3 1.2-1.8 1.7-3.5 1.7-3.6-.1-.1-3.2-1.2-3.2-4.9z" fill="#FFFFFF"/>
  </svg>`,

  // Amazon & AWS
  'amazon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#131921"/>
    <path d="M8 20.5c4.5 2.2 11.5 2.2 16 0" stroke="#FF9900" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M22 19l2.5 1.8-1.8 2.2" fill="#FF9900"/>
    <path d="M12.5 17c0-2.5 1.5-4.5 4.5-4.5 1.5 0 2.5.5 3.5 1.2V9.5h2.5V17c0 2-.5 3-2 3.5-1 .3-2 .3-3 .1v-1.8c.8.2 1.5.2 2 0 .5-.2.5-.7.5-1.3v-.8c-.8.8-1.8 1.3-3 1.3-2.5 0-4.5-1.8-4.5-4.5zm5 1.5c1.5 0 2.5-1.2 2.5-2.7s-1-2.7-2.5-2.7-2.5 1.2-2.5 2.7 1 2.7 2.5 2.7z" fill="#FFFFFF"/>
  </svg>`,

  'aws.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#232F3E"/>
    <path d="M7 21c5 3 13 3 18 0" stroke="#FF9900" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M23 19.5l2.5 1.8-1.8 2.2" fill="#FF9900"/>
    <text x="16" y="16" font-family="system-ui, sans-serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle">AWS</text>
  </svg>`,

  // Baidu
  'baidu.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#2932E1"/>
    <circle cx="10" cy="11" r="2.2" fill="#FFFFFF"/>
    <circle cx="14" cy="8" r="2.2" fill="#FFFFFF"/>
    <circle cx="18" cy="8" r="2.2" fill="#FFFFFF"/>
    <circle cx="22" cy="11" r="2.2" fill="#FFFFFF"/>
    <path d="M16 13c-4 0-7 2.5-7 6.5 0 3.5 3 6 7 6s7-2.5 7-6.5c0-4-3-6.5-7-6.5z" fill="#FFFFFF"/>
    <circle cx="16" cy="18.5" r="2.5" fill="#DE0F17"/>
  </svg>`,

  // ByteDance
  'bytedance.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#001833"/>
    <rect x="7" y="14" width="3.5" height="10" rx="1.75" fill="#325AB4"/>
    <rect x="12" y="10" width="3.5" height="14" rx="1.75" fill="#00C2FF"/>
    <rect x="17" y="7" width="3.5" height="17" rx="1.75" fill="#00D2B8"/>
    <rect x="22" y="11" width="3.5" height="13" rx="1.75" fill="#268FFF"/>
  </svg>`,

  // Tencent
  'tencent.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0052D9"/>
    <path d="M10 8h12l-6 16L10 8z" fill="#FFFFFF"/>
    <path d="M12 8h8l-4 10-4-10z" fill="#0052D9"/>
  </svg>`,

  // Replit
  'replit.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1C2333"/>
    <path d="M8 8h6v5H8V8zm0 6h6v5H8v-5zm7 0h6v5h-6v-5zm0 6h6v5h-6v-5z" fill="#F26207"/>
  </svg>`,

  // Ideogram
  'ideogram.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <circle cx="16" cy="16" r="9" stroke="#FF3366" stroke-width="2.5"/>
    <path d="M16 7v18M7 16h18" stroke="#FF3366" stroke-width="2.5"/>
    <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
  </svg>`,

  // Groq
  'groq.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#F55036"/>
    <rect x="8" y="8" width="16" height="16" rx="4" stroke="#FFFFFF" stroke-width="3"/>
    <path d="M18 16h4v6h-6" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Together AI
  'together.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F62FE"/>
    <circle cx="12" cy="16" r="5.5" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="20" cy="16" r="5.5" stroke="#FFFFFF" stroke-width="2.5"/>
  </svg>`,

  // Fal.ai
  'fal.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#6B21A8"/>
    <path d="M9 8h14l-5 8h6l-10 9 2-7H9V8z" fill="#FACC15"/>
  </svg>`,

  // Kling
  'kling.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FF4D4F"/>
    <path d="M8 8h4v6.5l5.5-6.5h5L16 15l7 9h-5l-4.5-6.5L12 20v4H8V8z" fill="#FFFFFF"/>
  </svg>`,

  // StepFun
  'stepfun.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#06B6D4"/>
    <path d="M7 23h5v-5h5v-5h5V8h4" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Baichuan
  'baichuan.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0052D9"/>
    <path d="M7 16c3-4 6-4 9 0s6 4 9 0M7 21c3-4 6-4 9 0s6 4 9 0M7 11c3-4 6-4 9 0s6 4 9 0" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
  </svg>`,

  // 01.AI
  '01ai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1E40AF"/>
    <rect x="7" y="8" width="8" height="16" rx="4" stroke="#FFFFFF" stroke-width="2.5"/>
    <path d="M21 11l-2 1v-3l3-1h2v16h-3V11z" fill="#FFFFFF"/>
  </svg>`,

  // Reka AI
  'reka.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#059669"/>
    <path d="M8 19c4-6 8-6 12 0s8 6 12 0" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    <circle cx="16" cy="11" r="3" fill="#FFFFFF"/>
  </svg>`,

  // LMSYS
  'lmsys.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#6B21A8"/>
    <path d="M16 6l8 6v9l-8 5-8-5v-9l8-6z" stroke="#D97706" stroke-width="2.2"/>
    <text x="16" y="19" font-family="system-ui, sans-serif" font-weight="900" font-size="7" fill="#FFFFFF" text-anchor="middle">LMSYS</text>
  </svg>`,

  // Nous Research
  'nous.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#E11D48"/>
    <path d="M8 23V9l11 14V9" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="23.5" cy="10" r="2" fill="#FFFFFF"/>
  </svg>`,

  // Cognitive Computations
  'cognitive.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0EA5E9"/>
    <path d="M6 18c3-6 9-9 15-7 2.5.8 4.5 2.5 5 5-2-.5-4.5 0-6 1.5-2 2-3.5 4-6.5 4-3 0-5.5-1.5-7.5-3.5z" fill="#FFFFFF"/>
    <circle cx="19" cy="12.5" r="1.2" fill="#0EA5E9"/>
  </svg>`,

  // TinyLlama
  'tinyllama.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#F59E0B"/>
    <path d="M11 7h3v6h5v4h2v8h-3v-4h-3v4h-3v-8h-3v-7h2V7z" fill="#FFFFFF"/>
    <circle cx="12.5" cy="10" r="1" fill="#F59E0B"/>
  </svg>`,

  // Phind
  'phind.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#2563EB"/>
    <circle cx="14" cy="14" r="6" stroke="#FFFFFF" stroke-width="2.5"/>
    <path d="M19 19l6 6" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // Liquid AI
  'liquid.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#7C3AED"/>
    <path d="M16 6c-4 5-8 9.5-8 13.5a8 8 0 0016 0c0-4-4-8.5-8-13.5z" fill="#06B6D4"/>
    <circle cx="13.5" cy="17.5" r="2" fill="#FFFFFF" fill-opacity="0.6"/>
  </svg>`,

  // OpenBMB
  'openbmb.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#EAB308"/>
    <path d="M16 7l7 4v8l-7 4-7-4v-8l7-4z" fill="#18181B"/>
    <circle cx="16" cy="15" r="2.5" fill="#EAB308"/>
  </svg>`,

  // TII
  'tii.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1E3A8A"/>
    <path d="M7 11c5 3 9 7 9 14 0-7 4-11 9-14-5 1-9 0-9 0s-4 1-9 0z" fill="#D97706"/>
  </svg>`,

  // BAAI
  'baai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1D4ED8"/>
    <circle cx="16" cy="16" r="6" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="9" cy="16" r="2" fill="#93C5FD"/>
    <circle cx="23" cy="16" r="2" fill="#93C5FD"/>
    <circle cx="16" cy="9" r="2" fill="#93C5FD"/>
    <circle cx="16" cy="23" r="2" fill="#93C5FD"/>
  </svg>`,

  // Jina AI
  'jina.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#00D1B2"/>
    <circle cx="12" cy="16" r="5" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="20" cy="16" r="5" stroke="#FFFFFF" stroke-width="2.5"/>
  </svg>`,

  // Nomic
  'nomic.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1E293B"/>
    <circle cx="16" cy="16" r="8" stroke="#3B82F6" stroke-width="2.5"/>
    <path d="M8 16h16M16 8v16" stroke="#3B82F6" stroke-width="2"/>
  </svg>`,

  // Arcee AI
  'arcee.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#4F46E5"/>
    <path d="M8 23c0-6 3.5-12 8-12s8 6 8 12" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  // Argilla
  'argilla.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FF6F61"/>
    <path d="M16 7l7 9-7 9-7-9 7-9z" fill="#FFFFFF"/>
  </svg>`,

  // Bespoke Labs
  'bespoke.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#334155"/>
    <circle cx="16" cy="16" r="8" stroke="#FFFFFF" stroke-width="2.5"/>
    <path d="M16 11v10M11 16h10" stroke="#FFFFFF" stroke-width="2.5"/>
  </svg>`,

  // Deep Cogito
  'cogito.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#8B5CF6"/>
    <circle cx="16" cy="14" r="5" stroke="#FFFFFF" stroke-width="2.5"/>
    <path d="M16 19v5M13 24h6" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // Deep Reinforce
  'deepreinforce.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#DC2626"/>
    <path d="M8 16a8 8 0 0113.7-5.7L23 9v5h-5l1.8-1.8A5.5 5.5 0 1021.5 16H24a8 8 0 01-16 0z" fill="#FFFFFF"/>
  </svg>`,

  // Defog
  'defog.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0284C7"/>
    <path d="M9 20h14a5 5 0 000-10 6.5 6.5 0 00-12.8 1.5A4.5 4.5 0 009 20z" fill="#FFFFFF"/>
  </svg>`,

  // Essential AI
  'essential.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#3730A3"/>
    <path d="M16 7l2.5 6.5L25 16l-6.5 2.5L16 25l-2.5-6.5L7 16l6.5-2.5L16 7z" fill="#FFFFFF"/>
  </svg>`,

  // HyperWrite
  'hyperwrite.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#A855F7"/>
    <path d="M22 8l2 2-11 11-4 1 1-4 12-10z" fill="#FFFFFF"/>
  </svg>`,

  // Inception
  'inception.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#09090B"/>
    <rect x="7" y="7" width="18" height="18" stroke="#FFFFFF" stroke-width="2.5"/>
    <rect x="11.5" y="11.5" width="9" height="9" fill="#FFFFFF"/>
  </svg>`,

  // Inclusion AI
  'inclusion.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#10B981"/>
    <circle cx="16" cy="16" r="7" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="16" cy="16" r="2.5" fill="#FFFFFF"/>
  </svg>`,

  // InternLM
  'internlm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#2563EB"/>
    <path d="M16 6l8 4.5v9L16 24l-8-4.5v-9L16 6z" stroke="#FFFFFF" stroke-width="2"/>
    <path d="M12 11h3v10h-3zm5 0h3v10h-3z" fill="#FFFFFF"/>
  </svg>`,

  // Joshuant
  'joshuant.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#6366F1"/>
    <text x="16" y="21" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" text-anchor="middle">J</text>
  </svg>`,

  // LG AI Research
  'lg.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#A50034"/>
    <circle cx="16" cy="16" r="8" stroke="#FFFFFF" stroke-width="2.2"/>
    <circle cx="13" cy="13.5" r="1.3" fill="#FFFFFF"/>
    <path d="M13 16.5v2.5h4.5M19.5 16.5a4 4 0 00-6-3.5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
  </svg>`,

  // LightOn
  'lighton.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#F59E0B"/>
    <path d="M16 6l3 6.5 7 1-5 5 1.2 7-6.2-3.5-6.2 3.5 1.2-7-5-5 7-1L16 6z" fill="#FFFFFF"/>
  </svg>`,

  // Meituan
  'meituan.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FFC300"/>
    <circle cx="16" cy="16" r="8" fill="#18181B"/>
    <path d="M12 14c2-2 6-2 8 0M11 18c3 3 7 3 10 0" stroke="#FFC300" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // Mixedbread AI
  'mixedbread.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#D97706"/>
    <ellipse cx="16" cy="16" rx="8" ry="6" fill="#FFFFFF"/>
    <path d="M13 13l2 6M17 13l2 6" stroke="#D97706" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Moondream
  'moondream.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#4338CA"/>
    <path d="M17 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c2.2 0 4.2-.9 5.7-2.3-3.2-.4-5.7-3.1-5.7-6.4s2.5-6 5.7-6.4C21.2 8.9 19.2 8 17 8z" fill="#C7D2FE"/>
    <circle cx="21" cy="13" r="1.5" fill="#FDE047"/>
  </svg>`,

  // Morph
  'morph.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#14B8A6"/>
    <path d="M8 8l8 5-8 5V8zm8 5l8 5-8 5v-10z" fill="#FFFFFF"/>
  </svg>`,

  // MotherDuck
  'motherduck.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FBBF24"/>
    <circle cx="16" cy="16" r="7.5" fill="#15803D"/>
    <circle cx="18" cy="14" r="1.5" fill="#FFFFFF"/>
    <path d="M12 16h-4l2 3h4" fill="#F59E0B"/>
  </svg>`,

  // Nex AGI
  'nexagi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0D9488"/>
    <path d="M10 9l8 7-8 7M16 9l8 7-8 7" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Nexusflow
  'nexusflow.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#7C3AED"/>
    <circle cx="11" cy="11" r="3" fill="#FFFFFF"/>
    <circle cx="21" cy="11" r="3" fill="#FFFFFF"/>
    <circle cx="16" cy="21" r="3" fill="#FFFFFF"/>
    <path d="M11 11l5 10 5-10" stroke="#FFFFFF" stroke-width="2"/>
  </svg>`,

  // Open-Orca
  'openorca.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F172A"/>
    <path d="M7 19c4-6 10-9 17-6-2.5 1.5-4 4-4 7-4 0-8-1-13-1z" fill="#38BDF8"/>
    <circle cx="19" cy="15" r="1.5" fill="#FFFFFF"/>
  </svg>`,

  // OpenChat
  'openchat.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#3B82F6"/>
    <path d="M8 12a5 5 0 015-5h6a5 5 0 015 5v5a5 5 0 01-5 5h-4l-4 3v-3H13a5 5 0 01-5-5v-5z" fill="#FFFFFF"/>
    <circle cx="13" cy="14" r="1.5" fill="#3B82F6"/>
    <circle cx="19" cy="14" r="1.5" fill="#3B82F6"/>
  </svg>`,

  // OpenCoder Team
  'opencoder.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#10B981"/>
    <path d="M12 11l-5 5 5 5M20 11l5 5-5 5" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Pankaj Mathur
  'pankajmathur.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#2563EB"/>
    <text x="16" y="20" font-family="system-ui, sans-serif" font-weight="900" font-size="11" fill="#FFFFFF" text-anchor="middle">PM</text>
  </svg>`,

  // Perceptron
  'perceptron.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#4338CA"/>
    <circle cx="16" cy="16" r="7" stroke="#FFFFFF" stroke-width="2.5"/>
    <path d="M9 16h6a3 3 0 013 3h5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  // Poolside
  'poolside.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#06B6D4"/>
    <circle cx="16" cy="16" r="7" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="16" cy="16" r="3.5" fill="#FFFFFF"/>
  </svg>`,

  // Sailor2
  'sailor.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0284C7"/>
    <circle cx="16" cy="16" r="7" stroke="#FFFFFF" stroke-width="2.5"/>
    <path d="M16 6v20M6 16h20M9 9l14 14M9 23L23 9" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="16" cy="16" r="2.5" fill="#0284C7"/>
  </svg>`,

  // Sentence Transformers
  'sentencetransformers.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#F97316"/>
    <path d="M7 13h13l-4-4M25 19H12l4 4" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Thinking Machines
  'thinkingmachines.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#EF4444"/>
    <rect x="8" y="8" width="6" height="6" fill="#FFFFFF"/>
    <rect x="18" y="8" width="6" height="6" fill="#FFFFFF"/>
    <rect x="8" y="18" width="6" height="6" fill="#FFFFFF"/>
    <rect x="18" y="18" width="6" height="6" fill="#FFFFFF"/>
  </svg>`,

  // Writer AI
  'writer.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <path d="M7 10l5 12 4-8 4 8 5-12" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Xiaomi
  'xiaomi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FF6900"/>
    <path d="M10 11h4v10h-4V11zm6 0h5a3 3 0 013 3v7h-3v-6a1 1 0 00-1-1h-1v7h-3V11z" fill="#FFFFFF"/>
  </svg>`,

  // Z.ai
  'zai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <path d="M9 10h14l-11 12h11" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // oobabooga
  'oobabooga.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#D946EF"/>
    <circle cx="12" cy="14" r="3.5" fill="#FFFFFF"/>
    <circle cx="20" cy="14" r="3.5" fill="#FFFFFF"/>
    <circle cx="13" cy="14" r="1.5" fill="#18181B"/>
    <circle cx="21" cy="14" r="1.5" fill="#18181B"/>
    <path d="M12 21c2 2 6 2 8 0" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // vLLM
  'vllm.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#8B5CF6"/>
    <path d="M8 10l7 12 7-12" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // LlamaIndex
  'llamaindex.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#581C87"/>
    <path d="M11 8h3v5h5v3h2v8h-3v-3h-3v3h-3v-7h-3v-6h2V8z" fill="#E879F9"/>
  </svg>`,

  // Cerebras
  'cerebras.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0D9488"/>
    <rect x="8" y="8" width="16" height="16" rx="2" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="16" cy="16" r="3" fill="#FFFFFF"/>
  </svg>`,

  // Luma AI
  'luma.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#9333EA"/>
    <circle cx="16" cy="16" r="7" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="19" cy="13" r="2.5" fill="#F472B6"/>
  </svg>`,

  // Pika
  'pika.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#FACC15"/>
    <path d="M17 7l-8 10h7l-3 8 10-11h-7l4-7h-3z" fill="#18181B"/>
  </svg>`,

  // Upstage
  'upstage.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#F97316"/>
    <circle cx="16" cy="18" r="6" fill="#FFFFFF"/>
    <path d="M16 6v4M8 10l3 3M24 10l-3 3" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  // PyTorch
  'pytorch.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <path d="M16 6a9 9 0 00-6.4 15.3l1.8-1.8a6.5 6.5 0 014.6-11 6.5 6.5 0 016.4 7.6l2.5.6A9 9 0 0016 6z" fill="#EE4C2C"/>
    <circle cx="21" cy="10" r="1.5" fill="#EE4C2C"/>
  </svg>`,

  // TensorFlow
  'tensorflow.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <path d="M16 6l9 5.2v10.4L16 26.8l-9-5.2V11.2L16 6z" fill="#FF6F00"/>
    <path d="M16 6v20.8M7 11.2l9 5.2 9-5.2" stroke="#FFFFFF" stroke-width="1.8"/>
  </svg>`,

  // DeepMind
  'deepmind.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1A73E8"/>
    <rect x="9" y="9" width="5.5" height="5.5" rx="1.5" fill="#FFFFFF"/>
    <rect x="17.5" y="9" width="5.5" height="5.5" rx="1.5" fill="#FFFFFF"/>
    <rect x="9" y="17.5" width="5.5" height="5.5" rx="1.5" fill="#FFFFFF"/>
    <rect x="17.5" y="17.5" width="5.5" height="5.5" rx="1.5" fill="#4285F4"/>
  </svg>`,

  // BigCode
  'bigcode.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#8B5CF6"/>
    <path d="M11 10l-4 6 4 6M21 10l4 6-4 6" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="16" cy="16" r="2.5" fill="#FDE047"/>
  </svg>`,

  // Inflection AI
  'inflection.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#18181B"/>
    <path d="M10 11h12M13 11v10M19 11v7.5c0 1.5 1 2.5 2.5 2.5" stroke="#F5F5F7" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  // Recraft AI
  'recraft.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#E11D48"/>
    <path d="M10 8h7a5 5 0 015 5 5 5 0 01-5 5h-7V8z" fill="#FFFFFF"/>
    <path d="M16 18l5 6h-4l-4.5-6H16z" fill="#FFFFFF"/>
    <circle cx="15.5" cy="13" r="2" fill="#E11D48"/>
  </svg>`,

  // Cartesia AI
  'cartesia.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F0E17"/>
    <circle cx="16" cy="16" r="9" stroke="#6366F1" stroke-width="2" stroke-dasharray="2 3"/>
    <circle cx="16" cy="16" r="6" stroke="#38BDF8" stroke-width="2.2"/>
    <circle cx="16" cy="16" r="2.5" fill="#A855F7"/>
  </svg>`,

  // Fish Audio
  'fishaudio.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0284C7"/>
    <path d="M8 16c4-6 10-6 14 0-4 6-10 6-14 0z" fill="#FFFFFF"/>
    <path d="M22 16l4-4v8l-4-4z" fill="#FFFFFF"/>
    <circle cx="13" cy="15" r="1.5" fill="#0284C7"/>
  </svg>`,

  // Voyage AI
  'voyageai.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#1E40AF"/>
    <path d="M16 6l8 14H8l8-14z" fill="#FFFFFF"/>
    <path d="M16 11l5 9h-10l5-9z" fill="#1E40AF"/>
    <path d="M7 23h18l-3 3H10l-3-3z" fill="#60A5FA"/>
  </svg>`,

  // 2noise (ChatTTS)
  '2noise.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="7" fill="#0F172A"/>
    <rect x="8" y="13" width="3" height="6" rx="1.5" fill="#10B981"/>
    <rect x="13" y="9" width="3" height="14" rx="1.5" fill="#10B981"/>
    <rect x="18" y="11" width="3" height="10" rx="1.5" fill="#34D399"/>
    <rect x="23" y="14" width="3" height="4" rx="1.5" fill="#6EE7B7"/>
  </svg>`
};

let count = 0;
for (const [filename, svg] of Object.entries(logos)) {
  const filePath = path.join(LOGOS_DIR, filename);
  fs.writeFileSync(filePath, svg.trim(), 'utf8');
  count++;
}

console.log(`Successfully generated ${count} logo SVG files in ${LOGOS_DIR}`);
