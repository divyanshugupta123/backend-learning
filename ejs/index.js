const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))

let arr = ['sam','vishal','dev']

app.get('/',(req,res)=>{
    res.render('index',{arr});
})

app.get('/home',(req,res)=>{

    let randomNum = Math.floor(Math.random()*10);

    res.render('home',{randomNum});

})




app.listen(8080,()=>{
    console.log("server is connected at port 8080 ");
})