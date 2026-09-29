const fs = require('fs');

async function run() {
  for (const page of ['tasks', 'creativity']) {
    console.log(`=== Fetching ${page} ===`);
    const res = await fetch(`https://ai-orbit-86s9.vercel.app/${page}`);
    const html = await res.text();
    console.log(`Status: ${res.status}, Length: ${html.length}`);
    if (html.includes('Something went wrong') || html.includes('Couldn\'t load')) {
      console.log(`FOUND ERROR TEXT IN ${page} HTML!`);
    } else {
      console.log(`No error text in raw ${page} HTML`);
    }
  }
}

run().catch(console.error);
