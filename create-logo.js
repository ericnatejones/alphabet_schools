const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 192x192 canvas
const canvas = createCanvas(192, 192);
const ctx = canvas.getContext('2d');

// Fill background
ctx.fillStyle = '#3498db';
ctx.fillRect(0, 0, 192, 192);

// Add text
ctx.font = 'bold 72px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('AS', 96, 96);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/logo192.png', buffer);

// Create a 512x512 canvas for the larger logo
const largeCanvas = createCanvas(512, 512);
const largeCtx = largeCanvas.getContext('2d');

// Fill background
largeCtx.fillStyle = '#3498db';
largeCtx.fillRect(0, 0, 512, 512);

// Add text
largeCtx.font = 'bold 192px Arial';
largeCtx.fillStyle = 'white';
largeCtx.textAlign = 'center';
largeCtx.textBaseline = 'middle';
largeCtx.fillText('AS', 256, 256);

// Save as PNG
const largeBuffer = largeCanvas.toBuffer('image/png');
fs.writeFileSync('./public/logo512.png', largeBuffer);

console.log('Logo files created successfully!');
