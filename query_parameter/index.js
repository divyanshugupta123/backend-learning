const express = require('express');
const app = express();

app.get('/search',(req,res)=>{
    console.log(req.query);
    let{first,last} = req.query;
    
    res.send(`first name is ${first} and second name is ${last}`);
})


app.listen(8080,()=>{
    console.log("server connected at port 8080");

})