const http = require("http");

// create server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World from Node.js");
});

// listen on port
server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});
