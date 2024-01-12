const mongoose = require('mongoose')
const books_Schema = new mongoose.Schema({
    bookname: { type: String, required: true },
    image: { type: String, required: true },
    Description:{ type:String, required:true},
    price: { type: Number, required: true },
    Author:{ type:String, required:true}

})
module.exports= new mongoose.model('books',books_Schema)