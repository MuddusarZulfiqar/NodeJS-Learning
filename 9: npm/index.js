const upperCase = require("upper-case").upperCase;

function greet(name) {
  console.log(upperCase(`Hello ${name}!`));
}

greet("Muddusar");
module.exports = greet;
