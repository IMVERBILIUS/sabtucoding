const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is home page</p></body></html>");
    res.end();
  } else if (req.url == "/profile") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is profile page</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is admin page</p></body></html>");
    res.end();
  } else if (req.url == "/haikal") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is haikal page</p></body></html>");
    res.end();
  } else if (req.url == "/ilham") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is ilham page</p></body></html>");
    res.end();
  } else if (req.url == "/internetpositif") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is internet positif page</p></body></html>");
    res.end();
  } else if (req.url == "/santuy") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>zona santuy</p></body></html>");
    res.end();
  } else if (req.url == "/zonanyaman") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>zana nyaman</p></body></html>");
    res.end();
  } else if (req.url == "/rokok") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>this is zona rokok</p></body></html>");
    res.end();
  } else if (req.url == "/friendzone") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<html><body><p>This is zonafriendzone</p></body></html>");
    res.end();
  } else {
    res.writeHead;
    res.end("This Page not Found");
  }
});

console.log(`Server Running in port 3007`);

server.listen(3007);
