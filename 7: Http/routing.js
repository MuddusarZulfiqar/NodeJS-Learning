const http = require("node:http");

const Server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Its home page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Its about page");
      break;
    case "/api":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ name: "Muddusar", class: "BS" }));
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Page not found");
      break;
  }
});

Server.listen(3001, () => {
  console.log(`Server is listing on http://localhost:3001`);
});
