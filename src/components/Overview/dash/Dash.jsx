/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import lImg from "../../../assets/images/thumb/course_thumb02.jpg";
import courseImg from '../../../assets/images/thumb/course_thumb05.jpg'
import { motion } from "framer-motion";
const Dash = () => {
  return (
    <DashWrapper>
      <LeftContentContainer>
        <motion.div
          className="top-banner"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Welcome, Austen!</h3>
          <p>
            We're trilled to have you, code the future with confidence -{" "}
            <span>Learn. Build. Intern. Succeed.</span> Begin your teach career,
            dive into the course, start lesson, complete tasks, get certified.
          </p>
          <div className="btn">Start Course</div>
        </motion.div>
        <div className="meta-analytics grid-col-2">
          <motion.div
            className="an-box"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Ongoing Lessons</h3>
            <div className="lesson-card">
              <div className="lesson-img">
                <img src={lImg} alt="" />
              </div>
              <div className="lesson-abt">
                <h4>Introduction to Typography</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, laboriosam?
                </p>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-img">
                <img src={lImg} alt="" />
              </div>
              <div className="lesson-abt">
                <h4>Concept of Color Scheme</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, laboriosam?
                </p>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-img">
                <img src={lImg} alt="" />
              </div>
              <div className="lesson-abt">
                <h4>Visual Hierarchy</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, laboriosam?
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="an-box chat"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Breakdown</h3>
            <div className="circle">
              <motion.div
                className="color-a"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1 }}
              ></motion.div>
              <div className="color-b">
                <div className="color-c"></div>
                <motion.div
                  className="mid"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  100%
                </motion.div>
              </div>
            </div>
            <div className="stat">
              <div className="stat-a">
                <div className="mark"></div>
                <div className="abt">
                  <h4>Lessons</h4>
                  <p>120+</p>
                </div>
              </div>
              <div className="stat-c">
                <div className="mark"></div>
                <div className="abt">
                  <h4>Tasks</h4>
                  <p>090+</p>
                </div>
              </div>
              <div className="stat-b">
                <div className="mark"></div>
                <div className="abt">
                  <h4>Resources</h4>
                  <p>050+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </LeftContentContainer>
      <RightContentContainer>
        <motion.div className="pro-stat-box" 
         initial={{opacity: 0, scale: 0}}
         animate={{opacity: 1, scale: 1}}
         transition={{duration: 1}}
        >
          <h3>Your Progress</h3>
          <div className="done-stat" >
            <div className="thumb">
              <img src={lImg} alt="" />
            </div>
            <div className="abt">
              <span>Art & Design</span>
              <h4>The complete graphic design..</h4>
              <p>3/120 Lessons</p>
            </div>
          </div>
          <div className="done-stat">
            <div className="abt">
              <span>Tasks Completed</span>
              <h4>The complete graphic design..</h4>
              <p>0/90 Tasks</p>
            </div>
            <div className="thumb">
              <img src={lImg} alt="" />
            </div>
          </div>
        </motion.div>
        <div className="related">
          <h3>Related Courses</h3>
          <motion.div className="course-img"
           initial={{opacity: 0, x: -30}}
           animate={{opacity: 1, x: 1}}
           transition={{duration: 1}}
          >
            <img src={courseImg} alt="" />
          <div className="meta-info">
            <h3>Data Analysis & Visualization</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis rem, tempora impedit exercitationem aspernatur!</p>
            <div className="cat-level">
              <div className="detail cat">
                <span>Software Engineering</span>
              </div>
              <div className="detail level">
                <span>Expert</span>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </RightContentContainer>
    </DashWrapper>
  );
};

