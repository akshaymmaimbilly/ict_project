import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = ({ userId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Fetch the user data based on the userId
    axios.get(`http://localhost:8080/users/${userId}`)
      .then(response => {
        const { name, email, contactInfo } = response.data;
        setName(name);
        setEmail(email);
        setPhoneNumber(contactInfo);
      })
      .catch(error => {
        console.error('Error retrieving user:', error);
        // Handle error
      });
  }, [userId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      name: name,
      email: email,
      phonenumber: phoneNumber,
    };

    axios.put(`http://localhost:8080/users/${userId}`, updatedUser)
      .then(response => {
        console.log('User details updated:', response.data);
        // Handle success
      })
      .catch(error => {
        console.error('Error updating user:', error);
        // Handle error
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;
