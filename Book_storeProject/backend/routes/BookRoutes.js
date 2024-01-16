const Router = require('express').Router();
const bookModel = require('../models/books_models');
//post request which upload the  data on database
Router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: "book added Successfully" })
        })
    } catch (error) {
        console.log(error)
    }
})

//Get request which get all the data from the database

Router.get('/getBooks', async (req, res) => {
    try {
        let books = await bookModel.find()
        res.status(200).json(([books]))
    } catch (error) {
        console.log(error);
    }
})
//only a specific book get which have unique id
Router.get('/getbook/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let book = await bookModel.findById(id)
        res.status(200).json((book))
    } catch (error) {
        console.log(error);

    }
})
//update the book information 
Router.put('/updatebook/:id', async (req, res) => {
    const id = req.params.id;
    const {bookname, image,Description,Author,price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
            bookname,
            image,
            Description,
            Author,
            price 
        } );
        book=  await book.save().then(() => res.json({message:"data updated successfully"}))
    } catch (error) {
        console.log(error);
    }
})
// delete book from the list by id 
Router.delete("/deletebook/:id", async (req,res)=>{
 const id=req.params.id;
 try {
    await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"deleted successfully"}))
 } catch (error) {
    console.log(error);
 }
})
module.exports = Router;