const express = require('express')
const app = express();
const path = require('path');

let todos = ["go to gym","don't play","sleep now"]


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname,'public')));
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//     res.send('<h1>root route</h1>')
// })



// res.json is also similar to send 
app.get('/todos',(req,res)=>{
    res.json(todos);
})

app.post('/todos',(req,res)=>{
    // console.log(req.body);
    let {todo} = req.body;
    todos.push(todo);
    res.json({msg:"hello ji "})
})

app.listen(8080,()=>{
    console.log("server connected at port 8080");

})

