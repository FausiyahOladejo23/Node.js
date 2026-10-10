
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response content type to HTML
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send the required response
    res.end("<h1>Hello Node!!!!</h1>\n");
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});