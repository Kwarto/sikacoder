import React, { useState } from "react";
import styled from "styled-components";
import SignInWith from "./SignInWith";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
const initialState = {
  email: "",
  password: "",
};

const Login = ({ login, setLogin }) => {
  const [showPass, setShowPass] = useState();
  const [form, setForm] = useState(initialState);
  const { email, password } = form;
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if(email && password){
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      console.log(user)
    }else{
      console.log('Something went wrong');
    }
    navigate('/')
  };
  return (
    <LoginContainerWrapper>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <div className="head">
         <h1>Account Login</h1>
         <p>Code the future with confidence</p>
        </div>
        <div className="input-area">
          <label htmlFor="username">Enter valid email address</label>
          <input
            type="email"
            name='email'
            id="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={handleOnChange}
            autoComplete="email"
          />
        </div>
        <div className="input-area">
          <label htmlFor="password">Password</label>
          <input
            type={showPass ? "text" : "password"}
            name='password'
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            autoComplete="current-password"
          />
          <div
            className="eye"
            onClick={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? <FaEyeSlash /> : <IoMdEye />}
          </div>
        </div>
        <div className="forget">
          <span>Forgot Password?</span>
        </div>
        <button
          className="btn"
        >
          <span>Login</span>
        </button>
        <SignInWith setLogin={setLogin} login={login} />
      </form>
    </LoginContainerWrapper>
  );
};

const LoginContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-container {
    width: 600px;
    height: 93%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(255, 255, 255);
    border-radius: 1rem;
    .head{
      text-align: center;
      h1 {
        color: rgb(12, 111, 124);
        font-size: 1.8rem;
        padding: 5px 5px;
      }
      p{
        font-size: 1.3rem;
        font-weight: 400;
        color: rgba(47, 65, 80, 0.938);
      }
    }
    .input-area {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100px;
      padding: 6px;
      margin: 6px 0;
      position: relative;
      label {
        overflow-y: hidden;
        color: rgba(47, 65, 80, 0.938);
        font-size: 16px;
        font-weight: 400;
         display: flex;
         align-self: center;
         width: 70%;
      }
      input {
        height: 70%;
        width: 70%;
        padding: 0 15px;
        margin-top: 10px;
        border: 1px solid rgb(216, 215, 215);
        border-radius: 8px;
        box-shadow: inset 0 1rem 20px rgba(85, 61, 189, 0);
      }
      .eye {
        position: absolute;
        top: 3.5rem;
        right: 18%;
        background: transparent;
        width: 30px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: rgba(47, 65, 80, 0.938);
      }
    }
    .forget {
      width: 68%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      text-decoration: underline;
      color: teal;
      font-weight: 500;
    }
    .btn {
      align-self: flex-start;
      margin-left: 8px;
      transform: translate(5.4rem, -1.4rem);
      &:hover {
        background: teal;
      }
    }
    .login-with {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 6px 0;
      h4{
        font-size: 1.2rem;
        color: rgba(47, 65, 80, 0.938);
      }
  
      .ico-wrap {
        width: 60%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 10px 0;
        .ico-b {
          width: 60px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50px;
          border: 1px solid rgba(0, 0, 0, 0.034);
          box-shadow: inset 0 1rem 20px rgba(0, 0, 0, 0.034);
          transition: box-shadow ease-in-out 0.3s;
          cursor: pointer;
          &:hover {
            box-shadow: none;
          }
        }
      }
    }
    .do {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: rgba(47, 65, 80, 0.938);
        font-weight: 400;
        span {
          color: teal;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 430px) {
    .form-container {
      height: 70%;
      .input-area {
        input,label {
          width: 95%;
        }
        .eye {
          right: 2rem;
        }
      }
      .forget {
        width: 85%;
      }
      .btn{
        transform: translate(.7rem, -1.4rem);
      }
      .login-with {
        padding: 30px 0;
        h4,
        .ico-wrap {
          transform: translate(0);
        }
      }
      .do {
        transform: translate(0);
        text-align: center;
      }
    }
  }
`;

export default Login;
