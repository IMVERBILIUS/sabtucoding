const express = require("express");
const app = express();
// const port=2020

app.get("/", function(req, res) {
  res.send("Hello World");
  cd;
});

app.get("/haikal", function(req, res) {
  res.sendFile(`${process.cwd()}/index.html`);
});

app.get("/ilham", function(req, res) {
  res.send("Hello Ilham");
});

app.get("/muih", function(req, res) {
  res.send("Hello Muih");
});

app.get("/kyuu", function(req, res) {
  res.send("Hello sembilan");
});

app.get("/hachi", function(req, res) {
  res.send("Hello delapan");
});

app.get("/nii", function(req, res) {
  res.send("Hello dua");
});

app.get("/san", function(req, res) {
  res.send("Hello tiga");
});

app.get("/ichi", function(req, res) {
  res.send("Hello satu");
});

app.get("/yon", function(req, res) {
  res.send("Hello lima");
});
// kalo mau make port 3000 ny di ganti port
app.listen(3000, function() {
  console.log("Server running in port 3000"); // ama ditambahin ${port} pake bactip
});
// ama ditambahin ${port} pake baktip
