const { log } = require("console");

const express = require ("express");

const path = require ("path")

const app = express ();

app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen (3030, () => {
    console.log("Servidor corriendo en el puerto 3030");
});

app.get ("/", function(req,res){
    res.sendFile(path.join (__dirname, "/views/home.html"))
});

app.get ("/login", function(req,res){
    res.sendFile(path.join (__dirname, "/views/login.html"))
});
app.post("/login", (req,res) => {
    console.log(req.body);
res.redirect("/");
})

app.get ("/register", function(req,res){
    res.sendFile(path.join (__dirname, "/views/register.html"))
});
app.post("/register", (req,res) => {
    console.log(req.body);
res.redirect("/");
})
