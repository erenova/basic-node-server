const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "public", "index.html"),
        "utf-8",
        (err, data) => {
          if (err) throw err;

          res.writeHead(200, { "content-type": "text/html" });

          res.write(data);
          return res.end();
        },
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "public", "about.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          return res.end();
        },
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "public", "contact.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          return res.end();
        },
      );
    } else {
      fs.readFile(
        path.join(__dirname, "public", "404.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "content-type": "text/html" });
          res.write(data);
          return res.end();
        },
      );
    }
  })
  .listen(8080);
