import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Divider, IconButton, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Bookdetails from './Bookdetails'; // Import the Bookdetails component
import BookPage from './BookPage'; // Import the BookPage component

const Book = () => {
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // Track the selected book

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewbooks');
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
      const response = await axios.post(`http://localhost:8080/books/${bookId}/comments`, { comment });
      console.log('Comment submitted:', response.data);

      fetchBooks();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeClick = async (bookId) => {
    try {
      const response = await axios.post(`http://localhost:8080/books/${bookId}/likes`);
      console.log('Like submitted:', response.data);

      setLikes((prevLikes) => [...prevLikes, bookId]);
    } catch (error) {
      console.log(error);
    }
  };

  const isLiked = (bookId) => {
    return likes.includes(bookId);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {blogs.map((book) => {
          const { _id, bookname, author, genre, comments } = book;
          const likeCount = comments.filter((comment) => comment.likes > 0).length;

          return (
            <motion.div
              key={_id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleBookClick(book)} // Add onClick event to handle book click
              style={{ cursor: 'pointer' }} // Add cursor style for indicating clickability
            >
              <Card sx={{ maxWidth: 345, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.9)' }}>
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
                  onClick={(e) => {
                    e.stopPropagation(); // Stop event propagation to prevent triggering book click event
                    handleLikeClick(_id);
                  }}
                  color={isLiked(_id) ? 'secondary' : 'default'}
                >
                  <FavoriteIcon />
                  <Typography variant="body2">{likeCount}</Typography>
                </IconButton>

                <IconButton aria-label="comment">
                  <CommentIcon />
                  <Typography variant="body2">{comments.length}</Typography>
                </IconButton>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {selectedBook ? (
        <BookPage book={selectedBook} onClose={handleCloseDetails} />
      ) : (
        <Bookdetails />
      )}
    </div>
  );
};

export default Book;
