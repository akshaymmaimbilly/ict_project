import { Grid, TextField, InputLabel, Input, Typography, Box } from '@mui/material';
import React from 'react';
import './addbook.css';

const AddBook = () => {
  return (
    <div style={{ padding: '100px' }}>
      <Typography variant='h2'>Add New Books...</Typography>
      <br />
      <form>
        <Box display='grid' gridColumn={2} gridRow={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='name' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='book no' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='genre' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='author' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='ISBN' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='publication year' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                
                <TextField label='price' variant='outlined' />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Image</InputLabel>
              <Input type='file' />
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' label='Description' fullWidth multiline rows={4} />
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;
