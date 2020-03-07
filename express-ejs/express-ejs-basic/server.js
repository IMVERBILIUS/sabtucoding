const express = require("express");
const app = express();
// const port=2020
app.set('view engine', 'ejs')

app.get("/", function (req, res) {
    res.send("Hello world");
});

app.get("/ejs", function (req, res) {
    res.render('pages/index', {
        title: 'ini title saya',
        name: 'Nama saya Haikal',
        kelas: 'Kelas Saya X_RPl',
        sekolah: 'Sekolah saya di JP one'

    });
});

// kalo mau make port 3000 ny di ganti port
app.listen(3000, function () {
    console.log("Server running in port 3000"); // ama ditambahin ${port} pake bactip
});
// ama ditambahin ${port} pake baktip