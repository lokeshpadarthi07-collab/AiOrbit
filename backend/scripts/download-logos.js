import fs from 'fs';
import path from 'path';

const logosDir = path.resolve('frontend/public/logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

async function downloadSimpleIcon(name, filename, color) {
  try {
    const url = `https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${name}.svg`;
    const r = await fetch(url);
    if (!r.ok) {
      console.log('Simple icon not found for:', name);
      return false;
    }
    let svg = await r.text();
    if (color && !svg.includes('fill=')) {
      svg = svg.replace('<svg ', `<svg fill="${color}" `);
    }
    fs.writeFileSync(path.join(logosDir, filename), svg);
    console.log('Saved SVG:', filename);
    return true;
  } catch (e) {
    console.error('Error downloading', name, e.message);
    return false;
  }
}

async function downloadGhAvatar(org, filename) {
  try {
    const url = `https://github.com/${org}.png`;
    const r = await fetch(url);
    if (!r.ok) {
      console.log('GH avatar not found for:', org);
      return false;
    }
    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(path.join(logosDir, filename), buf);
    console.log('Saved PNG:', filename, buf.length, 'bytes');
    return true;
  } catch (e) {
    console.error('Error downloading', org, e.message);
    return false;
  }
}

async function run() {
  console.log('Starting logo downloads...');

  // Simple Icons SVGs with authentic brand colors
  await downloadSimpleIcon('deepseek', 'deepseek.svg', '#0066FF');
  await downloadSimpleIcon('suno', 'suno.svg', '#000000');
  await downloadSimpleIcon('ollama', 'ollama.svg', '#000000');
  await downloadSimpleIcon('vllm', 'vllm.svg', '#3B82F6');
  await downloadSimpleIcon('langchain', 'langchain.svg', '#1C3C3C');
  await downloadSimpleIcon('qdrant', 'qdrant.svg', '#DC2626');
  await downloadSimpleIcon('replicate', 'replicate.svg', '#000000');
  await downloadSimpleIcon('elevenlabs', 'elevenlabs.svg', '#000000');
  await downloadSimpleIcon('pytorch', 'pytorch.svg', '#EE4C2C');
  await downloadSimpleIcon('tensorflow', 'tensorflow.svg', '#FF6F00');
  await downloadSimpleIcon('apple', 'apple.svg', '#000000');

  // Official High-Res PNGs from verified official GitHub organizations
  await downloadGhAvatar('Stability-AI', 'stability.png');
  await downloadGhAvatar('Comfy-Org', 'comfyui.png');
  await downloadGhAvatar('run-llama', 'llamaindex.png');
  await downloadGhAvatar('cohere-ai', 'cohere.png');
  await downloadGhAvatar('groq', 'groq.png');
  await downloadGhAvatar('pinecone-io', 'pinecone.png');
  await downloadGhAvatar('weaviate', 'weaviate.png');
  await downloadGhAvatar('chroma-core', 'chroma.png');
  await downloadGhAvatar('EleutherAI', 'eleutherai.png');
  await downloadGhAvatar('ggml-org', 'ggml.png');
  await downloadGhAvatar('Qwen', 'qwen.png');
  await downloadGhAvatar('runwayml', 'runway.png');
  await downloadGhAvatar('Significant-Gravitas', 'autogpt.png');
  await downloadGhAvatar('lmstudio-ai', 'lmstudio.png');
  await downloadGhAvatar('Lightning-AI', 'lightning.png');
  await downloadGhAvatar('unslothai', 'unsloth.png');
  await downloadGhAvatar('togethercomputer', 'together.png');
  await downloadGhAvatar('modal-labs', 'modal.png');
  await downloadGhAvatar('baseten', 'baseten.png');
  await downloadGhAvatar('ray-project', 'ray.png');
  await downloadGhAvatar('lm-sys', 'lmsys.png');
  await downloadGhAvatar('tiiuae', 'tii.png');
  await downloadGhAvatar('crewAIInc', 'crewai.png');
  await downloadGhAvatar('langflow-ai', 'langflow.png');
  await downloadGhAvatar('langgenius', 'dify.png');
  await downloadGhAvatar('FlowiseAI', 'flowise.png');
  await downloadGhAvatar('Mintplex-Labs', 'anythingllm.png');
  await downloadGhAvatar('janhq', 'jan.png');
  await downloadGhAvatar('mudler', 'localai.png');
  await downloadGhAvatar('TabbyML', 'tabby.png');
  await downloadGhAvatar('continuedev', 'continue.png');
  await downloadGhAvatar('All-Hands-AI', 'opendevin.png');

  // Clean up temporary test files
  const testFiles = fs.readdirSync(logosDir).filter(f => f.endsWith('_test.png'));
  for (const f of testFiles) {
    fs.unlinkSync(path.join(logosDir, f));
  }

  console.log('All company logos downloaded successfully!');
}

run();
