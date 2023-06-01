import Home from "./components/home/Home";
import "./style/dark.scss";
import M from './components/M';
import Login from './components/Login';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Bookform from "./components/Bookform";
import Main from "./components/Main";
import BookList from "./components/Main";
// import AddBook from "./components/AddBook";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app" }>

      <BookList/>
{/* <Router> */}

      {/* <Routes>
      <Route path="/" element={<M />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/addbooks" element={<Bookform />} />
        <Route path="/books"element={<BookList/>}/>
        
        
      </Routes>
</Router> */}
    </div>
  );
}

export default App;
