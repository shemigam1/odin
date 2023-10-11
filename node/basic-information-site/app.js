const http = require("http");
const fs = require("fs");
const path = require("path");

const readFileToBrowser = (filePath, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(data);
  });
};
const server = http.createServer((req, res) => {
  console.log(req.url);
  const filePath = path.join(__dirname, req.url);
  console.log(filePath);
  switch (req.url) {
    case "/":
      readFileToBrowser(path.join(__dirname, "index.html"), res);
      break;
    case "/about":
      readFileToBrowser(path.join(__dirname, "about.html"), res);
      break;
    case "/contact":
      readFileToBrowser(path.join(__dirname, "contact.html"), res);
      break;
    default:
      readFileToBrowser(path.join(__dirname, "404.html"), res);
  }
});

server.listen(3000, () => console.log("server is running on port 3000"));
