import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AttributionIcon from '@mui/icons-material/Attribution';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
 <div className='sidebar'>
   <div className="top">
          <span className="logo">Admin's Hub</span>
      </div>
      <hr/>
      <div className='center'>
<ul>
    <p className="title" style={{color:'green'}}>Home</p>
    <li>
    <Button onClick={() => window.location.href = "/admin"}>  <DashboardIcon className='icon'/> <span>Dashboard</span></Button>
    </li>
    <p className="title" style={{color:'green'}}>Details</p>

    <li>
    <Button> <LibraryBooksIcon className='icon'/> <span>Books</span></Button>
    </li>
    <li>
    <Button>   <AutoStoriesOutlinedIcon className='icon'/><span>Rented</span></Button>
    </li><li>
    <Button>  <PersonOutlineIcon className='icon'/><span>Users</span></Button>
    </li><li>
    <Button>  <AttributionIcon className='icon'/><span>Authors</span></Button>
    </li>
    <p className="title"style={{color:'green'}}>Set-Up</p>
<li>
      <Button>  <AdminPanelSettingsIcon className='icon'/><span>Admins</span></Button>
    </li>
    <li>
    <Button>   <SettingsSuggestOutlinedIcon className='icon'/><span>settings</span></Button>
    </li>
    <li>
     <Button  onClick={() => window.location.href = "/"}>   <LogoutOutlinedIcon className='icon'/><span>Logout</span></Button>
    </li>
</ul>
      </div>

 </div>
  )
}

export default Sidebar