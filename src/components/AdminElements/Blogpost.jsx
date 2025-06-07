import React from 'react'
import styled from 'styled-components'
import { FaEye } from 'react-icons/fa'

import bannerImg from '../../assets/images/mission.jpg'

const Blogpost = ({blogs}) => {
  

  return (
    <BlogpostContainerWrapper className='grid-col-3'>
      {blogs?.map((blog) => (
        <div className="blog-card" key={blog.id}>
        <div className="banner-box">
           <img src={bannerImg} alt="" />
        </div>
        <div className="meta-info">
          <div className="small-info">
           <li>{blog.category}</li>
           <li></li>
          </div>
            <h4>{blog.title.substring(0,35)}</h4>
           <p>{blog.desc.substring(0,130)}...</p>
           <div className="views">
             <FaEye className='ico'/>
             <p>123</p>
           </div>
        </div>
      </div>
      ))}
    </BlogpostContainerWrapper>
  )
}

const BlogpostContainerWrapper = styled.article`
 width: 100%;
 height: 100vh;
 aspect-ratio: 1/1;
 padding: 75px 10px 0 10px;
 overflow-y: scroll;
 .blog-card{
  width: 100%;
  height: max-content;
  background: rgba(255, 255, 255, 0.733);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.158);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  padding: 10px;
  overflow: hidden;
  .banner-box{
    width: 100%;
    height: 50%;
    border-radius: 1rem;
    overflow: hidden;
    img{
      width: 100%;
      border-radius: inherit;
      object-fit: cover;
    }
  }

  .meta-info{
    width: 98%;
    height: calc(100% - 50%);
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: hidden;
    h4{
      color: rgba(2, 19, 20, 0.795);
    }
    p{
      color: rgba(2, 19, 20, 0.795);
    }
    .small-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: teal;
      font-weight: 600;
    }
    .views{
      display: flex;
      align-items: center;
      .ico{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: rgba(1, 49, 37, 0.13);
        border-radius: .5rem;
        font-size: .8rem;
        padding: 7px;
        margin-right: 8px;
      }
      p{
        padding-top: 5px;
      }
    }
  }
 }
`



export default Blogpost 