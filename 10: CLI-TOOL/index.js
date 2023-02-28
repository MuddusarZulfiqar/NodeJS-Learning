#!/usr/bin/env node

// create cli tool get the pokemon name and return the pokemon 5 moves

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the Pokemon name: ", (name) => {
  // Get the pokemon 5 moves from API here

  console.log(`The 5 moves of ${name} are:`);

  // Log out the pokemon 5 moves here

  rl.close();
});
