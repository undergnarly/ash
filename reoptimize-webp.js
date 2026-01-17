import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const MAX_SIZE_KB = 180; // даже более агрессивное сжатие

async function reoptimizeWebP(file) {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();

    if (ext !== '.webp') return;

    try {
        const stats = await fs.stat(filePath);
        const currentSizeKB = stats.size / 1024;

        console.log(`Processing ${file} (${currentSizeKB.toFixed(2)} KB)...`);

        // Если файл уже меньше целевого размера, пропускаем
        if (currentSizeKB <= MAX_SIZE_KB) {
            console.log(`  ✓ Already optimized, skipping.`);
            return;
        }

        let quality = 75;
        let width = 1920;

        // Читаем оригинальный файл
        const originalBuffer = await fs.readFile(filePath);

        // Пробуем сжать
        let buffer = await sharp(originalBuffer)
            .resize({ width: width, withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();

        // Продолжаем снижать качество и размер, если нужно
        while (buffer.length > MAX_SIZE_KB * 1024 && quality > 30) {
            quality -= 5;
            if (quality < 60 && width > 1200) {
                width = Math.floor(width * 0.85);
            }

            buffer = await sharp(originalBuffer)
                .resize({ width: width, withoutEnlargement: true })
                .webp({ quality })
                .toBuffer();
        }

        const newSizeKB = buffer.length / 1024;

        if (newSizeKB < currentSizeKB) {
            await fs.writeFile(filePath, buffer);
            console.log(`  ✓ Optimized to ${newSizeKB.toFixed(2)} KB (saved ${(currentSizeKB - newSizeKB).toFixed(2)} KB)`);
        } else {
            console.log(`  → No improvement, keeping original.`);
        }

    } catch (error) {
        console.error(`Error processing ${file}:`, error);
    }
}

async function main() {
    try {
        const files = await fs.readdir(imagesDir);
        const webpFiles = files.filter(f => f.endsWith('.webp'));

        console.log(`Found ${webpFiles.length} WebP images to process...\n`);

        for (const file of webpFiles) {
            await reoptimizeWebP(file);
        }

        console.log('\n✓ All images processed!');
    } catch (error) {
        console.error("Error reading directory:", error);
    }
}

main();
