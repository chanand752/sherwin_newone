import React, { createContext } from 'react'
import { useState, useContext } from 'react';
// import { Redirect } from 'react-router-dom';
// import BrandQualityNavbar from '../BrandQualityGroup/BrandQualitynavbar';
import axios from 'axios';
import './index.css'




export default function LoginForm() {

  const [data, setData] = useState(null)
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [msg, setMsg] = useState(null)
  const [token, setToken] = useState(null);
  const [user,setUser] = useState('');
  

 
// console.log(token)
// console.log(user)
// console.log(data)

  function onChangeUsername(event) {
    setEmail(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }


  function loginGenerateToken() {
    setData(null)
    return new Promise((resolve, reject) => {
      const article = { "Email": Email, "Password": Password };
      const headers = {
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
      };
      axios.post('http://172.17.12.141:3500/jwtpostapi/login', article, { headers })
        .then(response => {
          // resolve(true)
          console.log(response.data);
          setUser( response.data.user.Name)
          if (response.data.msg === 'Logged in!') {
            alert("Login Suceess")
            window.location.href = '/Home/brandqualitygroup'
            setData(response.data)
            // setUser(response.data.user.username)
            setUser(sessionStorage.setItem("loggedUser", response.data.user.Name))
            setMsg(response.data.msg)
            setToken(sessionStorage.setItem("jwt_token", response.data.token))
            
            //  return <Redirect to="/Home/brandqualitygroup" />
          }
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Request failed with status code 401") {
            console.log("Username or Password is incorrect!")
            setMsg("Username or Password is incorrect!")
          }
        })
    }); 
    
  }


  const updatePost = (event) => {
    event.preventDefault();
    loginGenerateToken()

  }

  function renderPasswordField() {

    return (
      <>
        <label className="input-label" htmlFor="Password">
          Password
        </label>
        <input
          type="Password"
          id="Password"
          name='Password'
          className="Password-input-field-login"
          value={Password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  function renderUsernameField() {

    return (
      <>
        <label className="input-label" htmlFor="Email">
          USERNAME
        </label>
        <input
          type="text"
          id="Email"
          name='Email'
          className="username-input-field-login"
          value={Email}
          onChange={onChangeUsername}
          placeholder="Enter Your Email"
        />
      </>
    )
  }

  return (
   
    <div className="login-form-container">
      <img
        src=""
        className="login-img"
        alt=""
      />
      <form className="form-container">
        <h1 className='heading'>Login</h1>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>

        <button type="submit" className="login-button" onClick={updatePost}>
          Login
        </button>
        <div>
        </div>
        {msg && <p className="error-message">*{msg}</p>}

      </form>

    </div>


  )

}


