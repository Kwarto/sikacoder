/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const UserModal = () => {
  return (
    <UserModalWrapper>
      <motion.div
        className="main"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="top">
          <h3>Joey Austen</h3>
          <h4>joyaust@gmail.com</h4>
          <span>Web development</span>
        </div>
        <div className="m-bar">
            <p>Manage Sikacoder Profile</p>
        </div>
        <div className="m-bar">
            <p>My Course</p>
        </div>
        <div className="m-bar">
            <p>Help & Support</p>
        </div>
        <div className="m-bar">
            <p className="out">Sign Out</p>
        </div>
      </motion.div>
    </UserModalWrapper>
  );
};

const UserModalWrapper = styled.article`
  width: 15rem;
  height: 345px;
  border-radius: 10px;
  box-shadow: 0 1rem 30px rgba(11, 221, 204, 0.096);
  position: absolute;
  top: 4.2rem;
  right: 0.3rem;
  z-index: 1500;
  overflow: hidden;
  .main {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 5px;
    .top{
        width: 100%;
        height: 32%;
        background: rgb(255, 255, 255);
        border-radius: .5rem;
        border-bottom: 1px solid teal;
        padding: 5px;
        h4{
            font-size: 20px;
            font-weight: 500;
            color: rgb(6, 22, 24);
        }
        span{
            font-size: 18px;
            font-weight: 500;
            color: rgb(30, 187, 226);
        }
    }
    .m-bar{
        padding: 10px;
        background: rgb(255, 255, 255);
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(1, 20, 19, 0.027);
        margin-top: 5px;
        p{
            font-weight: 600;
            color: rgb(6, 22, 24);
        }
        .out{
            color: red;
        }
    }
  }
`;

export default UserModal;
