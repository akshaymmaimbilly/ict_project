import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
// import './addbook.css';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    bookno: '',
    bookname: '',
    genre: '',
    author: '',
    isbn: '',
    publicationYear: '',
    price: '',
    description: '',
    errors: {
      bookno: '',
      bookname: '',
      genre: '',
      author: '',
      isbn: '',
      publicationYear: '',
      price: '',
      description: '',
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Make the POST request
      axios
        .post('http://localhost:8080/add', bookData)
        .then((response) => {
          console.log(bookData);
          console.log('Data added successfully:', response.data);
          alert('BOOK ADDED SUCCESSFULL.....');
          // Reset the form after successful submission
          setBookData({
            bookno: '',
            bookname: '',
            genre: '',
            author: '',
            isbn: '',
            publicationYear: '',
            price: '',
            description: '',
            errors: {
              bookno: '',
              bookname: '',
              genre: '',
              author: '',
              isbn: '',
              publicationYear: '',
              price: '',
              description: '',
            },
          });
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 500);
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = { ...bookData.errors };

    // Validate bookno field
    if (bookData.bookno.trim() === '') {
      errors.bookno = 'Book No is required';
      valid = false;
    }

    // Validate bookname field
    if (bookData.bookname.trim() === '') {
      errors.bookname = 'Book Name is required';
      valid = false;
    }

    // Validate genre field
    if (bookData.genre.trim() === '') {
      errors.genre = 'Genre is required';
      valid = false;
    }

    // Update the errors state
    setBookData({
      ...bookData,
      errors: errors,
    });

    return valid;
  };

  return (
    <div>
      <Typography variant='h2'>Add New Books...</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Box display='grid' gridColumn={2} gridRow={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='Book No'
                  onChange={handleChange}
                  id='bookno'
                  name='bookno'
                  variant='outlined'
                  error={bookData.errors.bookno !== ''}
                  helperText={bookData.errors.bookno}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='Book Name'
                  onChange={handleChange}
                  id='bookname'
                  name='bookname'
                  variant='outlined'
                  error={bookData.errors.bookname !== ''}
                  helperText={bookData.errors.bookname}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='Genre'
                  onChange={handleChange}
                  id='genre'
                  name='genre'
                  variant='outlined'
                  error={bookData.errors.genre !== ''}
                  helperText={bookData.errors.genre}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='Author'
                  onChange={handleChange}
                  id='author'
                  name='author'
                  variant='outlined'
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='ISBN'
                  onChange={handleChange}
                  id='isbn'
                  name='isbn'
                  variant='outlined'
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='Publication Year'
                  onChange={handleChange}
                  id='publicationYear'
                  name='publicationYear'
                  variant='outlined'
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display='flex' alignItems='center'>
                <TextField
                  label='Price'
                  onChange={handleChange}
                  id='price'
                  name='price'
                  variant='outlined'
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                onChange={handleChange}
                id='description'
                name='description'
                label='Description'
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button type='submit'>ADD BOOK</Button>
        </Box>
      </form>
      
        
     
    </div>
  );
};

export default AddBook;
