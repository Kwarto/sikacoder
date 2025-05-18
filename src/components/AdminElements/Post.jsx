import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import styled from "styled-components";
import preBg from '../../assets/images/thumb/course_thumb08.jpg';
const initialState = {
  title: '',
  blogBanner: '',
  category: '',
  description: '',
  date: ''
};

const categoryOption = [
  'Software Engineering',
  'Graphic Design',
  'UI / UX Design',
  'Web Development',
  'Marketing',
];
const Post = () => {
  const [form, setForm] = useState(initialState)
  const [isBlog, setIsBlog] = useState(true);
  const [isCourse, setIsCourse] = useState(false);
  const [isNotice, setIsNotice] = useState(false);
  const {title, blogBanner, category, description, date} = form;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  return (
    <PostContainerWrapper>
      <div className="top">
        <div
          className="add-post-for-card card"
          onClick={() => {
            setIsBlog(true);
            setIsCourse(false);
            setIsNotice(false);
          }}
        >
          <div className="ico-box">
            <FaCloudUploadAlt />
          </div>
          <h3>Make Blog Post</h3>
        </div>
        <div
          className="add-post-for-card card"
          onClick={() => {
            setIsBlog(false);
            setIsCourse(true);
            setIsNotice(false);
          }}
        >
          <div className="ico-box">
            <FaCloudUploadAlt />
          </div>
          <h3>Upload Course</h3>
        </div>
        <div
          className="add-post-for-card card"
          onClick={() => {
            setIsBlog(false);
            setIsCourse(false);
            setIsNotice(true);
          }}
        >
          <div className="ico-box">
            <FaCloudUploadAlt />
          </div>
          <h3>Post Announcement</h3>
        </div>
      </div>
      {isBlog && 
      <AddBlogContainer>
        <form>
          <div className="blog-banner-container">
            <input type="file" name="file" id="file" />
            <label htmlFor="file">
              <FaCloudUploadAlt />
            </label>
            <div className="file-preview">
                  <img src={preBg} alt="" />
            </div>
          </div>
          <div className="form-container">
            <div className="input-field">
              <input type="text" name="title" id="blogTItle" placeholder="Blog Title" value={title} onChange={handleChange}/>
            </div>
            <div className="input-field">
            <select value={category} onChange={onCategoryChange}>
              <option>Please Select Category</option>
              {categoryOption.map((option, index) => (
                <option value={option || ''} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
           <div className="input-area">
              <textarea name="description" id="description" placeholder="Blog Description" value={description} onChange={handleChange} />
            </div>
            <button className="btn btn-primary">Submit Blog</button>
          </div>
        </form>
      </AddBlogContainer>}
      {isCourse && <AddCourseContainer></AddCourseContainer>}
      {isNotice && <AddNoticeContainer></AddNoticeContainer>}
    </PostContainerWrapper>
  );
};

const PostContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, rgb(213, 219, 215), rgb(226, 232, 247));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  .top {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 10px;

    .add-post-for-card {
      width: 35%;
      height: 90px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      border-radius: 1rem;
      .ico-box {
        background: rgb(4, 27, 27);
        width: 50px;
        aspect-ratio: 1/1;
        color: cyan;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        font-size: 1.3rem;
      }
    }
  }
`;
const AddBlogContainer = styled.article`
  width: 99%;
  height: 80%;
  background: rgba(255, 255, 255, 0.979);
  border-radius: 10px;
  margin: 5px auto;
  form{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .blog-banner-container{
     width: 30%;
     height: 90%;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     gap: 1rem;
     font-size: 5rem;
     overflow: hidden;
     label{
      width: 95%;
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(30, 30, 31);
      border-radius: 1rem;
      box-shadow: 0 0 10px rgba(20, 20, 20, 0.527);
      color: cyan;
     }
     input{
      display: none;
     }
     .file-preview{
       width: 95%;
       height: 50%;
       background: rgb(241, 241, 243);
       border-radius: 1rem;
       transform: translateY(2rem);
       overflow: hidden;
       display: flex;
       align-items: center;
       justify-content: center;
       img{
        width: 95%;
        height: 90%;
        object-fit: cover;
        border-radius: inherit;
       }
     }
    }
    .form-container{
      width: calc(100% - 30%);
      height: 100%;
      background: #ccc;
      padding: 10px;
      .input-field{
        width: 80%;
        height: 70px;
        background: #fff;
        border-radius: 10px;
        margin: 10px 0;
        input, select{
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: inherit;
          padding: 0 20px;
          font-size: 20px;
          appearance: none;
        }
      }
      .input-area{
        width: 80%;
        height: 260px;
        background: #fff;
        border-radius: 10px;
        textarea{
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: inherit;
          font-size: 20px;
          padding: 20px;
          resize: none;
        }
      }
      button{
        margin-top: 8px;
        width: 25%;
        height: 55px;
        &:hover{
          background: teal;
          filter: contrast(0.8);
        }
      }
    }
  }
`;
const AddCourseContainer = styled(AddBlogContainer)`
  background: red;
`;

const AddNoticeContainer = styled(AddBlogContainer)`
  background: rgb(0, 255, 21);
`;

export default Post;
