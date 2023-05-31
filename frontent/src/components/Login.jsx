import React from 'react';
import "./login.css";
import  { useEffect, useState } from 'react';
import  logoImg from "./img/logo.png";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';







function Login() {
 const [user, setUser] = useState({})
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        contactInfo:'',
        place:'',
        education:'',
        age:''
    });
    

    const [passwordError, setPasswordError] = useState(false);
   const inputHandler = (e) => {
    setData((data) => ({ ...data,[e.target.name]:e.target.value }));
    console.log(data)
   }
   const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
   
   const signup = () => {
    
    

    let errorMessage = "";

    if (!data.username) {
      errorMessage += "Username is required.\n";
    }
    if (!data.email) {
      errorMessage += "Email is required.\n";
    } else {
      // Email format validation using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errorMessage += "Invalid email format.\n";
      }
    }
    if (!data.password) {
      errorMessage += "Password is required.\n";
    }
    if (!data.contactInfo) {
      errorMessage += "Contact Info is required.\n";
    }
    if (!data.place) {
      errorMessage += "Place is required.\n";
    }
    if (!data.education) {
      errorMessage += "Education is required.\n";
    }

    if (!data.age) {
      errorMessage += "Age is required.\n";
    }
  
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
  
    if (data.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (data.password.length < 8) {
      setPasswordError(true);
      return;
    }
    

    console.log(data)
    axios.post("http://localhost:8080/signup", data)
    .then((res) => {
      alert("Success.....")
    })
    .catch((err) => {
       if (err.response && err.response.status === 409) {
      alert("User already exists");
    } else {
      console.log(err);
      alert("Error occurred");
    }
  });
     }

   function login(){
    console.log(username , password);
    axios.post("http://localhost:8080/login", {username:username, password:password})
    .then((res) => {
      console.log(res.data)
      if(res.status === 200){
        setUser(res.data)
        console.log(user)
        nav("/");
      }
      if(res.status === 202){
        setUser(res.data);
        nav("/admin")
      }
      else{
        nav("/Login")
      }
    })
    .catch((err) => {
      console.log(err)
    })
   }
   
    return (
       
        
      <div className="container">
        <div className="forms-container">
            
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
               
                <i className="fas fa-user"></i>
                <input type="text" name="username"  placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type={showPassword ? 'text' : 'password'}  name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                
              </div>
              
              <input type="button" onClick={login} value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FacebookIcon/>
                </a>
                <a href="#" className="social-icon">
                    <TwitterIcon/>
                </a>
                <a href="#" className="social-icon">
                <GoogleIcon/>
                </a>
                <a href="#" className="social-icon">
                  <LinkedInIcon/>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
               
              <h2 className="title">Sign Up</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-user"></i>
                <input type="text" onChange={inputHandler} value={data.username} name="username" placeholder="Username" />
            </div>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-envelope"></i>
                <input type="email" onChange={inputHandler} value={data.email} name="email" placeholder="Email" />
            </div>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-lock"></i>
                <input onChange={inputHandler} value={ data.age } type="number" name="age" placeholder="Age" />
            </div>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-user"></i>
                <input onChange={inputHandler} value={data.place} type="text" name="place" placeholder="Place" />
            </div>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-envelope"></i>
                <input onChange={inputHandler} type="number" value={data.contactInfo} name="contactInfo" placeholder="Phone no" />
            </div>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-lock"></i>
                <input onChange={inputHandler} value={data.education} type="text" name="education" placeholder="Education" />
            </div>
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-envelope"></i>
                <input onChange={inputHandler} value={data.password} type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" />
                <button onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
            </div>
            
            <div className="input-field" style={{ padding: '10px' }}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" />
            </div>
            {passwordError && (
                <p className="error-message">
                  Password must be at least 8 characters long.
                </p>
              )}
            </div>
            <FormGroup>
                    <FormControlLabel  required control={<Checkbox />} label="Terms and conditions (if book is not returned or damaged fine will be charged)." />
            </FormGroup>

              
              <input type="button" onClick={() => { signup() }} className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                <FacebookIcon/>
                </a>
                <a href="#" className="social-icon">
                 <TwitterIcon/>
                </a>
                <a href="#" className="social-icon">
                  <GoogleIcon/>
                </a>
                <a href="#" className="social-icon">
                 <LinkedInIcon/>
                </a>
              </div>
            </form>
          </div>
        </div>
  
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
             
              <button className="btn transparent" id="sign-up-btn" onClick={() => {
                const container = document.querySelector(".container");
                container.classList.add("sign-up-mode");
                
              }} 
              > 
                Sign up
              </button>
              
            </div>
            <img src={logoImg }className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
             
              <button className="btn transparent" id="sign-in-btn" onClick={() => {
                const container = document.querySelector(".container");
                container.classList.remove("sign-up-mode");
              }} >
                Sign in
              </button>
            </div>
            <img src={logoImg } className="image" alt="" />
          </div>

        </div>
      </div>
    );
  }
  
  export default Login;