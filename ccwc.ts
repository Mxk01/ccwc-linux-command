#!/usr/bin/env node
"use strict";

import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

let lineCount: number = 0;

const argv: any = yargs
  .option('characterBytes', {
    alias: 'c',
    describe: 'Find the bytes size of the file',
    demandOption: false,
    type: 'boolean',
  })
  .option('wordCount', {
    alias: 'w',
    describe: 'Find the number of words in the file.',
    demandOption: false,
    type: 'boolean',
  })
  .option('lineNumbers', {
    alias: 'l',
    describe: 'Find the number of lines in the file.',
    demandOption: false,
    type: 'boolean',
  }).argv;

// first argument is the file path
const filePath = argv._[0];

if (!filePath) {
  console.error('Please provide a file.');
  process.exit(1);
}

function countWords(filePath: string) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Error reading file: ${err.message}`);
      return;
    }
    const words = data.split(/\s+/).filter((word) => word !== '');
    const wordsCount = words.length;
    console.log(`The number of words in the file is: ${wordsCount}`);
  });
}

const stream = fs.createReadStream(filePath, 'utf-8');
let str = '';

stream.on('data', (chunk: any) => {
  str += chunk.toString();
  lineCount += (chunk.match(/\n/g) || []).length;
});

stream.on('end', () => {
  if (argv.characterBytes) {
    let byteSize = Buffer.from(str).length;
    console.log(`The size of this file is: ${byteSize} bytes.`);
  }
  if (argv.lineNumbers) {
    console.log(`The number of lines in this file is: ${lineCount} lines.`);
  }
  if (argv.wordCount) {
    countWords(filePath);
  }
  // If no specific flags are provided, display a default message
  if (!argv.characterBytes && !argv.lineNumbers && !argv.wordCount) {
    console.log(`You have selected ${filePath}`);
  }
});

stream.on('error', (err: Error) => {
  console.error('Error reading the file:', err);
});
