/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgImg from "../../assets/images/in_hero_bg.jpg";
import { MdFilter, MdList } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import thumbImg from "../../assets/images/thumb/course_thumb05.jpg";
import { CgSpinner } from "react-icons/cg";
import smImg from "../../assets/images/apply-banner.png";
import {  doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useUserAuth } from "../../context/UserAuthContext";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
const StatusBoard = () => {
  let { id } = useParams();
  const courseId = id;
  const { user } = useUserAuth();
  const [registeredCourse, setRegisteredCourse] = useState(null);
  console.log(registeredCourse,  courseId);
  useEffect(() => {
    courseId && getUserCourse();
  }, [courseId]);

  const getUserCourse = async () => {
    const courseRef = doc(db, 'courses', courseId);
    const snapshot = await getDoc(courseRef);
    if (snapshot.exists()) {
      setRegisteredCourse({ ...snapshot.data() });
    }
  };

  return (
    <StatusBoardContainerWrapper>
      <LeftContainerWrapper>
        <TopBannerContainer>
          <h1>Hey, {user?.displayName}!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            quia, nam ab in, saepe eligendi non ex error consequatur esse
            impedit. Laudantium temporibus molestiae dolore tempora.
          </p>
          <div className="btn"><FaPlay /> Watch Now</div>
          <div className="sm-img">
            <img src={smImg} alt="" />
          </div>
        </TopBannerContainer>
        <div className="course-brief">
          <video src={smImg} controls />
        </div>
      </LeftContainerWrapper>
      <RightContainerWrapper>
        <div className="course-preview-banner">
          <img src={thumbImg} alt="" />
        </div>
        <div className="course-preview-content">
          <div className="meta-data">
            <div className="sm-card">
              <MdList />
              <span>{registeredCourse?.level}</span>
            </div>
            <div className="sm-card">
              <MdFilter />
              <span>{registeredCourse?.courseCategory}</span>
            </div>
            <div className="sm-card status">
              <FaStar />
              <span> {registeredCourse?.rating} Ratings</span>
            </div>
          </div>
          <div className="course-abt">
            <h3>{registeredCourse?.courseName}</h3>
            <p>{registeredCourse?.description.substring(0, 240)}...</p>
          </div>
          <div className="status-wrap">
            <div className="sm-ico">
              <CgSpinner />
            </div>
            <h4>Application Under Review</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quisquam vel corrupti cupiditate sequi veritatis.
            </p>
          </div>
        </div>
      </RightContainerWrapper>
    </StatusBoardContainerWrapper>
  );
};

const StatusBoardContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${bgImg});
  background-size: cover;
  background-position: center;
  padding: 5px;
  display: grid;
  grid-template-columns: 69% 30%;
  place-items: center;
  gap: 1rem;
  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
    height: max-content;
  }
`;
const LeftContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  .course-brief {
    height: 62%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.034);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    overflow-y: hidden;
    video {
      width: 99%;
      height: 98%;
      border-radius: inherit;
    }
    @media screen and (max-width: 430px) {
      height: max-content;
    }
  }
`;
const TopBannerContainer = styled.div`
  background: #fff;
  box-shadow: inset 0 0 10px rgba(48, 217, 247, 0.226);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  height: 35%;
  border-radius: 1rem;
  padding: 10px;
  overflow-y: hidden;
  position: relative;

  h1 {
    font-size: 2rem;
    color: rgb(9, 68, 63);
  }
  p {
    max-width: 500px;
    padding: 6px;
  }
  .btn{
     width: 155px;
     height: 60px;
     gap: 1rem;
     background: rgb(50, 97, 97);
     &:hover{
      background:  rgb(8, 63, 63);
     }
  }
  .sm-img {
    position: absolute;
    top: 3rem;
    right: 0;
    width: 15rem;
    aspect-ratio: 1/1;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 430px) {
    height: max-content;
    .sm-img {
      display: none;
    }

    h1{
      font-size: 1.8rem;
    }
  }
`;
const RightContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.904);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 15px 4px;
  .course-preview-banner {
    width: 98%;
    height: 36%;
    border-radius: 10px;
    overflow-y: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .course-preview-content {
    width: 98%;
    height: calc(100% - 35%);
    .meta-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      gap: 0.5rem;
      .sm-card {
        background: rgba(2, 36, 44, 0.075);
        color: rgb(8, 63, 63);
        font-weight: 400;
        font-size: 14px;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(3, 24, 24, 0.021);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        width: max-content;
        padding: 8px 13px;
        span {
          font-weight: 400;
        }
      }
    }
    .course-abt {
      h3 {
        color: rgb(8, 63, 63);
        font-size: 1rem;
      }
      padding: 8px;
    }
    .status-wrap {
      width: 98%;
      height: 140px;
      border-radius: 0.6rem;
      box-shadow: inset 0 0 10px rgba(48, 217, 247, 0.226);
      padding: 12px;
      transform: translateY(.7rem);
      .sm-ico {
        width: 30px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 0.6rem;
        background: #fff;
        border-radius: 50px;
        color: rgb(23, 60, 70);
        font-size: 1.3rem;
      }
      h4 {
        font-size: 13px;
        padding-top: 8px;
        color: rgb(5, 73, 78);
      }
      p {
        width: 90%;
        font-size: 15px;
      }
    }
  }
`;

export default StatusBoard;
