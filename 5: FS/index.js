// const fs = require("node:fs");
// const path = require("node:path");
// --------------------------
// console.log("object");

// const fileContent = fs.readFileSync(path.join(__dirname, "file.txt"), "utf-8");

// console.log("array");
// console.log(fileContent);
// --------------------------

// console.log("First");
// fs.readFile(path.join(__dirname, "file.txt"), "utf-8", (err, data) => {
//   if (err) throw new Error("Error reading file content");
//   console.log(data);
// });

// console.log("end");
// --------------------------

// fs.writeFileSync(path.join(__dirname, "greet.txt"), "Hello, world!", {
//   flag: "a",
// });

// --------------------------

// ! Promise Fs

const fs = require("fs/promises");

fs.readFile("file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
