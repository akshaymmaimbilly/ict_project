import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Button } from '@mui/material';

const Sidebar = () => {
  return (
 <div className='sidebar'>
   <div className="top">
          <span className="logos" onClick={() => window.location.href = "/admin"}>Admin's Hub</span>
      </div>
      <hr/>
      <div className='center'>
<ul>
    <p className="titles">Home</p>
    <li>
    <Button onClick={() => window.location.href = "/admin"}>  <DashboardIcon className='icon'/> <span>Dashboard</span></Button>
    </li>
    <p className="titles">Details</p>

    <li>
    <Button onClick={() => window.location.href = "/addbooks"}> <LibraryBooksIcon className='icon'/> <span>Books</span></Button>
    </li>
    <li>
      <Button>  <AutoStoriesOutlinedIcon className='icon'/><span>Rented</span></Button>
    </li><li>
    <Button onClick={() => window.location.href = "/user"}>  <PersonOutlineIcon className='icon'/><span>Users</span></Button>
    </li>
    <p className="titles">Set-Up</p>
<li>
      <Button>  <AdminPanelSettingsIcon className='icon'/><span>Admins</span></Button>
    </li>
    <li>
      <Button>  <SettingsSuggestOutlinedIcon className='icon'/><span>settings</span></Button>
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