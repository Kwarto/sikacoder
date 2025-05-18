import React from 'react'
import { FaCode, FaStackOverflow, FaUserGraduate } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { MdArrowDropUp } from 'react-icons/md'
import styled from 'styled-components'
import bannerImg from '../../assets/images/thumb/course_thumb06.jpg'
const Programs = () => {
  return (
    <ProgramsContainerWrapper>
      <SkillLevelContainerWrapper className='grid-col-3'>
        <div className="skill-level-card">
          <div className="level-abt">
            <div className="level-ico">
               <FaStackOverflow />
            </div>
            <div className="level-txt">
              <h3>Beginner Courses</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="level-score">
            <div className="intern-score">
              <h3><MdArrowDropUp />180</h3>
              <h4>Active Interns</h4>
            </div>
            <div className="course-score">
              <h3><MdArrowDropUp />05</h3>
              <h4>Crush Course</h4>
            </div>
          </div>
        </div>
        <div className="skill-level-card mid">
          <div className="level-abt">
            <div className="level-ico">
               <FaCode />
            </div>
            <div className="level-txt">
              <h3>Intermediate Courses</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="level-score">
            <div className="intern-score">
              <h3><MdArrowDropUp />180</h3>
              <h4>Active Interns</h4>
            </div>
            <div className="course-score">
              <h3><MdArrowDropUp />05</h3>
              <h4>Crush Course</h4>
            </div>
          </div>
        </div>
        <div className="skill-level-card last">
          <div className="level-abt">
            <div className="level-ico">
               <FaGears />
            </div>
            <div className="level-txt">
              <h3>Advance Courses</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="level-score">
            <div className="intern-score">
              <h3><MdArrowDropUp />180</h3>
              <h4>Active Interns</h4>
            </div>
            <div className="course-score">
              <h3><MdArrowDropUp />05</h3>
              <h4>Crush Course</h4>
            </div>
          </div>
        </div>
      </SkillLevelContainerWrapper>
      <AllCoursesContainerWrapper className='grid-col-4'>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
        <div className="course-card">
          <div className="banner">
            <img src={bannerImg} alt="" />
          </div>
          <div className="meta-info">
            <h4>Beginners Guide To Become Professional Frontend Developer </h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique..</span>
            <li><FaUserGraduate />250+</li>
          </div>
        </div>
      </AllCoursesContainerWrapper>
    </ProgramsContainerWrapper>
  )
}

const ProgramsContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  padding: 70px 10px 0 10px;
`
const SkillLevelContainerWrapper = styled.div`
 width: 100%;
 height: 30%;
 gap: .5rem;
 .skill-level-card{
   width: 98%;
   height: max-content;
   background-image: linear-gradient(
        135deg,
        rgba(38, 138, 91, 0.986),
        rgba(1, 63, 63, 0.966)
      );
   border-radius: 10px;
   box-shadow: 0 0 10px rgba(4, 153, 133, 0.075);
   cursor: pointer;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   overflow: hidden;
   transition: transform 0.3s ease-in-out;
   .level-abt{
    display: flex;
    align-items: center;
    gap: 1rem;
     .level-ico{
      width: 70px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 1rem;
      color: rgba(1, 63, 63, 0.966);
      font-size: 2rem;
      font-weight: 700;
     }
     .level-txt{
       margin-left: 4rem;
       h3,p{
        color: #fff;
       }
     }
   }
   .level-score{
    width: 90%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 1rem;
     .intern-score, .course-score{
      h3{
        color: rgb(19, 243, 243);
      }
       h4{
        color: #fff;
       }
     }
   }
   &:hover{
     transform: scale(1.01);
   }
 }
 .mid{
  background-image: linear-gradient(
        135deg,
        goldenrod,
        rgba(95, 78, 3, 0.966)
      );
  .level-abt{
    .level-ico{
      color: goldenrod;
    }
  }
 }
 .last{
  background-image: linear-gradient(
        135deg,
        rgba(223, 58, 17, 0.986),
        rgba(102, 4, 45, 0.966)
      );
  .level-abt{
    .level-ico{
      color: tomato;
    }
  }
 }
` 
const AllCoursesContainerWrapper = styled.div`
 width: 100%;
 height: calc(100% - 30%);
 padding: 8px;
 .course-card{
   width: 100%;
   height: max-content;
   background: #fff;
   border-radius: 1rem;
   box-shadow: 0 1rem 30px rgba(2, 120, 156, 0.048);
   cursor: pointer;
   padding: 8px;
   overflow: hidden;
   transition: transform 0.3s ease-in-out;
   .banner{
     width: 100%;
     height: 60%;
     border-radius: 1rem;
     img{
      width: 100%;
      border-radius: inherit;
     }
   }
   .meta-info{
     width: 100%;
     height: 40%;
     overflow: hidden;
     h4{
      color: rgba(2, 19, 20, 0.795);
     }
     span{
      font-size: 18px;
     }
     li{
      display: flex;
      align-items: center;
      color: teal;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      gap: .2rem;
     }
   }
   &:hover{
     transform: translateY(.2rem);
   }
 }
`

export default Programs