import sharp from "sharp";
import { readdirSync } from "fs";
import { join, parse } from "path";
import { fileURLToPath } from "url";

const __dirname = join(fileURLToPath(import.meta.url), "..");
const publicDir = join(__dirname, "..", "public");

const images = readdirSync(publicDir).filter(
  (f) => /\.(jpe?g|png)$/i.test(f)
);

await Promise.all(
  images.map(async (file) => {
    const input = join(publicDir, file);
    const output = join(publicDir, `${parse(file).name}.webp`);
    await sharp(input).webp({ quality: 80 }).toFile(output);
    console.log(`\u2713 ${file} \u2192 ${parse(file).name}.webp`);
  })
);

console.log(`\nHecho: ${images.length} imagen(es) convertidas a WebP.`);
