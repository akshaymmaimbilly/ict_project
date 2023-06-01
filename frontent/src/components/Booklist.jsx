import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Divider, IconButton, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const BookList = () => {
 
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/viewbooks')
      .then((response) => {
        console.log(response.blog);
        setBlogs(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (bookId) => {
    try {
      const response = await axios.post(`http://localhost:8080//book/${bookId}/comment`, { comment }); // Replace with your backend API endpoint for adding a comment
      console.log('Comment submitted:', response.data);

      // Refresh book list to show the new comment
      fetchBooks();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeClick = async (bookId) => {
    try {
      const response = await axios.post(`http://localhost:8080//book/${bookId}/like`); // Replace with your backend API endpoint for updating likes
      console.log('Like submitted:', response.data);

      // Update the likes state
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {books.map((book) => {
          const { _id, bookname, author, genre, comments } = book;
          const likeCount = comments.filter((comment) => comment.likes > 0).length;

          return (
            <motion.div
              key={_id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
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
                  onClick={() => handleLikeClick(_id)}
                  color={isLiked(_id) ? 'secondary' : 'default'}
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
                    <Button type="submit" variant="contained" color="primary" size="small">
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
  );
};

export default BookList;
