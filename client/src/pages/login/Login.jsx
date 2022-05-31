import React from 'react';
import { useState } from 'react';
import { login } from '../../redux/apiCalls';
import "../login/Login.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);
 
  const styles = {
      disabled :{
        backgroundColor : isFetching ? "#A1E3D8" : "teal",
        cursor : isFetching ? "not-allowed" : "pointer"
      }
  }

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username, password});
  }


  return (
    <div className="login-container">
        <div className="login-wrapper">
            <h1 className="login-title">SIGN IN</h1>
            <form action="">
                <input type="text" placeholder="user name" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleClick} className="disabled" style={styles.disabled}>LOGIN</button>
                { error && <span>Something Went wrong...</span>}
                <a href="/register"> DON'T YOU REMEMBER THE PASSWORD!</a>
                <a href="/register">CREATE A NEW ACCOUNT</a>
            </form>
        </div>
    </div>
  )
}

export default Login