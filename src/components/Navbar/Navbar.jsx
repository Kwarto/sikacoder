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
  const [showModal, setShowModal] = useState(true);
  return (
    <NavbarContainerWrapper>
      <LogoWrapper
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logoImg} alt="sikacoder-logo" />
      </LogoWrapper>
      <NavDivJoinContainer>
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
           <div
              className={!user ? "btn" : "off"}
              onClick={() => {
                navigate("/auth");
              }}
            >
              Get Started
            </div>
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
              setMobile(false);
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
          <div
            className={!user ? "btn" : "off"}
            onClick={() => {
              navigate("/auth");
            }}
          >
            Get Started
            </div>     
        </motion.div>
      )}

      <div className={user ? "profile" : "off"} onClick={() => {setShowModal(true)}}>
             <img src={user?.photoURL} alt={user?.displayName} />
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setMobile(true);
        }}
      >
        <HiMiniBars3BottomRight />
      </div>
      {showModal && <Modal />}
      </NavDivJoinContainer>
    </NavbarContainerWrapper>
  );
};

const NavbarContainerWrapper = styled.nav`
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: inset 0 1rem 40px rgba(255, 255, 255, 0.925);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .hamburger {
    margin-right: 1.5rem;
    font-size: 1.5rem;
    display: none;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 38px;
    aspect-ratio: 1/1;
    border-radius: .5rem;
    background: #f1f1f1;
    box-shadow: inset 0 0 10x rgb(241, 241, 241);
    img{
      width: 90%;
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
      border-radius: 50px;
      transform: translate(5px, 2px);
      img{border-radius: inherit;}
    }
    .mobile {
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.932);
      position: fixed;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(5px);
      z-index: 1000;
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

const NavDivJoinContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: max-content;
 position: absolute;
 right: .2rem;
 overflow-y: hidden;
`
const LogoWrapper = styled.div`
  width: 14%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  img {
    width: 120px;
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
    font-size: 15px;
    font-weight: 700;
    font-family: "Space Grotesk", sans-serif;
    text-transform: uppercase;
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
