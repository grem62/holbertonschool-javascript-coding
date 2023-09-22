#!/usr/local/bin/node

const { error } = require('console');
const fs = require('fs');

const path = process.argv[2];

fs.readFileSync(path, 'utf-8', function(err, data){
if(err){
    console.error(`error: ${err}`)
} else {
    console.log(data)
    }
});