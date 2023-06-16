import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './userlist.scss';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  

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

  

  

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      fetchUsers();
      alert('User Deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  

  

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
             
              <TableCell sx={{fontSize:'25px'}}  >
                username
              </TableCell>
             
              <TableCell sx={{fontSize:'25px'}}>
                Email
              </TableCell>
              
              
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user,index) => {
                return(
                  <TableRow>
                    <TableCell sx={{fontSize:'25px'}}>
                      {user.username}
                    </TableCell>
                   
                    <TableCell sx={{fontSize:'25px'}}>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => {
                        handleDelete(user._id)
                      }}>Delete</IconButton>

                    </TableCell>
                    
                    
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Userlist;
