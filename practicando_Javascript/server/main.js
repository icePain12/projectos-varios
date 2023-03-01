const http = require("http");
const fs = require("fs");
const path = require("path");

const host = '127.0.0.1';
const port = 80;

const requestListener = function (req, res) {
  // Get the file path from the request URL
  let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);

  // Get the file extension
  let extname = path.extname(filePath);

  // Set the content type based on the file extension
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      break;
  }

  // Read the file and return its contents to the client
  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), function (error, content) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
