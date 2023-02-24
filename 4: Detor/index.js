const buffer = new Buffer.from("Muddusar", "utf-8");

buffer.write("Muddusarzulfiqar", "utf-8");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());
