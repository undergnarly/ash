import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const MAX_SIZE_KB = 200;

async function processImage(file) {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();

    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const fileName = path.basename(file, ext);
    const outputFilePath = path.join(imagesDir, `${fileName}.webp`);

    try {
        console.log(`Processing ${file}...`);

        let quality = 80;
        let width = 1920;

        // Initial conversion
        let buffer = await sharp(filePath)
            .resize({ width: width, withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();

        // Check size and adjust
        while (buffer.length > MAX_SIZE_KB * 1024 && quality > 10) {
            quality -= 10;
            if (quality < 50 && width > 800) {
                width = Math.floor(width * 0.8);
            }

            buffer = await sharp(filePath)
                .resize({ width: width, withoutEnlargement: true })
                .webp({ quality })
                .toBuffer();
        }

        await fs.writeFile(outputFilePath, buffer);
        console.log(`Saved ${outputFilePath} (${(buffer.length / 1024).toFixed(2)} KB)`);

        // Remove original if valid
        if (filePath !== outputFilePath) {
            await fs.unlink(filePath);
        }

    } catch (error) {
        console.error(`Error processing ${file}:`, error);
    }
}

async function main() {
    try {
        const files = await fs.readdir(imagesDir);
        for (const file of files) {
            await processImage(file);
        }
    } catch (error) {
        console.error("Error reading directory:", error);
    }
}

main();
