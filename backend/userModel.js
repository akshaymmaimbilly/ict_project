const mongoose = require("mongoose");
const url = "mongodb+srv://akshaymmaimbilly:Akshaymm@cluster0.iyvhtug.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:String,
    email:
    {
      type: String,
      unique:true,
      required:true
    },
    password: 
    {
      type:String,
      required:true
    }, 
    contactInfo:String,
    place:String,
    education:String,
    age:Number
})

const userModel = mongoose.model("UserModel", userSchema);
module.exports=userModel;
