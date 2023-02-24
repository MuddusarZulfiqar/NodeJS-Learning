/*
    ? What is Streams?
    * Streams are used to read and write data in chunks.
    
    ? Write any example of Streams?
    * There are 4 types of streams in Node.js
    * 1. Readable
    * 2. Writable
    * 3. Duplex
    * 4. Transform
    
    * We will be using Readable and Writable streams.
     
    * Readable stream is used to read data from a source.
    * Writable stream is used to write data to a destination.
    * Duplex stream is used to read and write data from and to a source.
    * Transform stream is used to modify or transform the data as it is written and read.

*/

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const readAble = fs.createReadStream(path.join(__dirname, "hello1.txt"), {
  encoding: "utf-8",
  highWaterMark: 2,
});

readAble.pipe(gzip).pipe(fs.WriteStream("./file3-txt.gz"));
const writeAble = fs.createWriteStream(path.join(__dirname, "hello.txt"));

// readAble.on("data", (chunk) => {
//   console.log(chunk);
//   writeAble.write(chunk);
// });
