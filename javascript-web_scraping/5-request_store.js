#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const filePath = process.argv[3];

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.error(`Erreur lors de la requête : ${error}`);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(`error: ${err}`);
      }
    });
  }
});
