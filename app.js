const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});
app.listen(8080);
/* http
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
 */
