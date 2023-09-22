#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    const movies = JSON.parse(body).results.reduce((count, movie) => {
      return count + movie.characters.filter(character => character.includes('18')).length;
    }, 0);

    console.log(movies);
  }
});
