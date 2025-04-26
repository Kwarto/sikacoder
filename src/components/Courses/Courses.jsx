import React from 'react'
import styled from 'styled-components'
import inImg from '../../assets/images/in_hero_bg.jpg'
import SingleCourse from './SingleCourse/SingleCourse'
import {courseList} from '../../utils/courseData'
const Courses = () => {
  return (
    <CoursesContainerWrapper>
     <article className='left-panel'>
        <div className="category">
          <h3>Category</h3>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>
          <div className="s-cat">
            <h4>Development</h4>
            <input type="checkbox" name="checkbox" id="checkItem" />
          </div>

        </div>
     </article>
     <article className='right-panel grid-col-3'>
        {courseList && courseList.map((course, id) => (
          <SingleCourse data={course} key={id}/>
        ))}
     </article>
     
    </CoursesContainerWrapper>
  )
}

const CoursesContainerWrapper = styled.section`
 width: 100%;
 height: max-content;
 background: url(${inImg});
 background-size: cover;
 background-position: center;
 padding: 30px 0;
 display: grid;
 grid-template-columns: 25% 75%;
 place-items: center;
 gap: .2rem;
 article{
    width: 100%;
    height: 100%;
 }
 .left-panel{
    padding: 0 8px;
    .category{
        background: rgb(255, 255, 255);
        border-radius: 10px;
        width: 100%;
        height: 65vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        h3{
         margin-left: 10px;
        }
        .s-cat{
          width: 98%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 40px;
          margin: 10px 0;
          padding: 0 10px;
          border-bottom: 1px solid rgba(204, 204, 204, 0.349);
          cursor: pointer;
        }
    }
 }
 .right-panel{
    padding: 0 15px;
    height: 100%;
 }
 @media screen and (max-width: 430px) {
  grid-template-columns: 100%;
  border-radius: 0 0 10px 10px;
  .left-panel{
    display: none;
  }
  .right-panel{
    padding: 5px;
  }
 }
`

export default Courses