import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../comp/navbar/Navbar';
import Sidebar from '../comp/sidebar/Sidebar';
import './userlist.scss';
// import { fontGrid } from '@mui/material/styles/cssUtils';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState('');
  const [editedUser, setEditedUser] = useState({});
  
  // export { users };
  useEffect(() => {
    fetchUsers();
  }, []);
  
  // const userCount = users.length;
  // export { userCount };
  // module.exports = {
  //   userCount
  // };
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
      alert("User Deleted successfully")
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  console.log(users)
  return (
    <div>
      <h1>User List</h1>
      <table>
     
          <tr>
<<<<<<< HEAD

=======
>>>>>>> parent of db46e46 (04.06.2023)
            <th>ID</th>&nbsp;
            <th>Name</th>&nbsp;
            <th>Email</th>&nbsp;
            
            <th>Action</th>&nbsp;
          </tr>&nbsp;
<<<<<<< HEAD
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>PHONENUMBER</th>
            <th>Action</th>
          </tr>

        
=======
        </thead>
>>>>>>> parent of db46e46 (04.06.2023)
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
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 350 },
    { field: 'age', headerName: 'Age', width: 150 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
          {params.row.editing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(params.row)} className='viewButton'>Edit</button>
              <button onClick={() => handleDelete(params.row.id)} className='deleteButton'>Delete</button>
            </>
          )}
        </div>
      ),
    }
  ];
  
  const rows = users.map((user) => ({
    id: user._id,
    name: editingUserId === user._id ? (
      <input
        type="text"
        name="name"
        value={users.username
          || ''}
        onChange={handleInputChange}
      />
    ) : (
      user.username

    ),
    // age: editingUserId === user._id ? (
    //   <input
    //     type="number"
    //     name="age"
    //     value={editedUser.age|| ''}
    //     onChange={handleInputChange}
    //   />
    // ) : (
    //   user.age

    // ),
    email: editingUserId === user._id ? (
      <input
        type="email"
        name="email"
        value={editedUser.email || ''}
        onChange={handleInputChange}
      />
    ) : (
      user.email
    ),
    editing: editingUserId === user._id,
  }));

  return (
   
    <div>
      
      <div className="bars" style={{ display: 'flex' }}>
        <div className="side" style={{ justifyContent: 'space-between' }}>
          <Sidebar />
        </div>
        <div className="content">
          <Navbar />
          <div className="users" style={{padding:'25px'}}>
            <h1 style={{backgroundColor:'#c7eddb', textAlign:'center', height:'50px',fontSize:'35px',color:'#325c49'}}>User List</h1>
            <div className='darking' style={{ height: 400, width: '100%' }}>
              <DataGrid
              
            style={{ fontGrid:'20px',fontSize:'20px'}}
              className="datagrid"
              rows={rows} 
              columns={columns} 
              pageSize={5} 
              checkboxSelection
              ClassName="darker"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export users;
// export { userCount };

export default Userlist;
