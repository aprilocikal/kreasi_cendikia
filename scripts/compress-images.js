import fs from "fs";
import path from "path";
import sharp from "sharp";

const targetDirs = [
  path.join(process.cwd(), "public", "assets", "kci"),
  path.join(process.cwd(), "src", "assets"),
];

async function compressDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await compressDirectory(fullPath);
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const outputPath = path.join(dirPath, file.replace(/\.(jpe?g|png)$/i, ".webp"));
      const originalSize = (stat.size / 1024).toFixed(1);

      try {
        await sharp(fullPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 75, effort: 5 })
          .toFile(outputPath);

        const newSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
        const savedPercent = (((stat.size - fs.statSync(outputPath).size) / stat.size) * 100).toFixed(0);
        console.log(`[Optimized] ${file} (${originalSize} KB) -> ${path.basename(outputPath)} (${newSize} KB, -${savedPercent}%)`);
      } catch (err) {
        console.error(`Error compressing ${file}:`, err);
      }
    }
  }
}

async function run() {
  console.log("Memulai kompresi performa tinggi ke WebP...");
  for (const dir of targetDirs) {
    await compressDirectory(dir);
  }
  console.log("Kompresi optimal selesai!");
}

run();
