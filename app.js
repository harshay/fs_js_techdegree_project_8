
const express = require('express');  

//create express application 
const app = express();

//set up templating engine  
app.set('view engine','pug');

const Book = require('./db/').models.Book;



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
app.get('/',asyncHandler(async(req,res) => {

    const books = await Book.findAll();

    res.render('all_books', {books, title: 'All books'});

})); 

//localhost:3000/new_book
// new book entry
app.get('/new_book',asyncHandler(async(req,res) => {
        res.render('new_book',{ book: {}, title : 'New Book'});
})); 


//set up development server
app.listen(3000);