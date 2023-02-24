/*
    ? What is a module?

    * A module is an encapsulated piece of code that has its own scope.

    ? Types of modules:

    * Local modules
    * Built-in modules
    * Third-party modules
*/

// ? Local modules
// * Local modules are modules that are created by the developer.

// ? What is IIFE?
// * IIFE stands for Immediately Invoked Function Expression.
// e.g. (function(__dirname, __filename, require, module, exports) { ... })();

// ? What is module caching?
// * Module caching is a mechanism that caches the module after the first time it is loaded.

// ? What is module.exports and exports?
// * module.exports is the object that is actually returned as the result of a require call.
// * exports is a shortcut to module.exports.
// * exports is a reference to module.exports.
// const add = require("./local");
const superheroes = require("./super-hero");
// import add from "./mathPattren.mjs";

console.log(superheroes.getName());
superheroes.setName("Superman");
console.log(superheroes.getName());
const data = require("../data.json");
// // console.log(add(1, 2));

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

// ! Module Wrapper Function
// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });

console.log(data);
