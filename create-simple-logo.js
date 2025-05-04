const fs = require('fs');
const path = require('path');

// Simple 1x1 pixel transparent PNG (base64 encoded)
const transparentPixel = 'iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABDSURBVHgB7cEBDQAAAMKg909tDjegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOFYAYgABOeWZlAAAAABJRU5ErkJggg==';

// Write the files
fs.writeFileSync(
  path.join(__dirname, 'public', 'logo192.png'), 
  Buffer.from(transparentPixel, 'base64')
);

fs.writeFileSync(
  path.join(__dirname, 'public', 'logo512.png'), 
  Buffer.from(transparentPixel, 'base64')
);

console.log('Logo placeholder files created successfully!');
