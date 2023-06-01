

import React, { useState ,useEffect } from 'react';

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
    <div>


    
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book No:</label>
        <input
          type="text"
          name="bookno"
          value={bookData.bookno}
          onChange={handleChange}
        />

        <label>Book Name:</label>
        <input
          type="text"
          name="bookname"
          value={bookData.bookname}
          onChange={handleChange}
        />

        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={bookData.genre}
          onChange={handleChange}
        />

        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
        />

        <label>ISBN:</label>
        <input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleChange}
        />

        <label>Publication Year:</label>
        <input
          type="text"
          name="publicationYear"
          value={bookData.publicationYear}
          onChange={handleChange}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={bookData.price}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={bookData.description}
          onChange={handleChange}
        ></textarea>

        {/* <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={bookData.image}
          onChange={handleChange}
        /> */}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Bookform;
