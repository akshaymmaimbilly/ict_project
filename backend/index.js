const express = require("express");
const userModel = require("./userModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt")
const app = express();
const session = require("express-session");
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));
app.use(express.json()); // to accept json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session( {
  secret:"Akshay",
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:60*60*24*30
  }
})
);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow session cookies
  next();
});



app.post("/signup", async (req, res) => {
  const { username, email ,password} = req.body;
  
  const doc = new userModel(req.body);
  console.log(req.body)
  try{
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(409).send("Username or email already exists");
  
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.send("Successfully signed up");}
    
  
  
  catch(err){
    console.log(err);
    res.status(400).send("error occured")    
  }
  
})
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (req.session.user){
 
    return res.send("User already exists");
    
  }
  try {
    const user = await userModel.findOne({ username: username });
    if (!user) {
      return res.send("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.send("Incorrect password");
    }
    if (user.username === "Akshaymm") {
      return res.status(202).send(user);
    }
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.send("Error occurred");
  }
});



app.listen(8080, () => {
  console.log("Server started");
})