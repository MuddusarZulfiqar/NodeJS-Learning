const http = require("node:http");
const fs = require("fs");
const path = require("node:path");
const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  const name = "Muddusar";
  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
  html = html.replace("{{name}}", name);

  // res.writeHead(200, { "Content-Type": "text/plain" });
  // const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
  res.end(html);

  fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
