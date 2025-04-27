/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import thumb1 from '../../../assets/images/thumb/course_thumb01.jpg'
import { CourseDetail } from '../..'

const SingleCourse = (props) => {
  const {id, title, thumb, category, desc, instructors } = props.data; 
  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
    <SingleCourseContainerWrapper onClick={() => {setShowDetail(true)}}>
     <div className="thumb-box">
      <img src={thumb} alt={title} />
     <div className="cat">
        <span>{category}</span>
     </div>
     </div>
     <div className="meta-info">
        <h3>{title}..</h3>
        <p>{desc.substring(0, 90)}..</p>
        <small>By <span>{instructors}</span></small>
        <div className="btn" onClick={() => {setShowDetail(true)}}>
            Interested
        </div>
     </div>
    </SingleCourseContainerWrapper>
    {showDetail && <CourseDetail setShowDetail={setShowDetail} courseId={id} /> }
    </>
  )
}
const SingleCourseContainerWrapper = styled.div`
 width: 100%;
 height: 430px;
 background: #fff;
 border: 1px solid rgb(245, 245, 245);
 border-radius: .5rem;
 box-shadow: 0 1rem 40px rgba(0, 0, 0, 0.062);
 cursor: pointer;
 padding: 10px;
 overflow-y: hidden;
 transition: all ease-in-out 0.3s;
 transition-delay: .8ms;
 .thumb-box{
    width: 100%;
    height: 180px;
    border-radius: .5rem;
    position: relative;
    overflow-y: hidden;
    img{
        width: 100%;
        object-fit: cover;
        border-radius: inherit;
    }
    .cat{
      position: absolute;
      top: .6rem;
      right: .3rem;
      width: max-content;
      height: 28px;
      padding: 0 10px;
      background: rgba(252, 249, 249, 0.863);
      backdrop-filter: blur(10px);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      transition: all ease-in-out 0.3s;
      transition-delay: .8ms;
      margin-bottom: 10px;
      span{
        font-weight: 400;
      }
      &:hover{
        background: rgb(16, 177, 177);
        color: #fff;
      }
    }
}
.meta-info{
    width: 100%;
    /* height: calc(430px - 180px); */
    padding: 10px 0 0 0;
    h3{
        transition: text-decoration ease-in-out 0.3s;
      
        &:hover{
            text-decoration: underline;
        }
    }
    small{
        font-size: 18px;
        font-weight: 400;
    }
    .btn{
        
    }
}
&:hover{
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.185);
    transform: scale(1.01);
}
@media screen and (max-width: 430px) {
 height: max-content;
 .thumb-box{
  height: 250px;
 }
}
`
export default SingleCourse