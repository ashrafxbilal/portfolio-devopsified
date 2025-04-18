import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a canvas with the desired dimensions
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Set background
ctx.fillStyle = '#1a1a1a';
ctx.fillRect(0, 0, width, height);

// Configure text
ctx.textAlign = 'center';
ctx.fillStyle = '#ffffff';

// Draw title
ctx.font = 'bold 48px Arial';
ctx.fillText('Bilal Ashraf', width / 2, height / 2);

// Draw subtitle
ctx.font = '24px Arial';
ctx.fillText('Java Developer & DevOps Engineer', width / 2, height / 2 + 50);

// Save the image
const buffer = canvas.toBuffer('image/png');
const outputPath = path.join(__dirname, '..', 'public', 'opengraph-image.png');

// Ensure the public directory exists
if (!fs.existsSync(path.join(__dirname, '..', 'public'))) {
  fs.mkdirSync(path.join(__dirname, '..', 'public'), { recursive: true });
}

fs.writeFileSync(outputPath, buffer);
console.log('OpenGraph image generated successfully!'); 