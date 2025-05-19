import React, { useState } from "react";
import styled from "styled-components";
import SignInWith from "../Login/SignInWith";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {auth, db} from '../../../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { CgSpinner } from "react-icons/cg";
const initialState = {
  username: "",
  email: "",
  password: "",
};
const Register = ({ login, setLogin }) => {
  const [showPass, setShowPass] = useState();
  const [form, setForm] = useState(initialState);
  // const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { username, email, password } = form;

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async(e) => {
    e.preventDefault();
      if (username && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${username}` });
        setLoading(true);
        await setDoc(doc(db, 'users', user.uid), {
           username: username,
           emailId: email,
           dateJoined: serverTimestamp(),
        });
      } else {
        return alert('All fields are required!');
      }

    navigate('/overview');
  };
  return (
    <RegisterContainerWrapper>
      <form className="form-container" onSubmit={handleSubmitForm}>
        <h3>Sign Up Sikacoder</h3>
        <div className="input-area">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-area">
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-area">
          <label htmlFor="password">Password</label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="$_sc****"
            value={password}
            onChange={handleOnChange}
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
        <button
          className="btn"
        >
          {loading && <CgSpinner className="spinner" />}
          <span>Sign Up</span>
        </button>
        <SignInWith login={login} setLogin={setLogin} />
      </form>
    </RegisterContainerWrapper>
  );
};
const RegisterContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  .form-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      align-self: flex-start;
      padding: 15px 5px;
    }
    .input-area {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 90px;
      padding: 6px;
      margin: 6px 0;
      position: relative;
      label {
        font-size: 20px;
      }
      input {
        height: 95%;
        width: 70%;
        padding: 0 15px;
        margin-top: 10px;
        border: 1px solid rgb(216, 215, 215);
        border-radius: 8px;
        box-shadow: 0 1rem 5px rgba(0, 0, 0, 0.034);
        font-size: 18px;
      }
      .eye {
        position: absolute;
        top: 2.8rem;
        right: 33%;
        background: transparent;
        width: 30px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .btn {
      align-self: flex-start;
      justify-content: center;
      gap: 1rem;
      margin-left: 8px;

      &:hover {
        background: teal;
      }
      .spinner {
        animation: Spin linear infinite 1s;
        transition: transform 0.3s ease-in-out;
        font-size: 20px;

        @keyframes Spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .login-with {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .hr {
        width: 50px;
        height: 2px;
        background: red;
      }
      h4 {
        transform: translateX(-5rem);
      }
      .ico-wrap {
        width: 60%;
        height: 80px;
        transform: translateX(-4.5rem);
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
          box-shadow: 0 1rem 20px rgba(0, 0, 0, 0.034);
          transition: box-shadow cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
          cursor: pointer;
          &:hover {
            box-shadow: none;
          }
        }
      }
    }
    .do {
      width: 100%;
      transform: translate(11rem, 20px);
      p {
        span {
          color: teal;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 430px) {
    .form-container {
      .input-area {
        height: 110px;
        input {
          width: 98%;
        }
        .eye {
          top: 3.5rem;
          right: 2rem;
        }
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
export default Register;
