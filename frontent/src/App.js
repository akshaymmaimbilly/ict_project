import Home from "./components/home/Home";
import "./style/dark.scss";
import M from './components/M';
import Login from './components/Login';
 // eslint-disable-next-line 
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import Bookform from "./components/Bookform";
import Main from "./components/Main";
// import BookList from "./components/Main";
// import Book from "./components/Book";
import AddBook from "./components/AddBook";
import Userlist from "./components/Userlist";
<<<<<<< Updated upstream
import Bookdetails from "./components/Bookdetails";
=======
import Edituser from "./components/Edituser";
>>>>>>> Stashed changes
// import AddBook from "./components/AddBook";


function App() {
   // eslint-disable-next-line 
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app" }>

      
<Router>

       <Routes> 
      <Route path="/" element={<M />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/viewbooks"element={<Main/>}/>
        <Route path="/user"element={<Userlist/>}/>
<<<<<<< Updated upstream
        <Route path="/bookdetails"element={<Bookdetails/>}/>
=======
        <Route path="/edituser"element={<Edituser/>}/>
>>>>>>> Stashed changes
        
        
      </Routes> 
</Router>  
    </div>
  );
}

export default App;
