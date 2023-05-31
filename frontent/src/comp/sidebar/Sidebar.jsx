import React from 'react'
import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
 <div className='sidebar'>
   <div className="top">
          <span className="logo">Admin's Hub</span>
      </div>
      <hr/>
      <div className='center'>
<ul>
    <p className="title">Home</p>
    <li>
       <DashboardIcon className='icon'/> <span>Dashboard</span>
    </li>
    <p className="title">Details</p>

    <li>
       <LibraryBooksIcon className='icon'/> <span>Books</span>
    </li>
    <li>
        <AutoStoriesOutlinedIcon className='icon'/><span>Rented</span>
    </li><li>
        <PersonOutlineIcon className='icon'/><span>Users</span>
    </li>
    <p className="title">Set-Up</p>
<li>
        <AdminPanelSettingsIcon className='icon'/><span>Admins</span>
    </li>
    <li>
        <SettingsSuggestOutlinedIcon className='icon'/><span>settings</span>
    </li>
    <li>
        <LogoutOutlinedIcon className='icon'/><span>Logout</span>
    </li>
</ul>
      </div>

 </div>
  )
}

export default Sidebar