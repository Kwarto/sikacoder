/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../../../firebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const adminSchema = {
  username: "",
  email: "",
  password: (String.prototype.hashCode = () => {
    let hash = 0,
      i,
      chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }),
};

const Auth = () => {
  const navigate = useNavigate();
  const [adminData, setAdminDate] = useState({ adminSchema });
  const { username, email, password } = adminData;
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const handleChange = (e) => {
    setAdminDate({ ...adminData, [e.target.name]: e.target.value });
  };
  const handleAdminAuth = async (e) => {
    e.preventDefault();
    if(!login){
        if(username && email && password){
            const {user} = await createUserWithEmailAndPassword(auth, email, password);   
            await updateProfile(user, {displayName: `${username}`});
            setLoading(true);
            await setDoc(doc(db, "admins", user.uid), {
               ...adminData,
              dateRegistered: serverTimestamp()
            })
        }else{
            return alert('All fields are required')
        }
    }else{
        if(email && password){
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        }else{
            console.log('Something went wrong');
        }
    }
    navigate('/sc-admin-panel') 
  };
  return (
    <AdminAuthContainerWrapper>
      <form onSubmit={handleAdminAuth}>
        <div className="top">
          <h3>Sign In.</h3>
        </div>
        <div className="input-container">
         { !login && <div className="input-field">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={handleChange}
            />
          </div>}
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Please Enter Email Id"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
          </div>
          <div className="forget">
            <span>Forget Password?</span>
          </div>
          <div className="eula">
            <p>
              <input type="checkbox" name="check" />
              By sign in you agree to sikacoder admin data privacy policy
            </p>
          </div>
          <button className="btn">{loading && <CgSpinner className="spinner"/>} <span>Login</span></button>
        </div>
      </form>
    </AdminAuthContainerWrapper>
  );
};

const AdminAuthContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgb(213, 219, 215), rgb(226, 232, 247));
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 30%;
    height: max-content;
    background: rgba(255, 255, 255, 0.747);
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.158);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 10px;
    .top {
      padding: 10px;
    }

    .input-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .input-field {
        width: 100%;
        height: 70px;
        border: 1px solid #ccc;
        margin: 10px 0;
        background: transparent;
        border-radius: 1rem;
        input {
          width: 100%;
          height: 100%;
          padding: 0 15px;
          border-radius: inherit;
          font-size: 16px;
          font-weight: 500;
          background: transparent;
        }
      }

      .eula {
        width: 100%;
        padding: 10px 6px;
        p {
          display: flex;
          align-items: center;
          max-width: 300px;
          font-size: 16px;
          gap: 1rem;
          input {
            color: teal;
            background: red;
            width: 30px;
            display: none;
          }
        }
      }

      .forget {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        transition: hover 0.3s ease-in-out;
        span {
          cursor: pointer;
          color: teal;
          font-weight: 500;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      .btn {
        display: flex;
        align-self: flex-start;
        justify-content: center;
        gap: 1rem;
        background: teal;

        &:hover {
          background: rgb(8, 196, 196);
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
    }
  }
`;

export default Auth;
