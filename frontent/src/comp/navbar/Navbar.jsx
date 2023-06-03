import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
var [light,setlight] = useState(false);
var [btn,setBtn] = useState(<DarkModeOutlinedIcon  style={{fontSize: "30px"}}/>);

const [anchorEl, setAnchorEl] = useState(null);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

useEffect(() => {
  const handleWindowClick = (event) => {
    if (anchorEl && !anchorEl.contains(event.target)) {
      handleClose();
    }
  };

  window.addEventListener("click", handleWindowClick);
  return () => {
    window.removeEventListener("click", handleWindowClick);
  };
}, [anchorEl]);
function mode () {
  console.log(light);
console.log("clicked");
  setlight(!light);
 if(light===true){
  console.log("light is true");
  setBtn(< DarkModeOutlinedIcon style={{fontSize: "30px"}}/>);
 }
 else if(light===false){
  console.log("light is false");
  setBtn(< LightModeOutlinedIcon style={{fontSize: "30px"}}/>);

 }

}
console.log(light);

  return (
    <div className='navbars'>
    <div className="wrapper">
      <div className="search">
      <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className='sicon'/>
      </div>
      <div className="items">
        <div className="item">
        <LanguageOutlinedIcon className='icon'/>English
        </div>
        <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
          <div className="icon" onClick={() => mode()}>{btn}  </div>
      </div>
      
        <div className="item">
        <NotificationsNoneOutlinedIcon className='icon'  onClick={handleClick}/>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="dropdown-menu" 
        
      >
                <div className="dropdown-header">Notification</div>

        <MenuItem onClick={handleClose}  className="dropdown-menu-item">Option 12222222222222222223333zdxfgchvjbknlm;,xgfchvjbknlmghbjn32</MenuItem>
        <MenuItem onClick={handleClose}  className="dropdown-menu-item">Option 2</MenuItem>
        <MenuItem onClick={handleClose}  className="dropdown-menu-item">Option 3</MenuItem>
      </Menu>
        <div className="counter">1</div>
        </div>
        

        
        <div className="item">
      <ListOutlinedIcon className="icon" />
     
    </div>
        <div className="item">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
              alt=""
              className="avatar"
            />
          </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar