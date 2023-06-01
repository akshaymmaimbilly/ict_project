import Home from "./components/home/Home";
import "./style/dark.scss";
import M from './components/M';
import Login from './components/Login';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Bookform from "./components/Bookform";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app" }>

      <Bookform/>
{/* <Router>

      <Routes>
      <Route path="/" element={<M />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Home />} />
        
        
      </Routes>
</Router> */}
    </div>
  );
}

export default App;
