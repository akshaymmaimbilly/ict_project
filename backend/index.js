const express = require("express");
const userModel = require("./userModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt")
const app = express();
const session = require("express-session");
const bookModel = require('./bookModel');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json()); // to accept json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: "Akshay",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 24 * 30
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
  const { username, email, password } = req.body;
  console.log(password)

  const doc = new userModel(req.body);
  console.log(req.body)
  try {
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }, { password }],
    });
    if (existingUser) {
      return res.status(409).send("Username or email already exists");

    }
    //const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username: username,
      email: email,
      password: password,
      isUser: false
    });

    await newUser.save();

    res.send("Successfully signed up");
  }



  catch (err) {
    console.log(err);
    res.status(400).send("error occured")
  }

})
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(password)
  if (req.session.user) {

    return res.send("User already exists");

  }
  try {
    const user = await userModel.findOne({ username: username, password: password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    console.log(user)
    //const passwordMatch = await bcrypt.compare(password, user.password);
    if (user.password != password) {
      return res.status(401).send("Incorrect password!");
    }
    if (user.username === "Akshaymm") {
      return res.status(202).send(user);
    }


    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

app.post('/add', async (req, res) => {
  const {
    bookno, bookname, genre, author, isbn, publicationYear, price, description, 
  } = req.body;

  try {
    const newBook = new bookModel({
      bookno,
      bookname,
      genre,
      author,
      isbn,
      publicationYear,
      price,
      description,
      // image,
    });
    await newBook.save();
    res.send('Successfully added');

  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).send('Error adding book');


  }
});
app.get('/viewbooks', async (req, res) => {
  try {
    const books = await bookModel.find();
    return res.json(books);
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).send('Error retrieving books');
  }
});

// Create a new comment for a book
app.post('/books/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.comments.push({ text: comment });
    await book.save();

    res.status(201).json(book.comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new like for a comment
app.post('/books/:id/likes', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const comment = book.comments.id(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    comment.likes += 1;
    await book.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/viewusers", async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});

app.put("/users/:id", async (req, res) => {
  
  const { name, email,phonenumber } = req.body;

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    user.name = name;
    user.email = email;
    user.contactInfo = phonenumber;
    await user.save();

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred");
  }
});


app.listen(8080, () => {
  console.log("Server started");
})