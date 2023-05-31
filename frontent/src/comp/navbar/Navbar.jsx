import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AddCardIcon from '@mui/icons-material/AddCard';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
var [light,setlight] = useState(false);
var [btn,setBtn] = useState(<DarkModeOutlinedIcon/>);

function mode () {
  console.log(light);
console.log("clicked");
  setlight(!light);
 if(light===true){
  console.log("light is true");
  setBtn(< DarkModeOutlinedIcon/>);
 }
 else if(light===false){
  console.log("light is false");
  setBtn(< LightModeOutlinedIcon/>);

 }

}
console.log(light);

  return (
    <div className='navbar'>
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
        <AddCardIcon className='icon'/>
        </div>
        <div className="item">
        <NotificationsNoneOutlinedIcon className='icon'/>
        <div className="counter">1</div>

        </div>
        <div className="item">
        <ChatBubbleOutlineOutlinedIcon className='icon'/>
        <div className="counter">2</div>

        </div>
        <div className="item">
        <ListOutlinedIcon className='icon'/>
        </div>
        <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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