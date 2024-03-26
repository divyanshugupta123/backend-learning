const express = require('express');//func
const app = express();//obj
const mongoose = require('mongoose');//obj

// connect returns me a promise

mongoose.connect('mongodb://127.0.0.1:27017/cheerz')
.then(()=>{console.log("DB connected")})    //resolve
.catch((err)=>{console.log("CONNECTION ERROR",err) })  //reject



// creating schema
let movieSchema = new mongoose.Schema({   // always accepts an object

    name : String,
    year : Number,
    imbd : Number,
    isWatched :Boolean

})


// creating a blog
let Movie = mongoose.model('Movie',movieSchema);
// model name must be start with capital letter and must be singular because it is a JS class in which we follow some convention

let shaktiman = new Movie({
    name:"heyyy",
    year : 2014,
    imbd:9,
    isWatched : false
})
console.log(shaktiman)
// shaktiman.save()
// .then(()=>{
//     console.log("Movie saved successfully");
// })
// .catch((err)=>{
//     console.log("Error while saving movie"),err
// })




app.listen(8080,()=>{
    console.log("server connected at port 8080");
})