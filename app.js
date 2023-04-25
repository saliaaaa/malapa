

const express=require ("express");
const bodyparser= require("body-parser");

const date =require(__dirname + "/date.js");

const app=express();
var items =["Buy Food","Cook Food","Eat Food"];
var workitems = [];
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){

   let day =date();

  
    res.render("list", {ListTitle:day,newListItems:items});

});


app.post("/", function(req, res){
    var item= req.body.newItem;

if(req.body.list==="work"){
workitems.push(item);
res.redirect("/work");
}else{
    items.push(item);
    res.redirect("/");
}

});

app.get("/work", function(req,res){
    res.render("list", {ListTitle: "work List", newListItems: workitems });
});



app.get("/about", function(req,res){
    res.render("about");
})

app.post("/work", function(req,res){
    let item = req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
})


app.listen(3000, function(){
    console.log("server is running on port 3000.");
    });
