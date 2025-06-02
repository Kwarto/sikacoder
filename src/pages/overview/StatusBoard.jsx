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
            impedit. Laudantium temporibus molestiae dolore tempora sunt aliquam
            ab quasi cum aliquid consectetur, doloribus tenetur?
          </p>
          <div className="btn">Read More</div>
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
            <p>{registeredCourse?.description.substring(0, 250)}...</p>
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
    background: rgb(83, 200, 247);
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
  background: linear-gradient(
    135deg,
    rgba(48, 217, 247, 0.137),
    rgba(14, 190, 221, 0.226)
  );
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
  }
  p {
    max-width: 600px;
    padding: 6px;
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
  padding: 4px;
  .course-preview-banner {
    width: 98%;
    height: 40%;
    background: rgba(255, 0, 0, 0.068);
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
    height: calc(100% - 40%);
    .meta-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      gap: 0.5rem;
      .sm-card {
        background: rgba(46, 199, 245, 0.068);
        color: rgb(31, 199, 241);
        font-weight: 600;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(3, 24, 24, 0.021);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        width: max-content;
        padding: 8px 10px;
        span {
          font-weight: 400;
        }
      }
      .status {
      }
    }
    .course-abt {
      h3 {
        color: rgb(105, 215, 240);
      }
      padding: 8px;
    }
    .status-wrap {
      width: 98%;
      height: 120px;
      border-radius: 0.6rem;
      background: linear-gradient(
        135deg,
        rgba(48, 217, 247, 0.137),
        rgba(14, 190, 221, 0.226)
      );
      box-shadow: inset 0 0 10px rgba(48, 217, 247, 0.226);
      padding: 5px;
      transform: translateY(1rem);
      .sm-ico {
        width: 30px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        background: #fff;
        border-radius: 50px;
        color: rgb(65, 207, 243);
        font-size: 1.3rem;
      }
      h4 {
        font-size: 13px;
        padding-top: 8px;
        color: rgb(14, 187, 199);
      }
      p {
        width: 90%;
        font-size: 16px;
      }
    }
  }
`;

export default StatusBoard;
