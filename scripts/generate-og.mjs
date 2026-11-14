import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf9f7"/>
  <rect width="14" height="630" fill="#1f5c4a"/>

  <text x="88" y="118" font-family="Helvetica, Arial, sans-serif" font-size="19" letter-spacing="5" fill="#6e6a62">WWW.FARIS.ID</text>

  <text x="84" y="318" font-family="Georgia, 'Times New Roman', serif" font-size="122" fill="#14130f">Faris</text>
  <text x="84" y="440" font-family="Georgia, 'Times New Roman', serif" font-size="122" font-style="italic" fill="#1f5c4a">Arifiansyah</text>

  <line x1="88" y1="505" x2="1112" y2="505" stroke="#e5e0d6" stroke-width="1"/>

  <text x="88" y="556" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#6e6a62">Senior Software Engineer at NinjaOne</text>
  <text x="1112" y="556" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="21" fill="#6e6a62">Greater Bandung, Indonesia</text>
</svg>
`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');

console.log('Generated public/og.png');
