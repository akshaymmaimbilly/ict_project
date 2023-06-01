const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://akshaymmaimbilly:Akshaymm@cluster0.iyvhtug.mongodb.net/?retryWrites=true&w=majority");

let Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookno: {
      type: Number,
      unique: true,
      required: true,
    },
    bookname: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    
    publicationYear: {
      type: String,
      required: true,
    },
    price:{
      type:Number,
      required:true
    },
    description: String,
   
    // img:{
    //   type:String,
    //   required:true
    // }
  });

  const bookModel = mongoose.model("books", bookSchema);

  module.exports =bookModel;
