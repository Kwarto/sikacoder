/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/sc-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useUserAuth } from "../../context/UserAuthContext";
import Modal from "./Modal";

const Navbar = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <NavbarContainerWrapper>
      <LogoWrapper
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logoImg} alt="sikacoder-logo" />
      </LogoWrapper>
      {!mobile && (
        <MenuListContainerWrapper>
          <NavLink className="nav_link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav_link" to={"/about"}>
            About
          </NavLink>
          <NavLink className="nav_link" to={"/services"}>
            Services
          </NavLink>
          <NavLink className="nav_link" to={"/internship"}>
            Courses
          </NavLink>
          <NavLink className="nav_link" to={"/network"}>
            Network
          </NavLink>
          <NavLink className="nav_link" to={"/blog"}>
            Blog
          </NavLink>
          
            {!user && <div
              className="btn"
              onClick={() => {
                navigate("/auth");
              }}
            >
              Get Started
            </div>}
          
           { user && <div className="profile-wrapper" onClick={() => {setShowModal(!showModal)}}>
              <img src={user.photoURL} alt={user.displayName} />
            </div>}
        </MenuListContainerWrapper>
      )}
      {mobile && (
        <motion.div
          className="mobile"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="hamburger"
            onClick={() => {
              setMobile(!mobile);
            }}
          >
            <IoMdClose />
          </div>
          <NavLink className="nav_link" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav_link" to={"/about"}>
            About
          </NavLink>
          <NavLink className="nav_link" to={"/services"}>
            Services
          </NavLink>
          <NavLink className="nav_link" to={"/internship"}>
            Courses
          </NavLink>
          <NavLink className="nav_link" to={"/network"}>
            Network
          </NavLink>
          <NavLink className="nav_link" to={"/blog"}>
            Blog
          </NavLink>
          {!user && <div
            className="btn"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Get Started
          </div>}
        </motion.div>
      )}
      {user && (
        <div className="profile" onClick={() => {setShowModal(!showModal)}}>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
      <div
        className="hamburger"
        onClick={() => {
          setMobile(!mobile);
        }}
      >
        <HiMiniBars3BottomRight />
      </div>
      {showModal && <Modal />}
    </NavbarContainerWrapper>
  );
};

const NavbarContainerWrapper = styled.nav`
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.027);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hamburger {
    margin-right: 1.5rem;
    font-size: 1.5rem;
    display: none;
  }
  .profile {
    display: none;
    cursor: pointer;
  }
  .profile-wrapper {
    width: 50px;
    aspect-ratio: 1/1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    background: rgb(241, 241, 241);
    border-radius: 0.5rem;
    margin-right: 10px;
    img {
      width: 100%;
      border-radius: inherit;
    }
  }

  @media screen and (max-width: 430px) {
    overflow-y: hidden;
    padding: 10px;
    .hamburger {
      display: flex;
      transform: translateX(1rem);
    }
    .profile{
      display: flex;
       width: 40px;
      padding: 1px;
      border-radius: 10px;
      transform: translate(4rem, -0.1rem);
    }
    .profile-wrapper {
      width: 40px;
      padding: 1px;
      border-radius: 8px;
      transform: translate(4rem, -0.1rem);
    }
    .mobile {
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.932);
      position: fixed;
      backdrop-filter: blur(10px);
      z-index: 100;
      top: 0;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      overflow-y: hidden;
      .nav_link {
        width: 100%;
        height: 60px;
        border-radius: 10px;
        color: #000;
        font-size: 1.8rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 0;
        font-weight: 600;
        text-transform: uppercase;
      }
      .profile {
        width: 50px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        background: rgb(241, 241, 241);
        border-radius: 0.5rem;
        margin-right: 10px;
        img {
          width: 100%;
          border-radius: inherit;
        }
      }
      .btn {
        width: 80%;
        height: 65px;
        font-size: 1.5rem;
        border-radius: 50px;
        transform: translateY(3rem);
      }
      .hamburger {
        position: absolute;
        top: 1.5rem;
        right: 0.8rem;
      }
    }
  }
`;
const LogoWrapper = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 160px;
    transform: translateX(-1rem);
  }
  @media screen and (max-width: 430px) {
    width: 40%;
  }
`;
const MenuListContainerWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .nav_link {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(1, 17, 17);
    padding: 0 25px;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: rgb(3, 185, 185);
    }
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

export default Navbar;
