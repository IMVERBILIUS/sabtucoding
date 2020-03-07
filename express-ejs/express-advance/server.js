const express = require("express");
const port = 3000;

const app = express();

//memagggil css di public
app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("page/index");
});

app.get("/about", function (req, res) {
    res.render("page/about", {
        about: "halaman Tentang",
        content: `whhabsbdkjasfkjbdj,vnkldnfldafnhlkdnvdjbf,jdgbwrjgbskjdbgd,fbsjdgbjsdbgsjdb,sdbj`
    });
});

app.get("/contact", function (req, res) {
    res.render("page/contact", {
        name: "Haikal",
        phoneNumber: "085779449778"
    });
});

app.get("/profile", function (req, res) {
    res.render("page/profile", {
        name: "Haikal",
        kelas: "X-rpl",
        sekolah: "SMK JP 01",
    });
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});