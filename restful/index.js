const express  = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override')
const{v4 : uuid} = require("uuid")



let comments = [
    {
        id : uuid(),
        username : "Manoj Tiwari",
        comment : "rinkiya k papa"
    },
    {
        id : uuid(),
        username : "Puneet Superstar",
        comment : "nalle berozgaar"
    },
    {
        id : uuid(),
        username : "Ravi Kishan",
        comment : "lahega utha de"
    },
    {
        id : uuid(),
        username : "arpit bala",
        comment : "hum pr to h hi nahi"
    }

]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'))


app.get('/',(req,res)=>{
    res.send("<h1>Its divs</h1>");
})


// restful routing
//  read --> displaying all the comments

app.get('/comments',(req,res)=>{
    res.render('index',{comments});
})

app.get('/comment/new',(req,res)=>{
    res.render('new');
})


// to actually add the new comment
app.post('/comments',(req,res)=>{
    // console.log(req.body);
    let {username, comment} = req.body;
    comments.push({username,comment,id:uuid()})
    // res.send('post req send');
    res.redirect('/comments')
})


// app.use(express.json())
// app.use(express.urlencoded({extended : true}))






// showing a particular comments

app.get('/comments/:commentID',(req,res)=>{
    // console.log(req.params);
    let{commentID} = req.params;
    let foundComment = comments.find((item)=>{
        return item.id == commentID
     })

     res.render('show',{foundComment})
    
    // res.send('showing particular product');

})







// show the edit form
app.get('/comments/:commentID/edit',(req,res)=>{
    let {commentID} = req.params;
    let foundComment = comments.find((item)=>{
        return item.id == commentID
     })
     res.render('edit',{foundComment});;
})



// to actually edit the comment
app.patch('/comments/:commentID',(req,res)=>{
    let {commentID} = req.params;
    let foundComment = comments.find((item)=>{
        return item.id == commentID
     })
    //  console.log(req.body)
     let {comment} = req.body;
     foundComment.comment = comment;
     res.redirect('/comments');

     res.send('edited successfully')
})



// deleting the comments
app.delete('/comments/:commentID',(req,res)=>{
    let{commentID} = req.params;
    let newArray = comments.filter((item)=>{
        return item.id !=commentID
    });
    comments = newArray;
    res.redirect('/comments');

})


app.listen(8080,()=>{
    console.log("server is connected at port 8080 ");
})