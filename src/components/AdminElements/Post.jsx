import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import styled from "styled-components";
const Post = () => {
  const [isBlog, setIsBlog] = useState(true);
  const [isCourse, setIsCourse] = useState(false);
  const [isNotice, setIsNotice] = useState(false);
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
      {isBlog && <AddBlogContainer></AddBlogContainer>}
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
  background: rgba(137, 43, 226, 0.384);
  border-radius: 10px;
  margin: 5px auto;
`;
const AddCourseContainer = styled(AddBlogContainer)`
  background: red;
`;

const AddNoticeContainer = styled(AddBlogContainer)`
  background: rgb(0, 255, 21);
`;

export default Post;
