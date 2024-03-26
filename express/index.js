const express = require('express') // it will return to a function but we have to use object
const app = express() //object --> entire instance of your application 


// console.log(app)


// this is going to print when we request on our default browser on localhost:8080
app.use((req,res)=>{
    console.log("hellooooo..!! Divyanshu here")
    console.log(req)
    console.log(res);
    // res.send("suniye na")

})


// app.listen() //it keeps the port number ::::: forntend --> 3000 and backend --> 8080

app.listen(8080,()=>{
    console.log("server connected at port 8080");

})
