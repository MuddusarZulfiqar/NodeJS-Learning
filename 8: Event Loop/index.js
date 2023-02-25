/*
    ? JavaScript is a synchronous, blocking, single-threaded language.

    * synchronous means that one line of code is executed at a time.
    * blocking means that if a line of code is taking a long time to execute, the next line of code will not be executed until the first line of code is finished executing.
    * single-threaded means that there is only one call stack.
    
    * To make async programming possible, we need the help of libuv, which is a C++ library that is written in C++.
    * libuv is a library that is written in C++ that helps us to do async programming in JavaScript.

    ? What is thread pool?
    * The thread pool is a pool of threads that are managed by libuv.
    * It manages the threads and it is responsible for executing the callbacks that are passed to the thread pool.


    ? How code is executed in node runtime?

    * When we run a node application, the node runtime is created.
    * The node runtime is a C++ program that is written in C++.
    * The node runtime is responsible for creating the call stack, the event loop, the thread pool, and the callback queue.
    * The node runtime is also responsible for executing the code that we write in our JavaScript files.
    * The node runtime is also responsible for executing the callbacks that are passed to the thread pool.
    * In case of a blocking operation, the node runtime will pass the callback to the thread pool and the thread pool will execute the callback.
    * In case of a non-blocking operation, the node runtime will execute the callback directly.
    

    ? What is the event loop?

    * The event loop is a loop that is responsible for checking the call stack and the callback queue.
    * If the call stack is empty, it will take the first callback from the callback queue and it will push it to the call stack.
    * The event loop will keep on checking the call stack and the callback queue until the call stack is empty.
    
    ? Event Loop - Execution Order  

    * Any callback in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue.
    * Any callback in the timers queue are executed.
    * Callback in the micro task queue if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
    * All callbacks within the I/O queue are executed
    * Callbacks in the micro task queues if present are executed. nextTick queue followed by the promise queue.
    * All callbacks in the check queue are executed.
    * Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
    * All callbacks in the close queue are executed.
    * For one final time in the same loop, the micro task queues are executed. The nextTick queue followed by the promise queue.
    

*/

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate");
// });

// console.log("End");

// ___________________________________________________

// Promise.resolve().then(() => console.log("Promise 1"));
// process.nextTick(() => console.log("Next Tick 1"));
// Promise.resolve().then(() => console.log("Promise 2"));
// process.nextTick(() => console.log("Next Tick 2"));
// ___________________________________________________

console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => {
  console.log("Timeout 2");
  process.nextTick(() => {
    console.log("Next Tick Inside Timeout 2");
  });
}, 0);
setTimeout(() => console.log("Timeout 3"), 0);

process.nextTick(() => console.log("Next Tick 1"));
process.nextTick(() => {
  console.log("Next Tick 2");
  process.nextTick(() => {
    console.log("Next Tick Inside 2");
  });
});
process.nextTick(() => console.log("Next Tick 3"));
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
  console.log("Promise 2");
  process.nextTick(() => {
    console.log("Next Tick Inside Promise 2");
  });
});

console.log("End");
