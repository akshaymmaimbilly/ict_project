import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState('');
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewusers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setEditedUser(user);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/users/${editingUserId}`, editedUser);
      setEditingUserId('');
      setEditedUser({});
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleCancel = () => {
    setEditingUserId('');
    setEditedUser({});
  };

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  console.log(users)
  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>&nbsp;
            <th>Name</th>&nbsp;
            <th>Email</th>&nbsp;
            
            <th>Action</th>&nbsp;
          </tr>&nbsp;
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>&nbsp;
              <td>
                {editingUserId === user._id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.username || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>{ user.phonenumber }</td>&nbsp;
              <td>&nbsp;
                {editingUserId === user._id ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </td>&nbsp;
              <td>&nbsp;
                {editingUserId === user._id ? (
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
