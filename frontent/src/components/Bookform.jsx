import { Grid, TextField, InputLabel, Input, Typography, Box, Button } from '@mui/material';
import React from 'react';
// import './addbook.css';

import  { useState ,useEffect } from 'react';

const Bookform = () => {
    const [bookData, setBookData] = useState({
      bookno: '',
      bookname: '',
      genre: '',
      author: '',
      isbn: '',
      publicationYear: '',
      price: '',
      description: '',
      image: '',
    });
  
    const handleChange = (e) => {
      setBookData({ ...bookData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send the bookData to the backend API for saving the book
      // You can use fetch or any other library (e.g., Axios) for making the API call
      // Example API call using fetch:
      fetch('http://localhost:8080/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data); // Success message from the server
          alert('Book added successfully');
          // Reset the form
          setBookData({
            bookno: '',
            bookname: '',
            genre: '',
            author: '',
            isbn: '',
            publicationYear: '',
            price: '',
            description: '',
            image: '',
          });
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error adding book');
        });
    };
    

    useEffect(() => {
      // Fetch book details from the backend API
      fetch('http://localhost:8080/viewbooks') // Update the URL with your API endpoint
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            // Update the bookData state with the fetched data
            setBookData(data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  

  return (
    <div style={{ padding: '100px' }}>
    <Typography variant='h2'>Add New Books...</Typography>
    <br />
    <form onSubmit={handleSubmit}>
      <Box display='grid' gridColumn={2} gridRow={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='book no' value={bookData.bookno}
          onChange={handleChange}variant='outlined' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='book name' value={bookData.bookname}
          onChange={handleChange}variant='outlined' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='genre' value={bookData.genre}
          onChange={handleChange}variant='outlined' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='author'value={bookData.author}
          onChange={handleChange} variant='outlined' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='ISBN' value={bookData.isbn}
          onChange={handleChange}variant='outlined' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='publication year'value={bookData.publicationYear}
          onChange={handleChange} variant='outlined' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              
              <TextField label='price'value={bookData.price}
          onChange={handleChange} variant='outlined' />
            </Box>
          </Grid>
          {/* <Grid item xs={12}>
            <InputLabel>Image</InputLabel>
            <Input type='file' />
          </Grid> */}
          <Grid item xs={12}>
            <TextField variant='outlined'value={bookData.description}
          onChange={handleChange} label='Description' fullWidth multiline rows={4} />
          </Grid>
        </Grid>
        <Button type='submit' variant="contained" size="large">
          ADD BOOK
        </Button>
      </Box>
    </form>
  </div>
);
};


export default Bookform;
