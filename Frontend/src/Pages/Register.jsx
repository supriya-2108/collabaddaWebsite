import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Styles/Buttons";
import axios from "axios";
import { GlobalContext } from "../context/userContext";
const Register = () => {
  const navigate = useNavigate();
  const { set_userName } = GlobalContext();
  const [validationErrors, setValidationErrors] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });
  const [RegisterPage, setRegisterPage] = useState({
    username: "",
    password: "",
    email: "",
    number: "",
  });
  const UpdateValue = (e) => {
    const { name, value } = e.target;
    setRegisterPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "username":
        errorMessage =
          value.length < 5 ? "Username must be at least 5 characters" : "";
        break;
      case "email":
        errorMessage = !isValidEmail(value)
          ? "Invalid email address must ends with @gmail.com"
          : "";
        break;
      case "number":
        errorMessage = !isValidNumber(value)
          ? "Invalid number, must be 10 digits"
          : "";
        break;
      case "password":
        errorMessage = !validatePassword(value)
          ? `Password must include atleast 1 uppercase,<br>1 lowercase,1 digit, and 1 special character`
          : "";
        break;
      // Add more cases for other input validations if needed
      default:
        break;
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const isValidEmail = (email) => {
    // You can use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };
  const isValidNumber = (number) => {
    const numberRegex = /^\d{10}$/;
    return numberRegex.test(number);
  };
  const validatePassword = (password) => {
    const passwordRegex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@_$!%*?&#])[A-Za-z\d@_$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };
  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_LINK}/register`,
        RegisterPage
      );
      set_userName(RegisterPage.username);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setRegisterPage({
      username: "",
      password: "",
      email: "",
      number: "",
    });
  };
  return (
    <Wrapper>
      <h1>Register</h1>
      <form onSubmit={SubmitForm}>
        <div style={{ height: "8rem" }}>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            style={{ textTransform: "none" }}
            value={RegisterPage.username}
            onChange={UpdateValue}
          />
          <InputContainer>
            {validationErrors.username && (
              <ValidationError>{validationErrors.username}</ValidationError>
            )}
          </InputContainer>
        </div>
        <div style={{ height: "8rem" }}>
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            placeholder="email Id"
            style={{ textTransform: "none" }}
            value={RegisterPage.email}
            onChange={UpdateValue}
          />
          <InputContainer>
            {validationErrors.email && (
              <ValidationError>{validationErrors.email}</ValidationError>
            )}
          </InputContainer>
        </div>
        <div style={{ height: "8rem" }}>
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            style={{ textTransform: "none" }}
            value={RegisterPage.password}
            onChange={UpdateValue}
          />
          <InputContainer>
            {validationErrors.password && (
              <ValidationError dangerouslySetInnerHTML={{ __html: validationErrors.password }}
              />
            )}
          </InputContainer>
        </div>
        <div style={{ height: "8rem" }}>
          <label>Number</label>
          <input
            type="text"
            name="number"
            placeholder="Mobile Number"
            style={{ textTransform: "none" }}
            value={RegisterPage.number}
            onChange={UpdateValue}
          />
          <InputContainer>
            {validationErrors.number && (
              <ValidationError >{validationErrors.number}</ValidationError>
            )}
          </InputContainer>
        </div>
        <Button type="submit">Register</Button>
      </form>
      <p>
        If already registered{" "}
        <Link to="/login">
          <span>Login</span>
        </Link>
      </p>
    </Wrapper>
  );
};
const InputContainer = styled.div``;

const ValidationError = styled.span`
  color: red;
  text-align: center;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size: 0.8rem;
  margin: -0.5rem 0 0 6.5rem;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 105vh;
  h1,
  p {
    text-transform: uppercase;
  }

  form {
    padding: 2rem;
    label {
      display: inline-block;
      width: 120px;
      text-align: right;
      padding: 1rem;
      text-transform: uppercase;
    }
    input {
      margin: 1rem;
      // padding:1rem;
    }
    button {
      display: flex;
      width: 8rem;
      text-align: center;
      justify-content: center;
      padding: 0.7rem;
      margin: auto;
    }
  }
  span {
    color: red;
  }
`;
export default Register;
