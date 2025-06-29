const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

// Normalize all line endings first
const normalizedData = data.replace(/\r\n?/g, "\n");

// Now split on blank lines
const textLines = normalizedData.split(/\n\s*\n/);

// Trim each block
const cleanTextLines = textLines.map((line) => line.trim());

console.log("cleanTextLines", cleanTextLines);

console.log("type of variable data", typeof data);

console.log("type of variable textLines:", typeof textLines);

console.log("data raw:", data);

console.log("textLines", textLines);

console.log("cleanTextLines", cleanTextLines);

console.log("line break?:", cleanTextLines[2]);
