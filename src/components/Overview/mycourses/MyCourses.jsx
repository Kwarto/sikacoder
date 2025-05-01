import React, { useState } from 'react'
import styled from 'styled-components'
import bgImg from '../../../assets/images/side-bg.png'
import { MdLeaderboard, MdLineAxis, MdPlayLesson, MdTimelapse } from 'react-icons/md'
import { IoMdGitNetwork } from 'react-icons/io'
import logoImg from '../../../assets/icons/favicon.png';
import courseImg from '../../../assets/images/thumb/course_thumb02.jpg'
import { FaPlay } from 'react-icons/fa'
import Video from '../dash/Video/Video'
const MyCourses = () => {
  const [isModal, setIsModal] = useState(false)
  return (
    <MyCourseContainerWrapper>
     <div className="main-course">
      <div className="course-sm-info">
        <h3>Learn Next.js</h3>
        <div className="time-level-instructor">
            <div className="author-img">
              <img src={logoImg} alt="" />
            </div>
            <div className="time-span">
              <MdTimelapse />
              <span>2 hrs</span>
            </div>

         <div className="level">
          <MdLeaderboard />
          <span>Intermediate</span>
         </div>
         <div className="community">
          <IoMdGitNetwork />
          <span>Community</span>
         </div>
        </div>
        <div className="caption">
          <p>Learn to build web apps with Next.js world's most popular full-stack framework. You will cover routing, layouts, data fetching, optimizing assets and more, while build EventHub a site for event ticking and booking.</p>
        </div>
        <div className="btn-primary">
          <MdLineAxis/>
          <span>Start Course</span>
        </div>
      </div>
      <div className="topic-content-wrap">
        <div className="head">
        <h3>Content Table</h3>
        <h4>ReadMe</h4>
        </div>
        <div className="topic-card first">
          <div className="course-thumb">
            <img src={courseImg} alt="" />
            <div className="overlay" onClick={() => {setIsModal(!isModal)}}>
              <FaPlay className='play-ico' />
            </div>
          </div>
          <div className="topic-abt">
            <h3>Next.js Introduction</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quam eveniet nostrum repellendus maxime unde.</p>
            <div className="time-span">
              <MdTimelapse />
              <span>3:10</span>
            </div>
            <div className="play" onClick={() => {setIsModal(!isModal)}}>
              <MdPlayLesson />
            </div>
          </div>
        </div>
        <div className="topic-card">
          <div className="course-thumb">
            <img src={courseImg} alt="" />
            <div className="overlay" onClick={() => {setIsModal(!isModal)}}>
              <FaPlay className='play-ico' />
            </div>
          </div>
          <div className="topic-abt">
            <h3>Minimal Next.js Setup</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quam eveniet nostrum repellendus maxime unde.</p>
            <div className="time-span">
              <MdTimelapse />
              <span>3:10</span>
            </div>
            <div className="play" onClick={() => {setIsModal(!isModal)}}>
              <MdPlayLesson />
            </div>
          </div>
        </div>
      </div>
     </div>
     <div className="task-wrapper">

     </div>
     {isModal && <Video setIsModal={setIsModal} />}
    </MyCourseContainerWrapper>
  )
}

const MyCourseContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  background: url(${bgImg});
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 68% 30%;
  place-items: center;
  gap: 1rem;
  overflow: hidden;
  .main-course{
    width: 100%;
    height: 100%;
    background: rgba(247, 245, 245, 0.116);
    backdrop-filter: blur(8px);
    padding: 10px;
    .course-sm-info{
      .time-level-instructor{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 10px 0;
          .author-img{
            width: 30px;
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgb(2, 51, 58);
            border-radius: 10px;
            img{
              width: 65%;
              transform: translateX(-.1rem);
            }
          }
          .time-span, 
          .level,
          .community{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background: #fff;
            border-radius: .5rem;
            box-shadow: 0 10px 10px rgba(247, 245, 245, 0.116);
            color: teal;
            cursor: pointer;
            font-weight: 500;
            width: 20%;
            height:  40px;
          }
      }
      .caption{
        p{
          max-width: 600px;
        }
        padding-bottom: 5px;
      }
      .btn-primary{
        background: rgba(0, 128, 128, 0.089);
        border-radius: .5rem;
        box-shadow: 0 10px 10px rgba(247, 245, 245, 0.116);
        color: teal;
        font-weight: 600;
        cursor: pointer;
        width: 18%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 7px 0;
      }
    }
  }
  .topic-content-wrap{
    width: 100%;
    height: calc(100% - 43%);
    /* background: blue; */
    margin-top: 8px;
    .head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(165deg,rgba(0, 0, 0, 0.548), rgba(15, 202, 202, 0.74));
      backdrop-filter: blur(10px);
      border-radius: 5px;
      padding: 5px 10px;
      position: fixed;
      z-index: 100;
      width: 98%;
      h3{
        color: rgb(3, 32, 41);
      }
      h4{
        background: #fff;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        padding: 5px 15px;
      }
    }
    .first{
      transform: translateY(1.5rem);
    }
    .topic-card{
      width: 98%;
      height: 45%;
      background: rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.034);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      margin: 2rem auto;
      padding:10px;
      overflow: hidden;
      .course-thumb{
        width: 30%;
        height: 98%;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        img{
          width: 100%;
          object-fit: cover;
          border-radius: inherit;
        }
        .overlay{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(2, 61, 58, 0.726);
          box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.034);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          .play-ico{
            border-left: 2px solid red;
            transform: scale(1.05);
            transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
            &:hover{
             transform: scale(1);
            }
          }
        }
      }
      .topic-abt{
        width: calc(100% - 30%);
        position: relative;
        .time-span{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: .5rem;
          font-size: 1.2rem;
          font-weight: 400;
          color: rgb(79, 196, 180);
        }
        .play{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 35px;
          aspect-ratio: 1/1;
          background: rgb(1, 33, 36);
          border-radius: 50px;
          box-shadow: 0 1rem 10px rgba(17, 16, 16, 0.041);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          padding: 8px;
          position: absolute;
          right: 2rem;
          top: 5.5rem;
        }
      }
    }
  }
`

export default MyCourses;