/*
    ? What is Callbacks?
    * A callback is a function that is to be executed after another function has finished executing.
    ? What is higher-order function?
    * A higher-order function is a function that takes a function as an argument, or returns a function.

    ? What is difference between synchronous and asynchronous?
    * Synchronous code is executed line by line.
    * Asynchronous code is executed in a non-blocking manner.
    
    ? What is the difference between synchronous and asynchronous callback?
    * Synchronous callback is executed immediately.
    * Asynchronous callback is executed after a certain task has been completed.
*/

const greetings = (name) => {
  console.log(`Hello ${name}`);
};

const higherOrderFunction = (name, callback) => {
  callback(name);
};

higherOrderFunction("John", greetings);
