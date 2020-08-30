
const express = require('express');  
const router = express.Router(); 
const Book = require('./db/').Book;


 //console.log('hello');
 //localhost:3000

 //handler function 
 function asyncHandler(cb){ 
    return async(req,res,next) => { 

        try {
            cb(req,res,next)

        } catch(error){ 

            res.status(500).send(error);

        };

    };

 };
 


//all books
//display all books 
router.get('/',asyncHandler(async(req,res) => {

    const books = await Book.findAll()

    res.render('all_books', {books, title: 'All books'});

})); 
