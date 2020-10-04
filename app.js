
const express = require('express');  

//create express application 
const app = express();

//set up templating engine  
app.set('view engine','pug');



//use a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));


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

app.post('/',asyncHandler(async(req,res) => {
    const book = await Book.create(req.body);  
    res.render('new_book'+ book.id);
})); 



//set up development server
app.listen(3000);