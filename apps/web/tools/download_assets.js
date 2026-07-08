import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXPERTISE_DIR = path.join(__dirname, '../public/images/expertise');
const INDUSTRIES_DIR = path.join(__dirname, '../public/images/industries');

// Ensure directories exist
fs.mkdirSync(EXPERTISE_DIR, { recursive: true });
fs.mkdirSync(INDUSTRIES_DIR, { recursive: true });

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

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };
    https.get(url, options, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

const expertiseMappings = {
  'artificial-intelligence': ['artificial-intelligence'],
  'machine-learning': ['data-trends'],
  'data-engineering': ['data-processing'],
  'cloud-engineering': ['cloud-hosting'],
  'data-analytics': ['data-reports'],
  'business-intelligence': ['business-decisions'],
  'data-science': ['analysis'],
  'mlops': ['dev-productivity'],
  'data-governance': ['gdpr'],
  'data-migration': ['real-time-sync']
};

const industryMappings = {
  'banking': ['finance'],
  'healthcare': ['medical-care'],
  'retail': ['gone-shopping'],
  'manufacturing': ['factory'],
  'logistics': ['logistics'],
  'telecommunications': ['connected-world'],
  'energy': ['powerful'],
  'real-estate': ['build-your-home'],
  'education': ['education'],
  'government': ['public-discussion']
};

async function main() {
  console.log('Fetching file list from GitHub repository...');
  let files;
  try {
    files = await fetchJson('https://api.github.com/repos/balazser/undraw-svg-collection/contents/svgs');
    if (!Array.isArray(files)) {
      throw new Error('Response is not an array. Might be rate limited.');
    }
  } catch (e) {
    console.error('Error fetching file list from GitHub:', e.message);
    process.exit(1);
  }

  console.log(`Found ${files.length} available files.`);

  // Function to find best matching SVG for a key
  const findMatch = (keywords) => {
    for (const kw of keywords) {
      const match = files.find(f => f.name.toLowerCase() === `${kw}.svg` || f.name.toLowerCase().includes(kw));
      if (match) return match;
    }
    return null;
  };

  // Download Expertise SVGs
  console.log('\n--- Downloading Expertise SVGs ---');
  for (const [key, keywords] of Object.entries(expertiseMappings)) {
    const match = findMatch(keywords);
    if (match) {
      const dest = path.join(EXPERTISE_DIR, `${key}.svg`);
      console.log(`Downloading ${match.name} -> expertise/${key}.svg`);
      try {
        await downloadFile(match.download_url, dest);
      } catch (err) {
        console.error(`Failed to download ${key}:`, err.message);
      }
    } else {
      console.warn(`No match found for expertise: ${key}`);
    }
  }

  // Download Industry SVGs
  console.log('\n--- Downloading Industry SVGs ---');
  for (const [key, keywords] of Object.entries(industryMappings)) {
    const match = findMatch(keywords);
    if (match) {
      const dest = path.join(INDUSTRIES_DIR, `${key}.svg`);
      console.log(`Downloading ${match.name} -> industries/${key}.svg`);
      try {
        await downloadFile(match.download_url, dest);
      } catch (err) {
        console.error(`Failed to download ${key}:`, err.message);
      }
    } else {
      console.warn(`No match found for industry: ${key}`);
    }
  }

  console.log('\nAsset download completed!');
}

main().catch(console.error);
