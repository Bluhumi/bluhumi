import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const INPUT_DIR = path.resolve('public/assets/images');
const OUTPUT_DIR = path.resolve('public/assets/images/optimized');

const IMAGES = [
  'Markus_Profilbild.jpg',
  'Markus_FrankSchneider_18.jpg',
  'Markus_FrankSchneider_04.jpg',
];

const WIDTHS = [480, 960];

const FORMATS = [
  { ext: 'avif', options: { quality: 48 } },
  { ext: 'webp', options: { quality: 72 } },
  { ext: 'jpg', options: { quality: 72, mozjpeg: true } },
];

const run = async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const filename of IMAGES) {
    const inputPath = path.join(INPUT_DIR, filename);
    const baseName = path.parse(filename).name;
    const meta = await sharp(inputPath).metadata();

    if (!meta.width) continue;

    for (const width of WIDTHS) {
      if (width > meta.width) continue;

      for (const format of FORMATS) {
        const outputPath = path.join(OUTPUT_DIR, `${baseName}-${width}w.${format.ext}`);

        let pipeline = sharp(inputPath).resize({
          width,
          fit: 'inside',
          withoutEnlargement: true,
        });

        if (format.ext === 'avif') {
          pipeline = pipeline.avif(format.options);
        } else if (format.ext === 'webp') {
          pipeline = pipeline.webp(format.options);
        } else {
          pipeline = pipeline.jpeg(format.options);
        }

        await pipeline.toFile(outputPath);
      }
    }
  }
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
