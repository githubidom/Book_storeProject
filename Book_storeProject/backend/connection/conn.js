const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://kumarsainiup12:9690731761@cluster0.q138db9.mongodb.net/kumarsainiup12?retryWrites=true&w=majority')
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))

