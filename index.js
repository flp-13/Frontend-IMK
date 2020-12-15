const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("assets"));

app.get("/", (req,res)=>{
    res.render("index", {curPage: "index"});
});

app.get("/berita", (req,res)=>{
    res.render("berita", {curPage: "berita"});
});

app.get("/berita/:id", (req,res)=>{
    res.render("detail-berita", {curPage: "berita"});
});

app.get("/contact", (req,res)=>{
    res.render("contact", {curPage: "contact"});
});

app.get("/galeri", (req,res)=>{
    res.render("galeri", {curPage: "galeri"});
});

app.get("/login", (req,res)=>{
    res.render("login");
});

app.listen(3000, ()=>{
    console.log("app is running");
});