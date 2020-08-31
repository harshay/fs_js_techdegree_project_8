
const express = require('express');  

//create express application 
const app = express();

//set up templating engine  
app.set('view engine','pug');

const Book = require('./db/').Book;



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

    const books = await Book.findAll()

    res.render('all_books', {books, title: 'All books'});

})); 



//set up development server
app.listen(3000);