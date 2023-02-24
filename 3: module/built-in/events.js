/*
    ? Event Module?
    * The events module is used to handle events in Node.js.
    * The events module is an instance of EventEmitter class.

*/

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size, topping) => {
//   if (size === "large") {
//     console.log(`Serving comlimentary drinks...`);
//   }
// });

const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Pizza order ${size} with ${topping}!`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("small", "mashrooms");
pizzaShop.displayOrderNumber();

// console.log("Do work before order");
// emitter.emit("order-pizza", "large", "mushrooms");
