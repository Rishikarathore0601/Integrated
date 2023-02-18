
const express = require("express")
const app= express()
const path= require("path")
const hbs= require("hbs")
const collection= require("./mongodb")
const bodyparser = require('body-parser');
const { create } = require("hbs");



const templatePath= path.join(__dirname,'../templates/')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.use(bodyparser.urlencoded({
    extended: true
    }));

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/signup",async(req,res)=>{
    const data={
        email:req.body.email,
        phoneNo:req.body.phoneNo,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.render("home")
})

app.post("/login",async(req,res)=>{
     
   try{

    const check=await collection.findOne({email:req.body.email})
    if(check.password==req.body.password){
    res.render("home")
   }
   else{
    res.send("Invalid Password")
   }
}
   catch{
    res.send("Invalid User")
   }
   
   
})

app.post("/home",async(req,res)=>{
    if(onclick(create)){
        res.render("candidateEditAdd")
    }
    
}
)

app.listen(3000,()=>{
    console.log("port connected");
})