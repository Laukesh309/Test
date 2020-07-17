let express = require("express")
var cookieParser = require('cookie-parser');
let app = express()


app.use(cookieParser())
app.get("/welcome",(req,res)=>{
    res.cookie("userName","laukesh")
    res.send("welcome to express")
})

app.get("/cookies",(req,res)=>{
  console.log("request.cookies",req.cookies)
  
  res.send(req.cookies)
})

app.listen(3001,()=>{
    console.log("sever started at 3000 port")
})

