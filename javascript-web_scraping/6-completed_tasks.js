#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }

  const todos = JSON.parse(body);

  const completedTasksByUser = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      completedTasksByUser[todo.userId] = (completedTasksByUser[todo.userId] || 0) + 1;
    }
  });

  console.log(completedTasksByUser);
});
