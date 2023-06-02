const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://akshaymmaimbilly:Akshaymm@cluster0.iyvhtug.mongodb.net/?retryWrites=true&w=majority");

let Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookno: Number,
    bookname: String,
   
    genre: String,
    isbn:String,
   
    
    publicationYear:String,
   
    author: String,
    price:Number,

    description: String,
   
    // img:{
    //   type:String,
    //   required:true
    // }
    comments: [{ text: String, 
      likes: { type: Number, default: 0 } }],
  });
  

  const bookModel = mongoose.model("books", bookSchema);

  module.exports =bookModel;
