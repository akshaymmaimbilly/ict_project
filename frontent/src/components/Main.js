import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import "./book.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/viewbooks");
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (bookId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/books/${bookId}/comments`,
        { comment }
      );
      console.log("Comment submitted:", response.data);

      fetchBooks();
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeClick = async (bookId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/books/${bookId}/likes`
      );
      console.log("Like submitted:", response.data);

      setLikes((prevLikes) => [...prevLikes, bookId]);
    } catch (error) {
      console.log(error);
    }
  };

  const isLiked = (bookId) => {
    return likes.includes(bookId);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="./images/logo.png"
            style={{ width: "200px", height: "50px" }}
            alt="Logo"
          />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Button onClick={() => window.location.href = "/addbooks"}><a href="#">Home</a></Button>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => window.location.href = "/login"}>logout</a>
          </li>
          <li className="nav-item">
            <a href="#" className="last">
              logout
            </a>
          </li>
        </ul>
      </nav>

      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {blogs.map((book) => {
            const { _id, bookname, author, genre, comments } = book;
            const likeCount = comments.filter((comment) => comment.likes > 0)
              .length;

            return (
              <motion.div
                key={_id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card style={{margin:'50px'}}
                  sx={{
                    maxWidth: 345,
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.9)",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {bookname}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {genre}
                    </Typography>
                  </CardContent>
                  <Divider />

                  <IconButton
                    aria-label="like"
                    onClick={() => handleLikeClick(_id)}
                    color={isLiked(_id) ? "secondary" : "default"}
                  >
                    <FavoriteIcon />
                    <Typography variant="body2">{likeCount}</Typography>
                  </IconButton>

                  <IconButton aria-label="comment">
                    <CommentIcon />
                    <Typography variant="body2">{comments.length}</Typography>
                  </IconButton>

                  <Box p={2}>
                    <Typography variant="subtitle1">Comments:</Typography>
                    {comments.map((comment) => (
                      <Typography key={comment._id} variant="body2">
                        {comment.text}
                      </Typography>
                    ))}
                    <form onSubmit={() => handleCommentSubmit(_id)}>
                      <TextField
                        label="Add a comment"
                        variant="outlined"
                        size="small"
                        value={comment}
                        onChange={handleCommentChange}
                        fullWidth
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="small"
                      >
                        Submit
                      </Button>
                    </form>
                  </Box>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* <img src="./images/bg2.png" alt="" /> */}

      {/* <div className="container">Corrected code goes here</div> */}
    </div>
  );
};

export default Main;
