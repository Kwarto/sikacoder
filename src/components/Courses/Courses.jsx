import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import inImg from '../../assets/images/in_hero_bg.jpg'
import SingleCourse from './SingleCourse/SingleCourse'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
// import { useNavigate } from 'react-router-dom'
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([])
  // const navigate = useNavigate()
  useEffect(() => {;
    const unsub = onSnapshot(
      collection(db, 'courses'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCourses(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const filterResult = (catItem) => {
      const res = courses.filter((curData) => {
        return curData.courseCategory === catItem;
      })
      setFilteredCategory(res);
      console.log(filteredCategory)
  }

  return (
    <CoursesContainerWrapper>
     <article className='left-panel'>
        <div className="category">
          <h3>Category</h3>
          <div className="s-cat" onClick={() => filterResult('Web Development')}>
            <h4>Web Development</h4>
          </div>
          <div className="s-cat" onClick={() => {setCourses(courses)}}>
            <h4>All Categories</h4>
          </div>
        </div>
     </article>
     <article className='right-panel grid-col-3'>
        {courses && courses.map((course) => 
        <SingleCourse course={course} courses={courses}/>
        )}
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