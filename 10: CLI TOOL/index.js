#!/usr/bin/env node

// create cli tool get the pokemon name and return the pokemon 5 moves

const readline = require("readline");
const axios = require("axios");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the Pokemon name: ", async (name) => {
  const pokemon = name.toLowerCase();
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await response.json();
  const moves = data.moves.map((move) => move.move.name);
  // Get the pokemon 5 moves from API here

  console.log(`The 5 moves of ${name} are:`, moves);

  // Log out the pokemon 5 moves here

  rl.close();
});
