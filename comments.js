// Create web server
const http = require("http");
const fs = require("fs");
const path = require("path");

// Create a server
http.createServer((req, res) => {
  // Read the comments.js file
  fs.readFile(path.join(__dirname, "comments.js"), (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data.toString());
    }
  });
}).listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Run the server with this command:
// node comments.js
// Open your browser and go to http://localhost:3000 to see the content of the comments.js file.

// The code above reads the comments.js file and returns its content to the client. 
// You can read any file, such as HTML, CSS, or JavaScript files, and return the content to the client. 
// This is how you can create a simple web server that reads and returns the content of a file. 
// You can also create a web server that writes, updates, and deletes files. 
// The Node.js fs module provides many methods to work with files. 
// You can read the official documentation to learn more about the fs module. 
// In the next sections, you'll learn how to create a more complex web server that handles different routes and requests.