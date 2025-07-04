import React from 'react'
import styled from 'styled-components';
import { FaBookOpen, FaBullhorn, FaUserGraduate } from "react-icons/fa6";
import { MdArrowDropUp } from "react-icons/md";
import courseImg1 from '../../assets/images/thumb/course_thumb01.jpg';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Overview = ({courses, users, blogs, setIsInterns}) => {
  
  return (
    <DashContainerWrapper>
          <article className="top grid-col-4">
            <div className="top-menu-card">
              <div className="first">
                <div className="ico-wrap">
                  <FaUserGraduate />
                </div>
                <div className="info-wrap">
                  <h2>Interns</h2>
                  <p>Total Interns</p>
                </div>
              </div>
              <div className="mid">
                <h4>
                  <MdArrowDropUp className="drop" /> 
                  00{users?.length}+
                </h4>
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
                  <h2>Courses</h2>
                  <p>Total Courses</p>
                </div>
              </div>
              <div className="mid">
                <h4>
                  <MdArrowDropUp className="drop" /> 
                  00{courses?.length}+
                </h4>
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
                  <h2>Notices</h2>
                  <p>Total Messages</p>
                </div>
              </div>
              <div className="mid">
                <h4>
                  <MdArrowDropUp className="drop" /> 500+
                </h4>
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
                  <h2>Blogpost</h2>
                  <p>Total Blogpost</p>
                </div>
              </div>
              <div className="mid">
                <h4>
                  <MdArrowDropUp className="drop" /> 
                  00{blogs?.length}+
                </h4>
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
             {courses && courses?.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-banner">
                  <img src={courseImg1} alt="course_id" />
                </div>
                <div className="course-abt">
                  <h3>{course.courseName.substring(0, 30)}.. </h3>
                  <p>{course.description.substring(0, 105)}..</p>
                <div className="course-sub">
                  <FaUserGraduate />
                  <samp>280</samp>
                </div>
                </div>
              </div>
            ))}
    
            </div>
            <div className="stat-card left">
              <div className="head">
                <h3>New Applicants</h3>
                <span onClick={() => {setIsInterns(true)}}>See All</span>
              </div>
              <div className="new-intern-wrapper">
              {users && users?.map((user) => (
                <div className="new-intern-card" key={user.userId}>
                  <div className="profile">
                    <img src={user.userProfile} alt="user-profile" />
                  </div>
                  <div className="about">
                    <h4>{user.username}</h4>
                    <p>Apply for: <span>{user.domain}</span></p>  
                    <small>May 12, 2025</small>  
                  </div>
                  <div className="contact">
                    <FaEnvelope />
                    <FaPhone />
                  </div>
                </div>
              ))}
              </div>
            </div>
          </article>
        </DashContainerWrapper>
  )
}

const DashContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 75px 10px 0 10px;
  .top {
    width: 100%;
    height: 30%;
    .top-menu-card {
      width: 100%;
      height: max-content;
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: box-shadow, transform 0.3s ease-in-out;
      gap: .6rem;
      padding: 0 8px;
      .first {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        gap: 1rem;
        width: 100%;
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
            font-size: 20px;
          }
          p {
            color: rgb(66, 226, 231);
            font-weight: 400;
            font-size: 1rem;
          }
        }
      }
      .mid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        width: 100%;
        h4 {
          color: #fff;
          .drop {
            color: rgb(116, 233, 116);
          }
        }
        .date {
          width: 130px;
          height: 40px;
          background: rgba(0, 0, 0, 0.123);
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-weight: 400;
            font-size: 16px;
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
    grid-template-columns: 59% 40%;
    place-items: center;
    gap: .5rem;
    height: calc(100% - 30%);
    overflow-y: scroll;
    .stat-card{
      width: 100%;
      height: max-content;
      background: rgb(255, 255, 255);
      border-radius: 1rem;
      box-shadow: 0 1rem 40px rgba(116, 233, 116, 0.041);
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
          h3{font-size: 1.2rem;}
        }
        &:hover{
          background: #fff;
          box-shadow: inset 0 1rem 40px rgba(116, 233, 116, 0.041);
        }
      }
    }
      .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
          font-size: 1rem;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }
        h3{
          font-size: 1.2rem;
        }
      }
      .new-intern-wrapper{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        height: 90%;
        padding-top: 10px;
        .new-intern-card{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: #fff;
          box-shadow: inset 0 1rem 40px rgba(116, 233, 116, 0.041);
          border-radius: 10px;
          cursor: pointer;
          padding: 10px;
          transition: all 0.3s ease-in-out;
          margin: 6px 0;
          overflow: hidden;
          .profile{
            width: 70px;
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(255, 255, 255);
            border-radius: 10px;
            img{
              width: 80%;
              border-radius: inherit;
            }
          }
          .about{
            width: 60%;
            h4{
              font-size: 16px;
              color: rgb(11, 62, 104);
            }
            p{
              font-size: 16px;
              span{
                color: rgb(44, 179, 179);
                font-size: 16p;
              }
            }
            small{
              font-weight: 600;
              color: #111;
            }
          }
          .contact{
            display: flex;
            flex-direction: column;
            font-size: 1.1rem;
            gap: 1rem;
            color: teal;
            cursor: pointer;
          }
          &:hover{
           box-shadow: none;
          }
        }
      }
    
  }

  @media screen and (max-width: 430px) {
    height: max-content;
    padding: 80px 0;
    .top{
        display: inline-flex;
        width: 1600px;
        overflow-x: scroll;
        height: 35%;
        padding: 0 8px;
        .top-menu-card{
          width: 270px;
        }
    }

    .stat-card-wrapper{
        height: max-content;
        grid-template-columns: 100%;
        margin-top: 10px;
        .stat-card{
          .course-card{
            flex-direction: column;
            .course-banner{
              width: 98%;
              height: 180px;
            }
            .course-abt{
              width: 100%;
            }
          }
        }
    }
  }
`;

export default Overview