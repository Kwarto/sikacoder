import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/sc-logo.png";
import layerImg from "../../assets/images/bg_dots.svg";
import corImg from "../../assets/images/end_shape02.svg";
import { RiMenu4Fill } from "react-icons/ri";
import {
  MdDashboard,
  MdNote,
  MdNotifications,
  MdSettings,
  MdTask,
} from "react-icons/md";
const SideBar = ({
  setShowDash,
  setShowCourse,
  setShowNotice,
  setShowTasks,
  setShowSettings,
  showSideBar,
  setShowSideBar
}) => {
  return (
    <SideBarContainer className={showSideBar ? 'active' : ''}>
      <LogoWrap>
        <img src={logoImg} alt="sikacoder-logo" />
      <div className="bars" onClick={() => {setShowSideBar(false)}}>
        <RiMenu4Fill />
     </div>
      </LogoWrap>
      <SideMenuWrapper>
        <div
          className="link"
          onClick={() => {
            setShowDash(true);
            setShowCourse(false);
            setShowNotice(false);
            setShowTasks(false);
            setShowSettings(false);
            setShowSideBar(false);
          }}
        >
          <MdDashboard />
          <span>Dashboard</span>
        </div>
        <div
          className="link"
          onClick={() => {
            setShowDash(false);
            setShowCourse(true);
            setShowNotice(false);
            setShowTasks(false);
            setShowSettings(false);
            setShowSideBar(false);
          }}
        >
          <MdNote />
          <span>My Courses</span>
        </div>
        <div
          className="link"
          onClick={() => {
            setShowDash(false);
            setShowCourse(false);
            setShowNotice(true);
            setShowTasks(false);
            setShowSettings(false);
            setShowSideBar(false);
          }}
        >
          <MdNotifications />
          <span>Messages</span>
        </div>
        <div
          className="link"
          onClick={() => {
            setShowDash(false);
            setShowCourse(false);
            setShowNotice(false);
            setShowTasks(true);
            setShowSettings(false);
            setShowSideBar(false);
          }}
        >
          <MdTask />
          <span>Tasks</span>
        </div>
        <div
          className="link"
          onClick={() => {
            setShowDash(false);
            setShowCourse(false);
            setShowNotice(false);
            setShowTasks(false);
            setShowSettings(true);
            setShowSideBar(false);
          }}
        >
          <MdSettings />
          <span>Settings</span>
        </div>
      </SideMenuWrapper>
      <AdsContainer>
        <div className="cor">
          <img src={corImg} alt="" />
        </div>
      </AdsContainer>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.aside`
  width: 15rem;
  height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(0, 75, 80, 0.945),
      rgba(0, 25, 34, 0.966)
    ),
    url(${layerImg});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  transition: left 0.3s ease-in-out;

  .bars{
    display: none;
  }

  @media screen and (max-width: 912px) {
    background: linear-gradient(
      135deg,
      rgba(1, 41, 44, 0.973),
      rgba(0, 25, 34, 0.966)
    ),
    url(${layerImg});
    position: absolute;
    z-index: 100;
    width: 15rem;
    left: -80rem;
    padding-top: 5px;
  }
   @media screen and (max-width: 430px) {
    background: linear-gradient(
      135deg,
      rgba(1, 41, 44, 0.973),
      rgba(0, 25, 34, 0.966)
    ),
    url(${layerImg});
    position: absolute;
    z-index: 100;
    width: 100%;
    left: -35rem;
    padding-top: 5px;
  }
  `;
const LogoWrap = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  overflow: hidden;
  cursor: pointer;
  img {
    width: 50%;
  }
  @media screen and (max-width: 912px) {
    .bars{
      display: flex;
      font-size: 1.9rem;
      font-weight: 600;
      padding: 10px;
      color: #fff;
      transform: translateY(.3rem);
      cursor: pointer;
    }
  }
`;
const SideMenuWrapper = styled.div`
  width: 98%;
  height: 60vh;
  backdrop-filter: blur(10px);
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .link {
    width: 100%;
    height: 50px;
    background: rgba(0, 128, 128, 0.144);
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 128, 128, 0.116);
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    font-size: 1.5rem;
    color: rgb(250, 90, 90);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    span {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin-top: 3px;
    }
    &:hover {
      background: rgba(1, 27, 27, 0.144);
      box-shadow: none;
    }
  }
  @media screen and (max-width: 430px) {
    .link{
      height: 70px;
      padding-left: 20px;
    }
  }
`;
const AdsContainer = styled.div`
  width: 95%;
  height: 30vh;
  background: rgba(0, 128, 128, 0.144);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(58, 126, 126, 0.116);
  margin: 0 auto;
  transform: translateY(-0.5rem);
  position: relative;
  overflow: hidden;
  .cor {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60%;
    img {
      transform: translateY(0.5rem);
      opacity: 0.4;
    }
  }
`;

export default SideBar;
