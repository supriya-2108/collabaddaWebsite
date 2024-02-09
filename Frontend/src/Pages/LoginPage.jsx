import React, { useState } from "react";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "../Styles/Buttons";
import axios from "axios";
import { GlobalContext } from '../context/userContext';
const LoginPage = () => {
    const navigate = useNavigate();
    const {set_userName}=GlobalContext();
  const [loginPage, setLoginPage] = useState({
    username: "",
    password: "",
  });
  const UpdateValue = (e) => {
    const { name, value } = e.target;
    setLoginPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_LINK}/login`,
        loginPage
      );
      const { message } = response.data;
      if (response.status === 200) {
        alert(message);
        set_userName(loginPage.username)
        navigate("/");
      } else {
        console.log("error", message);
      }
    } catch (err) {
      console.log("Error is", err);
    }
    setLoginPage({
      username: "",
      password: "",
    });
    
  };
  return (
    <Wrapper>
      <h1>Login Page</h1>
      <form onSubmit={SubmitForm}>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          style={{ textTransform: "none" }}
          placeholder="username"
          value={loginPage.username}
          onChange={UpdateValue}
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          style={{ textTransform: "none" }}
          placeholder="password"
          value={loginPage.password}
          onChange={UpdateValue}
        />
        <br /><Button type="submit">Login</Button>
      </form>
      <p>
        If not registered{" "}
        <Link to="/register">
          <span>Register</span>
        </Link>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:60vh;
h1,p{
    text-transform:uppercase;
}
h1{
    word-spacing:0.8rem;
}
form{
    padding:2rem;
    label{
            display: inline-block;
            width: 120px;
            text-align: right;
            padding: 1rem;
            text-transform: uppercase;
          }
    }
    input{
        margin:1rem;
        // padding:1rem;
    }
    button{
        display:flex;
        width:8rem;
        text-align:center;
        justify-content:center;
        padding:0.7rem;
        margin:auto;
    }
}
span{
    color:red;
}

`;
export default LoginPage;
