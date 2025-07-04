/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdTrophy } from "react-icons/io";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import {
  MdArrowForward,
  MdCheck,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import courseBg from '../../../assets/images/thumb/course_thumb06.jpg'
import { FaAward } from "react-icons/fa6";
const Detail = ({courses, courseId, setShowDetail }) => {
  const [courseDetail, setCourseDetail] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const findCourse = courses.filter((item) => item.id === courseId)[0];
    setCourseDetail(findCourse);
  }, [courseId]);
  console.log(courseDetail);
  return (
    <DetailContainerWrapper>
      <motion.article
        className="detail-wrapper"  
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <article className="short-meta-info-wrapper">
          <div className="top-detail">
            <img src={courseBg} alt={courseDetail?.courseId} />
          </div>
          <div className="st-abt">
            <h1>{courseDetail?.courseName}</h1>
            <p>
              {courseDetail?.description}
            </p>
            <div className="sm-info">
              <h4>{courseDetail?.courseCategory}</h4>
              <h4>{courseDetail?.level}</h4>
              <h4>
                <FaStar className="ico" /> {courseDetail?.rating}{" "}
                <small>(Rating)</small>
              </h4>
            </div>
          </div>
          <div
            className="close"
            onClick={() => {
              setShowDetail(false);
            }}
          >
            <IoMdClose />
          </div>
        </article>
        <article className="long-meta-info-wrapper">
          <div className="who-wrapper">
            <h3>Why enroll this course</h3>
            <ul>
              <li>
                <MdCheck />
                If you want to code through building fun and useful project then
                take this course.
              </li>
              <li>
                <MdCheck /> If you want to start your own startup by building
                your own websites and web apps.
              </li>
              <li>
                <MdCheck /> Are you a seasoned programmer, then take this course
                to get up to speed quickly with the latest technologies.
              </li>
              <li>
                <MdCheck /> Do you want <strong>All In One Course</strong> and
                master everything you need to know about web development enroll
                this course.
              </li>
            </ul>
          </div>
          <div className="what-cover">
            <h3>This Course Include:</h3>
 
               {courseDetail?.resources && courseDetail?.resources.map((res, idx) => (
                  <div key={idx} className="res-s">
                  <FaAward className="ico" />
                  <span>{res}</span>
                </div>
               )) }
          </div>
          <div className="require">
            <h3>Requirements</h3>
            <ul>
              <li>
                <MdCheck />
               {courseDetail.prerequisites}
              </li>
              <li>
                <MdCheck /> {courseDetail.prerequisites}
              </li>
            </ul>
          </div>
          <div className="exe">
            <h3>Coding Exercises</h3>
            <h4>
              This course includes our updated coding exercises so you can
              practice your skills as you learn.
            </h4>
          </div>
          <div className="btn" onClick={() => {navigate(`/internship/${courseId}/enroll`)}}>
            Enroll Now
            <MdArrowForward />
          </div>
        </article>
      </motion.article>
    </DetailContainerWrapper>
  );
};

const DetailContainerWrapper = styled.section`
  .detail-wrapper {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgb(245, 245, 245);
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 40% 60%;
    place-items: center;
    gap: 1rem;
    h1 {
      color: rgb(26, 25, 25);
      font-size: 1.35rem;
    }
    .close {
      position: fixed;
      right: 0.5rem;
      top: 1rem;
      background: red;
      width: 30px;
      aspect-ratio: 1/1;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(255, 255, 255);
      cursor: pointer;
      font-weight: 600;
      font-size: 1.5rem;
      box-shadow: 0 10px 10px rgba(5, 5, 5, 0.062);
      transition: box-shadow cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
      &:hover {
        box-shadow: none;
      }
    }
    .short-meta-info-wrapper {
      width: 100%;
      height: 100%;
      .top-detail {
        width: 100%;
        height: 290px;
        border-radius: 10px;
        box-shadow: 10px 5px rgba(0, 0, 0, 0.034);
        overflow-y: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }
      }
      .st-abt {
        padding: 5px 0;
        p {
          padding: 15px 0;
          max-width: 600px;
          line-height: 1.7;
        }
        .sm-info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          width: 98%;
          h4 {
            color: rgba(17, 37, 37, 0.795);
            cursor: pointer;
            background: rgb(231, 231, 231);
            border-radius: 0.5rem;
            padding: 5px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            .ico {
              color: rgb(250, 183, 12);
            }
          }
        }
      }
    }
    .long-meta-info-wrapper {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 255, 0.021);
      border-radius: 10px;
      padding: 10px;
      .who-wrapper,
      .require {
        ul {
          li {
            list-style: circle;
            font-size: 16px;
            line-height: 1.6;
            padding: px 0;
          }
        }
      }
      .what-cover {
        margin: 12px 0;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
         .res-s{
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: .3rem;
          span{
            font-size: 1rem;
          }
          .ico {
            color: teal;
          }
         }
      }
      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transform: translateY(1.4rem);
        width: 25%;
      }
    }
    @media screen and (max-width: 430px) {
      grid-template-columns: 100%;
      border-radius: 0 0 30px 30px;
      padding: 10px 5px;
      .close {
        width: 40px;
        font-size: 1.8rem;
        font-weight: 600;
      }
      .detail-wrapper {
        height: max-content;
      }
      .short-meta-info-wrapper {
        height: max-content;
        padding: 0 5px;
        .top-detail {
          overflow-y: hidden;
          height: 250px;
        }
        .st-abt {
          .sm-info {
            flex-wrap: wrap;
            align-items: flex-start;
            h4 {
              width: 45%;
              height: 40px;
            }
          }
        }
      }
      .long-meta-info-wrapper {
        height: max-content;
        .what-cover {
          .cover-ls {
            .ls-box {
              transform: translateX(-0.1rem);
              width: max-content;
            }
          }
        }
        .btn {
          transform: translateY(0.5rem);
        }
      }
    }
  }
`;
export default Detail;
