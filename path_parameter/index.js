const express = require('express');
const app = express();



// wrong approach
// app.get('/r/cat',(req,res)=>{
//     console.log("cat");
//     res.send('cat');
// })


// app.get('/r/dog',(req,res)=>{
//     console.log("dog");
//     res.send('dog');
// })


// right approach
app.get('/r/:sbkavariable',(req,res)=>{
    // console.log(req);
    // console.log(req.params);
    let {sbkavariable} = req.params;

    
    res.send(`<h1> hi i am ${sbkavariable}</h1>`)
})

app.listen(8080,()=>{
    console.log("server connected at 8080");
})