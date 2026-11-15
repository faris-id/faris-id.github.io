import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

// Display face mirrors the site (Cormorant Garamond). librsvg cannot read woff2,
// so this uses the closest serif available on macOS, with safe fallbacks.
const display = "Didot, 'Bodoni 72', Baskerville, Georgia, 'Times New Roman', serif";
const sans = 'Helvetica, Arial, sans-serif';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf9f7"/>
  <rect width="14" height="630" fill="#1f5c4a"/>

  <text x="88" y="118" font-family="${sans}" font-size="19" letter-spacing="5" fill="#6e6a62">WWW.FARIS.ID</text>

  <text x="84" y="330" font-family="${display}" font-size="140" fill="#14130f">Faris</text>
  <text x="84" y="462" font-family="${display}" font-size="140" fill="#1f5c4a">Arifiansyah</text>

  <line x1="88" y1="524" x2="1112" y2="524" stroke="#e5e0d6" stroke-width="1"/>

  <text x="88" y="574" font-family="${sans}" font-size="25" fill="#6e6a62">Senior Software Engineer at NinjaOne</text>
  <text x="1112" y="574" text-anchor="end" font-family="${sans}" font-size="21" fill="#6e6a62">Greater Bandung, Indonesia</text>
</svg>
`;

await mkdir('public', { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');

console.log('Generated public/og.png');
