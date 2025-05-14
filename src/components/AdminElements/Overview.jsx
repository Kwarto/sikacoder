import React from 'react'
import styled from 'styled-components';
import { FaBookOpen, FaBullhorn, FaUserGraduate } from "react-icons/fa6";
import { MdArrowDropUp } from "react-icons/md";
import courseImg1 from '../../assets/images/thumb/course_thumb01.jpg';
import courseImg2 from '../../assets/images/thumb/course_thumb02.jpg';
const Overview = () => {
  return (
    <DashContainerWrapper>
          <article className="top grid-col-4">
            <div className="top-menu-card">
              <div className="first">
                <div className="ico-wrap">
                  <FaUserGraduate />
                </div>
                <div className="info-wrap">
                  <h4>Registered Interns</h4>
                  <p>Total Interns</p>
                </div>
              </div>
              <div className="mid">
                <h3>
                  <MdArrowDropUp className="drop" /> 500+
                </h3>
                <div className="date">
                  <span>May 20, 2025</span>
                </div>
              </div>
            </div>
            <div className="top-menu-card sec">
              <div className="first">
                <div className="ico-wrap">
                  <FaBookOpen />
                </div>
                <div className="info-wrap">
                  <h4>Courses</h4>
                  <p>Total Courses</p>
                </div>
              </div>
              <div className="mid">
                <h3>
                  <MdArrowDropUp className="drop" /> 500+
                </h3>
                <div className="date">
                  <span>May 20, 2025</span>
                </div>
              </div>
            </div>
            <div className="top-menu-card lbo">
              <div className="first">
                <div className="ico-wrap">
                  <FaBullhorn />
                </div>
                <div className="info-wrap">
                  <h4>Announcement</h4>
                  <p>Total Messages</p>
                </div>
              </div>
              <div className="mid">
                <h3>
                  <MdArrowDropUp className="drop" /> 500+
                </h3>
                <div className="date">
                  <span>May 20, 2025</span>
                </div>
              </div>
            </div>
            <div className="top-menu-card lls">
              <div className="first">
                <div className="ico-wrap">
                  <FaUserGraduate />
                </div>
                <div className="info-wrap">
                  <h4>Blogpost</h4>
                  <p>Total Blogpost</p>
                </div>
              </div>
              <div className="mid">
                <h3>
                  <MdArrowDropUp className="drop" /> 500+
                </h3>
                <div className="date">
                  <span>May 20, 2025</span>
                </div>
              </div>
            </div>
          </article>
          <article className="stat-card-wrapper">
            <div className="stat-card">
              <div className="head">
                <h3>Top Courses</h3>
              </div>
              <div className="course-card">
                <div className="course-banner">
                  <img src={courseImg1} alt="course_id" />
                </div>
                <div className="course-abt">
                  <h3>Complete Web Development </h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quam, eos voluptas excepturi maxime totam.</p>
                <div className="course-sub">
                  <FaUserGraduate />
                  <samp>280</samp>
                </div>
                </div>
              </div>
               <div className="course-card">
                <div className="course-banner">
                  <img src={courseImg2} alt="course_id" />
                </div>
                <div className="course-abt">
                  <h3>Complete Python Programming </h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quam, eos voluptas excepturi maxime totam.</p>
                <div className="course-sub">
                  <FaUserGraduate />
                  <samp>220</samp>
                </div>
                </div>
              </div>
            </div>
            <div className="stat-card"></div>
          </article>
        </DashContainerWrapper>
  )
}

const DashContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 10px;
  .top {
    width: 100%;
    height: 30%;
    .top-menu-card {
      width: 100%;
      height: 160px;
      background: linear-gradient(
        135deg,
        rgba(9, 145, 150, 0.712),
        rgb(17, 31, 36)
      );
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.185);
      border-radius: 10px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      cursor: pointer;
      transition: box-shadow, transform 0.3s ease-in-out;
      .first {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        gap: 1rem;
        .ico-wrap {
          width: 60px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(255, 255, 255);
          border-radius: 0.6rem;
          color: rgb(19, 189, 201);
          font-size: 1.5rem;
        }
        .info-wrap {
          color: #fff;
          h4 {
            margin: 0;
            font-weight: 500;
            font-size: 1.5rem;
          }
          p {
            color: rgb(66, 226, 231);
            font-weight: 400;
          }
        }
      }
      .mid {
        /* padding-left: .2rem; */
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 10px 0;
        h3 {
          color: #fff;
          .drop {
            color: rgb(116, 233, 116);
          }
        }
        .date {
          width: 150px;
          height: 40px;
          background: rgba(0, 0, 0, 0.123);
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-weight: 500;
            font-size: 18px;
            color: #fff;
          }
        }
      }
      &:hover {
        box-shadow: inset 0 1rem 30px rgba(0, 0, 0, 0.185);
        transform: scale(1.01);
      }
    }
    .sec {
      background: linear-gradient(135deg, rgb(221, 58, 85), rgb(27, 62, 75));
      .first {
        .ico-wrap {
          color: red;
        }
      }
    }
    .lbo {
      background-image: linear-gradient(
        135deg,
        rgba(38, 53, 138, 0.986),
        rgb(17, 31, 36)
      );
      .first {
        .ico-wrap {
          color: rgb(47, 47, 107);
        }
      }
    }
    .lls {
      background-image: linear-gradient(
        135deg,
        rgba(38, 138, 91, 0.986),
        rgba(1, 63, 63, 0.966)
      );
      .first {
        .ico-wrap {
          color: rgb(36, 221, 128);
        }
      }
    }
  }
  .stat-card-wrapper{
    display: grid;
    grid-template-columns: 58% 40%;
    place-items: center;
    gap: .8rem;
    height: calc(100% - 30%);
    .stat-card{
      width: 100%;
      height: 80%;
      background: rgb(255, 255, 255);
      border-radius: 1rem;
      box-shadow: 0 1rem 40px rgba(116, 233, 116, 0.041);
      transform: translateY(-2rem);
      padding: 10px;
      overflow: hidden;
      .course-card{
        width: 100%;
        height: 42%;
        background: rgba(8, 8, 8, 0.034);
        border-radius: 10px;
        cursor: pointer;
        margin: 10px 0;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        transition: all 0.3s ease-in-out;
        .course-banner{
          width: 30%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
          }
        }
        .course-abt{
          width: calc(100% - 30%);
          max-width: 400px;
          .course-sub{
            width: 100%;
            font-size: 1.2rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: .6rem;
            color: rgb(7, 107, 107);
          }
        }
        &:hover{
          background: #fff;
          box-shadow: inset 0 1rem 40px rgba(116, 233, 116, 0.041);
        }
      }
    }
  }
`;

export default Overview