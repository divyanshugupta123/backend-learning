const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser())

// sending cookies
app.get('/setcookies',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('name','kaccha badam');
    res.cookie('loaction','GLA');
    res.send("cookies set ho gayi");
})


// access all the cookies
app.get('/allcookies',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
})

app.listen(5050,()=>{
    console.log("Server connected at port 5050")
})