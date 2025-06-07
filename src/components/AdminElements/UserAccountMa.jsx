/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profileImg from "../../assets/icons/avatar.png";
import { MdEdit, MdShield } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { useUserAuth } from "../../context/UserAuthContext";
const UserAccountMa = () => {
 const {user} = useUserAuth()
  return (
    <UserAccountManageContainer>
      <motion.div
        className="manager-wrapper"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="user-profile-box">
          <div className="edit">
            <MdEdit />
          </div>
          <div className="profile">
            <img src={user.photoURL} alt="" />
          </div>
          <div className="usr-name">
            <h4>{user.displayName}</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="security">
          <div className="edit">
            <MdEdit />
          </div>
          <div className="ico-wrap">
            <MdShield />
          </div>
          <div className="txt">
            <h4>Account Security</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="add">
          <div className="edit">
            <FaUserPlus />
          </div>
          <div className="ico-wrap">
            <FaUserPlus />
          </div>
          <div className="add-cap">
            <h4>Admin & Permission</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
          </div>
        </div>
      </motion.div>
    </UserAccountManageContainer>
  );
};

const UserAccountManageContainer = styled.div`
  width: 20rem;
  height: 90vh;
  position: absolute;
  z-index: 1000;
  right: 0.4rem;
  top: 70px;
  background: none;
  .manager-wrapper {
    background: rgb(245, 245, 245);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.151);
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: hidden;
    .ico-wrap {
      width: 55px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(1, 39, 22, 0.89);
      border-radius: 50px;
      color: #fff;
      font-size: 1.6rem;
    }
    h4 {
      color: rgba(2, 19, 20, 0.795);
    }
    span {
      max-width: 200px;
      font-weight: 400;
      text-align: center;
      color: #111;
    }
    .user-profile-box {
      position: relative;
      width: 100%;
      height: 33%;
      background: rgba(255, 255, 255, 0.678);
      border-radius: 10px;
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      .profile {
        width: 70px;
        aspect-ratio: 1/1;
        background: rgba(252, 252, 252, 0.808);
        border-radius: 50px;
        border-left: 1px solid rgba(22, 219, 203, 0.952);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;
          border-radius: 50px;
        }
      }
      .usr-name {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
    .security {
      width: 100%;
      height: 33%;
      background: rgba(255, 255, 255, 0.675);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      margin: 10px 0;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      .txt {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span {
          max-width: 200px;
          font-weight: 400;
          text-align: center;
          color: #111;
        }
      }
    }
    .add {
      width: 100%;
      height: 30%;
      background: rgba(255, 255, 255, 0.675);
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;
      position: relative;
      .add-cap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`;

export default UserAccountMa;
