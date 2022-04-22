import { Component, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



import './index.css'

export default function LoginForm(props) {
  const [data, setData] = useState(null)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [msg, setMsg] = useState(null)
  const [token, setToken] = useState(null)
  function onChangeUsername(event) {
    setEmail(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }


  function loginGenerateToken() {
    setData(null)
    return new Promise((resolve, reject) => {
      const article = { "email": email, "password": password };
      const headers = {
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
      };
      axios.post('http://172.17.12.99:5050/rou/login', article, { headers })
        .then(response => {
          // resolve(true)
          console.log(response.data);

          if (response.data.msg === 'Logged in!') {
            // alert("Login Suceess")
            window.location.href = '/Home/brandqualitygroup'
            setData(response.data)
            setMsg(response.data.msg)
            setToken(sessionStorage.setItem("jwt_token", response.data.token))
            //  return <Redirect to="/Home/brandqualitygroup" />
          }
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Request failed with status code 401") {
            console.log("Username or password is incorrect!")
            setMsg("Username or password is incorrect!")
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
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          name='password'
          className="password-input-field-login"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  function renderUsernameField() {

    return (
      <>
        <label className="input-label" htmlFor="email">
          USERNAME
        </label>
        <input
          type="text"
          id="email"
          name='email'
          className="username-input-field-login"
          value={email}
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


// code
// codejfdg
//;fhshfshfhshfj
//Testing in progressss
//hello
//fdfgdfd