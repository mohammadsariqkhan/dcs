import https from 'https';

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const query = process.argv[2] || '';
  console.log(`Searching for "${query}"...`);
  const files = await fetchJson('https://api.github.com/repos/balazser/undraw-svg-collection/contents/svgs');
  const matches = files.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
  console.log(`Found ${matches.length} matches:`);
  console.log(matches.map(m => m.name).slice(0, 50));
}

main().catch(console.error);
