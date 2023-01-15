const fs = require('fs');
const path = require('path');

const adaterFilename = 'adapter.js';
const sourceFilePath = path.resolve(__dirname, 'node_modules', 'webrtc-adapter', 'out', adaterFilename);
const targetFilePath = path.resolve('.', adaterFilename);

console.log('*from', sourceFilePath);
console.log('*to', targetFilePath);

if (!fs.existsSync(targetFilePath) && fs.existsSync(sourceFilePath)) {
  fs.copyFileSync(sourceFilePath, targetFilePath);
  console.log('*copied');
}