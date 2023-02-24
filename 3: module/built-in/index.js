/*
    What is built-in modules?
    * Built-in modules are modules that are provided by Node.js. e.g. fs, http, path, os, events, etc.

*/

const path = require("node:path");

// ? What is path?
// * path is a built-in module that provides utilities for working with file and directory paths.

/*
 * __dirname
 * __filename
 * path.basename() get the last name of the path
 * path.extname() get the extention of file
 * path.parse() get the related info {root:'/',dir:'name',base:'index.js',ext:'.js',name:'index'}
 * path.formate Returns a path string from an object - the opposite of parse().
 * path.isAbsolute Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
 * path.join() Join all arguments together and normalize the resulting path.
 * path.resolve() The right-most parameter is considered {to}. Other parameters are considered an array of {from}.
 */

// console.log(__dirname, __filename);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// -----------------------JOIN---------------------------------
// console.log(path.join("folder1", "folder2", "index.js"));

// console.log(path.join(__dirname, "../local/data.json"));
// ------------------------------------------------------------

// -----------------------Resolve---------------------------------
// console.log(path.resolve("folder1", "folder2", "index.js"));
// console.log(path.resolve("/folder1", "folder2", "index.js"));
// console.log(path.resolve("/folder1", "/folder2", "index.js"));
// console.log(path.resolve("/folder1", "/folder2", "../index.js"));

// console.log(path.resolve(__dirname, "../local/data.json"));
// ------------------------------------------------------------
