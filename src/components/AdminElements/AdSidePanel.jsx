import React from "react";
import styled from "styled-components";
import profileImg from "../../assets/icons/avatar.png";
import { MdSpaceDashboard } from "react-icons/md";
import {
  FaBookOpen,
  FaBullhorn,
  FaNewspaper,
  FaUserGraduate,
} from "react-icons/fa6";
const AdSidePanel = ({activeIndex, setActiveIndex, setShowPost, setIsDrawer}) => {
  
  const menuItems = [
    {
      itemName: "Dashboard",
      itemIcon: <MdSpaceDashboard className="ico" />,
    },
    {
      itemName: "Verified Interns",
      itemIcon: <FaUserGraduate className="ico" />,
    },
    {
      itemName: "Courses",
      itemIcon: <FaBookOpen className="ico" />,
    },
    {
      itemName: "Announcement",
      itemIcon: <FaBullhorn className="ico" />,
    },
    {
      itemName: "Blogpost",
      itemIcon: <FaNewspaper className="ico" />,
    },
  ];
  
  return (
    <AdSidePanelContainerWrapper>
      <div className="welcome">
        <div className="profile">
          <img src={profileImg} alt="profile" />
        </div>
        <h4>Kwarteng Joseph</h4>
        <div className="role">
          <span>Blogger</span>
        </div>
      </div>
      <div className="menu-container">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-link ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              setShowPost(false);
              setIsDrawer(false);
            }}
          >
            {item.itemIcon}
            <li>{item.itemName}</li>
          </div>
        ))}
      </div>
    </AdSidePanelContainerWrapper>
  );
};

const AdSidePanelContainerWrapper = styled.aside`
  width: 15rem;
  height: 100%;
  background: rgb(3, 29, 36);
  box-shadow: 0 1rem 40px rgba(7, 7, 7, 0.795);
  position: absolute;
  left: 0;
  .welcome {
    width: 100%;
    height: 30%;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    .profile {
      width: 80px;
      aspect-ratio: 1/1;
      background-color: rgba(17, 18, 19, 0.322);
      border-radius: 1rem 0 1rem 10px;
      box-shadow: 10px 0 10px rgba(0, 0, 0, 0.075);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 70%;
      }
    }

    h4 {
      color: #fff;
      font-size: 20px;
    }

    .role {
      width: 80px;
      background: rgb(9, 145, 150);
      border-radius: 5px;
      color: #fff;
      padding: 3px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
  .menu-container {
    width: 100%;
    height: calc(100% - 30%);
    background: rgba(82, 81, 81, 0.116);
    border-radius: 0 6rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .menu-link {
      display: inline-flex;
      align-items: center;
      background-color: transparent;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: 90%;
      height: 50px;
      padding: 0 10px;
      margin: 10px 0;
      overflow: hidden;
      transition: all 0.3 ease-in-out;
      .ico {
        font-size: 1.5rem;
        color: rgb(9, 145, 150);
      }
      li {
        font-weight: 500;
        padding: 15px;
        color: rgb(255, 255, 255);
        transform: translateY(0.2rem);
      }
      &:hover {
        background: rgb(3, 29, 36);
      }
    }
    .active {
      display: inline-flex;
      align-items: center;
      background: rgb(9, 145, 150);
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: 90%;
      height: 50px;
      padding: 0 10px;
      margin: 10px 0;
      overflow: hidden;
      .ico {
        font-size: 1.5rem;
        color: rgb(255, 255, 255);
      }
      li {
        font-weight: 500;
        padding: 15px;
        color: rgb(255, 255, 255);
        transform: translateY(0.2rem);
      }
    }
  }
`;

export default AdSidePanel;
