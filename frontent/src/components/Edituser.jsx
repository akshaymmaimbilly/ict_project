import React, { useState, useEffect } from "react";
import axios from "axios";

const Edituser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users/:id"); // Replace with the correct API endpoint
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(
        `http://localhost:8080/users/${user._id}`,
        {
          username: user.username,
          email: user.email,
          password: user.password
        }
      );
      console.log("User updated:", response.data);
      // Handle success or show a success message to the user
    } catch (error) {
      console.error("Error updating user:", error.response?.data);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edituser;
