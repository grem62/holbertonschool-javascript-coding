#!/usr/bin/node

const fs = require('fs');

const text = process.argv[3];

fs.writeFile(process.argv[2], text, (err) => {
  if (err) throw err;
});
