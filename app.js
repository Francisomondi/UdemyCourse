const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello Francis");
    res.end();
  }
});

server.listen(3000);

console.log("listening to port 3000");
