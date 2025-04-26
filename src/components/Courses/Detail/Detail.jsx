/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import { courseList } from '../../../utils/courseData'
import { FaStar } from 'react-icons/fa'
const Detail = ({courseId, setShowDetail}) => {
  const [courseDetail, setCourseDetail] = useState([]);
  useEffect(() => {
    const findCourse = courseList.filter(item => item.id === courseId)[0];
    setCourseDetail(findCourse);
  }, [courseId])
  console.log(courseDetail)
  return (
    <DetailContainerWrapper>
     <motion.article className='detail-wrapper'
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1}}
     >
     <article className='short-meta-info-wrapper'>
      <div className="top-detail">
        <img src={courseDetail?.thumb} alt="" />
      </div>
      <div className="st-abt">
       <h1>{courseDetail?.title}</h1>
        <p>{courseDetail?.desc}__ Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis expedita commodi voluptatum? Voluptate eaque provident corrupti unde dolorum eum facere omnis laborum sit reiciendis. Provident?</p>
       <div className="sm-info">
        <h4>{courseDetail?.category}</h4>
        <h4>{courseDetail?.skill_level}</h4>
        <h4><FaStar className='ico' /> {courseDetail?.rating} <small>(Rating)</small></h4>
       </div>
      </div>
     </article>
     <article className='long-meta-info-wrapper'>
     <div className="close" onClick={() => {setShowDetail(false)}}>
        <IoMdClose />
     </div>
     <h3>{courseDetail?.instructors}</h3>
     </article>
     </motion.article>
    </DetailContainerWrapper>
  )
}

const DetailContainerWrapper = styled.section`
 .detail-wrapper{
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
 .close{
    position: absolute;
    right: 1rem;
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
    transition: box-shadow cubic-bezier(0.215, 0.610, 0.355, 1) 0.3s;
    &:hover{
        box-shadow: none;
    }
 }
 .short-meta-info-wrapper{
    width: 100%;
    height: 100%;
    .top-detail{
        width: 100%;
        height: 290px;
        border-radius: 10px;
        box-shadow: 10px 5px rgba(0, 0, 0, 0.034);
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }
    .st-abt{
        padding: 10px 0;
        h1{
            color: rgb(26, 25, 25);
            font-size: 2.3rem;
        }
        p{
            padding: 15px 0;
            max-width: 600px;
            line-height: 1.7;
        }
        .sm-info{
           display: flex;
           align-items: center;
           justify-content: flex-start;
           gap: 1rem;
           width: 98%;
           h4{
            color: rgba(17, 37, 37, 0.795);
            cursor: pointer;
            background: rgb(231, 231, 231);
            border-radius: .5rem;
            padding: 5px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            .ico{
                color: rgb(250, 183, 12);
            }
           }
        }
    }
 }
 .long-meta-info-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 255, 0.021);
    border-radius: 0 10px 0 10px;
    padding: 10px;
 }
 @media screen and (max-width: 430px) {
  grid-template-columns: 100%;
  .short-meta-info-wrapper{
    .st-abt{
      .sm-info{
        flex-wrap: wrap;
        align-items: flex-start;
        h4{
         width: 45%;
         height: 40px;
        }
      }
    }
  }
 }
 }
`
export default Detail;