const DashWrapper = styled.article`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  place-items: center;
  gap: 5px;
  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
    padding: 20px 0;
  }
`;
const LeftContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 5px;
  .top-banner {
    width: 100%;
    height: 200px;
    background: rgb(13, 68, 68);
    border-radius: 1rem;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.048);
    padding: 10px;
    overflow: hidden;
    h3 {
      color: rgb(11, 187, 231);
      font-weight: 600;
      font-size: 1.8rem;
    }
    p {
      max-width: 500px;
      color: #fff;
      span {
        font-weight: 600;
        color: rgba(252, 29, 29, 0.918);
      }
    }
    .btn {
      background: none;
      border: 1px solid rgba(199, 198, 198, 0.24);
      height: max-content;
      padding: 4px 0;
      margin: 5px 0;
      &:hover {
        background: rgba(0, 0, 0, 0.096);
      }
    }
  }
  .meta-analytics {
    width: 100%;
    height: calc(100% - 200px);
    .an-box {
      width: 100%;
      height: 98%;
      border-radius: 1rem;
      box-shadow: 5px 0 10px rgba(0, 0, 0, 0.233);
      padding: 10px;
      position: relative;
      .lesson-card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 0.6rem;
        background: rgba(255, 255, 255, 0.199);
        border: 1px solid rgba(117, 114, 114, 0.048);
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(117, 114, 114, 0.048);
        padding: 5px 3px;
        margin-top: 8px;
        cursor: pointer;
        .lesson-img {
          width: 90px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          margin-left: 2px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .lesson-abt {
          width: 80%;
          h4 {
            color: rgb(8, 148, 241);
            font-weight: 500;
          }
          p {
            font-size: 17px;
            max-width: 200px;
          }
        }
      }
      .circle {
        width: 190px;
        aspect-ratio: 1/1;
        border-radius: 100%;
        box-shadow: 0 0 10pc 10px rgba(0, 0, 0, 0.021);
        display: flex;
        transform: translate(5%, 35%);
        position: relative;
        .color-a,
        .color-b {
          width: 50%;
          height: 100%;
          background: rgba(219, 109, 109, 0.87);
        }
        .color-b {
          background: rgba(255, 217, 0, 0.911);
        }
        .color-c {
          width: 100%;
          height: 55%;
          background: rgba(6, 238, 141, 0.801);
        }
        .mid {
          position: absolute;
          top: 3.8rem;
          left: 3.8rem;
          width: 70px;
          aspect-ratio: 1/1;
          background: #fff;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
      }
      .stat {
        position: absolute;
        right: 2rem;
        top: 6.5rem;
        .stat-a,
        .stat-b,
        .stat-c {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100px;
          margin: 8px 0;
          .mark {
            width: 12px;
            aspect-ratio: 1/1;
            background: rgba(219, 109, 109, 0.87);
            margin-right: 10px;
          }
          h4 {
            font-weight: 500;
            font-size: 20px;
          }
          p {
            opacity: 0.6;
          }
        }
        .stat-b {
          .mark {
            background: rgba(255, 217, 0, 0.911);
          }
        }
        .stat-c {
          .mark {
            background: rgba(6, 238, 141, 0.801);
          }
        }
      }
    }
  }
  @media screen and (max-width: 430px) {
    height: 100vh;
    overflow-y: hidden;
    .meta-analytics{
      padding: 20px 0;
      height: max-content;
      .an-box{
        height: 100%;
        overflow: hidden;
        .circle{
          height: max-content;
          transform: translate(2%, 3%);
        }
        .stat{
          position: absolute;
          top: 1rem;
        }
        .lesson-card{
          height: 100px;
          .lesson-abt{
            h4{
              font-size: 20px;
            }
            p{
              font-size: 20px;
              font-weight: 400;
              max-width: 750px;
            }
          }
        }
      }
      .chat{
        height: 380px;
      }
    }
  }
`;
const RightContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  padding: 0px;
  .pro-stat-box {
    width: 95%;
    height: 45%;
    border-radius: 1rem;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.055);
    margin-right: 8px;
    padding: 10px;
    .done-stat{
      width: 100%;
      height: 85px;
      background: rgba(38, 39, 39, 0.027);
      border-radius: 10px;
      box-shadow: 0 10px 8px rgba(0, 0, 0, 0.014);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: .8rem;
      padding: 0 5px;
      margin: 12px 0;
      transition: box-shadow 0.3s ease-in-out;
      .thumb{
        width: 70px;
        aspect-ratio: 1/1;
        background: rgb(255, 255, 255);
        border-radius: .5rem;
        padding: 2px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: .6rem;
        }
      }
      .abt{
        h4{
          margin: 0;
          line-height: normal;
          font-size: 15px;
          color: rgba(80, 79, 79, 0.966);
        }
        p{
          font-size: 16px;
          font-weight: 500;
          color: green;
        }
        span{
          color: teal;
          font-weight: 600;
        }
      }
      &:hover{
        box-shadow: none;
      }
    }
  }
  .related{
    width: 95%;
    height: 40%;
    border-radius: 10px;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.055);
    cursor: pointer;
    padding: 5px;
    margin-top: 10px;
    .course-img{
     width: 100%;
     height: 80%;
     border-radius: .5rem;
     box-shadow: 0 10px 8px rgba(0, 0, 0, 0.014);
     overflow: hidden;
     position: relative;
     margin-top: 5px;
     transition: all ease-in-out;
     transition-duration: 500ms;
     img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
     }
     &:hover{
       .meta-info{
        opacity: 1;
        visibility: visible;
       }
     }
    }
    .meta-info{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 8, 12, 0.973);
      padding: 10px;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s all ease-in-out;
      h3{
        color: rgb(7, 183, 189);
      }
      p{
        color: #fff;
        font-size: 16px;
        padding: 6px 0;
      }
      .cat-level{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 90%;
        .detail{
          background: rgba(1, 59, 57, 0.11);
          border-radius: 8px;
          width: 50%;
          padding: 5px 12px;
          text-align: center;
          span{
            font-weight: 300;
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 430px) {
    height: 75vh;
    .pro-stat-box{
      height: max-content;
      .done-stat{
        height: 120px;
        justify-content: space-between;
        padding: 8px;
        .thumb{
          width: 120px;
        }
        .abt{
          width: 80%;
          span{
            font-size: 20px;
          }
          h4{
            font-size: 20px;
          }
          p{
            font-size: 20px;
          }
        }
      }
    }
    .related{
      .meta-info{
        overflow: hidden;
        visibility: visible;
        opacity: 1;
        h3{
          font-size: 1.5rem;
        }
        p{
          font-size: 22px;
        }
        .cat-level{
          .detail{
            height: 50px;
            padding: 10px 0;
            span{
              font-size: 20px;
              font-weight: 600;
              color: teal;
            }
          }
        }
      }
    }
  }
`;

export default Dash;
