#!/usr/bin/node
//
const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(url, (error, body) => {
  if (error) {
    console.error(`Erreur : ${error}`);
  } else {
    console.log(JSON.parse(body).title);
  }
});
