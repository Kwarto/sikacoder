/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Main } from "../../layout";
import posterImg from "../../assets/images/community-bg.jpg";
import posterImg2 from "../../assets/images/mission.jpg";
import posterImg3 from "../../assets/images/vision.jpg";
//category img
import catImg1 from "../../assets/images/thumb/cat1.jpg";
import catImg2 from "../../assets/images/thumb/cat2.webp";
import catImg3 from "../../assets/images/thumb/cat3.webp";
import catImg4 from "../../assets/images/thumb/cat4.jpg";
import trendImg4 from "../../assets/images/thumb/course_thumb05.jpg";
import { motion } from "framer-motion";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
   useEffect(() => {;
      const unsub = onSnapshot(
        collection(db, 'blogs'),
        (snapshot) => {
          let list = [];
          snapshot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setBlogs(list);
        },
        (error) => {
          console.log(error);
        }
      );
  
      return () => {
        unsub();
      };
    }, []);
    console.log(blogs)
  return (
    <Main>
      <BlogPageContainerWrapper>
        <BlogHeaderContainer>
          <HeaderContent>
            <motion.img
              src={posterImg}
              alt=""
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="layer">
              <div className="post-meta-data">
                <h4>Learn React.Js With Us</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum facilis hic tempore quaerat quibusdam eveniet.
                </p>
              </div>
            </div>
          </HeaderContent>
          <LeftContentWrapper>
            {blogs && blogs?.map((blog) => (
              <motion.div
              className="left-div"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={posterImg2} alt="" />
              <div className="layer">
                <div className="post-meta-data">
                  <h4>{blog.title.substring(0, 38)}..</h4>
                  <p>
                    {blog.desc.substring(0, 90)}..
                  </p>
                </div>
              </div>
            </motion.div>
            ))}
            
            <motion.div
              className="left-div"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={posterImg2} alt="" />
              <div className="layer">
                <div className="post-meta-data">
                  <h4>Learn React.Js With Us</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum facilis hic tempore quaerat quibusdam eveniet.
                  </p>
                </div>
              </div>
            </motion.div>
          </LeftContentWrapper>
        </BlogHeaderContainer>
        {/* Blog Category */}
        <BlogCategoryContainer>
          <h3>Blog Categories</h3>
          <CategoryListContainer>
            <CategoryCardWrapper>
              <img src={catImg2} alt="" />
              <div className="layer">
                <h3>Art & Design</h3>
              </div>
            </CategoryCardWrapper>
            <CategoryCardWrapper>
              <img src={catImg4} alt="" />
              <div className="layer">
                <h3>Development</h3>
              </div>
            </CategoryCardWrapper>
            <CategoryCardWrapper>
              <img src={catImg3} alt="" />
              <div className="layer">
                <h3>Engineering</h3>
              </div>
            </CategoryCardWrapper>
            <CategoryCardWrapper>
              <img src={catImg1} alt="" />
              <div className="layer">
                <h3>Artificial Intelligence</h3>
              </div>
            </CategoryCardWrapper>
          </CategoryListContainer>
        </BlogCategoryContainer>
        {/* Trending Blog */}
        <TrendingBloContainerWrapper>
          {blogs && blogs?.map((blog) => (
           <div className="trending-post-wrap" key={blog.id}>
            <div className="trend-banner">
              <img src={posterImg} alt="" />
            </div>
            <div className="trend-info">
            <div className="sm">
              <strong>{blog.category}</strong>
            </div>
              <h3>{blog.title.substring(0, 38)}</h3>
              <p>
                {blog.desc.substring(0, 184)}..
              </p>
            </div>
            
           </div>
          ))}
        </TrendingBloContainerWrapper>
      </BlogPageContainerWrapper>
    </Main>
  );
};

const BlogPageContainerWrapper = styled.section`
  max-width: 100%;
  min-height: max-content;
  background: #fff;
  padding: 8px 20px;
  @media screen and (max-width: 430px) {
    padding: 8px 10px;
  }
`;
const BlogHeaderContainer = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 40% 60%;
  place-items: center;
  gap: 1;
  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
    height: max-content;
  }
`;
const HeaderContent = styled.article`
  width: 100%;
  height: 98%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(25, 26, 25, 0.075);
  overflow-y: hidden;
  position: relative;
  img {
    width: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(1, 13, 15, 0.74);
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    .post-meta-data {
      h4 {
        font-size: 2rem;
        color: #fff;
      }
      p {
        width: 90%;
        color: #fff;
      }
    }
  }
`;

const LeftContentWrapper = styled.article`
  width: 100%;
  height: 98%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 3px;
  .left-div {
    width: 100%;
    height: 100%;
    background: goldenrod;
    border-radius: 10px;
    box-shadow: 0 1rem 40px rgba(1, 1, 10, 0.055);
    overflow-y: hidden;
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
    .layer {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(1, 13, 15, 0.74);
      cursor: pointer;
      padding: 10px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      .post-meta-data {
        h4 {
          color: #fff;
          font-weight: 700;
        }
        p {
          color: #ccc;
          width: 85%;
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    height: 70vh;
    grid-template-columns: 1fr;
  }
`;

const BlogCategoryContainer = styled.article`
  width: 100%;
  height: 38vh;
  padding: 10px;
  text-transform: uppercase;
  overflow-y: hidden;
  h3 {
    margin: 0;
  }
`;
const CategoryListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 430px) {
    width: 90%;
    height: 80%;
    overflow-x: scroll;
    display: inline-block;
  }
`;
const CategoryCardWrapper = styled.div`
  width: 400px;
  height: 70%;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(1, 28, 32, 0.062);
  cursor: pointer;
  overflow-y: hidden;
  position: relative;
  img {
    border-radius: inherit;
    object-fit: cover;
    width: 100%;
  }
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    h3 {
      color: rgb(255, 255, 255);
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`;
const TrendingBloContainerWrapper = styled.article`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 10px 3px;
  .trending-post-wrap {
    width: 100%;
    height: 90%;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 12, 34, 0.13);
    border-radius: 1rem;
    cursor: pointer;
    padding: 8px;
    overflow-y: hidden;
    .trend-banner {
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .trend-info {
      padding-top: 8px;
      .sm{
        padding: 6px 0;
        strong{
          color: red;
          cursor: pointer;
          font-size: 16px;
          font-weight: 800;
          text-transform: uppercase;
        }
      }
      h3 {
        font-size: 1.3rem;
        text-transform: uppercase;
      }
    }
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    height: max-content;
    gap: 1rem;
    .trending-post-wrap {
      height: 100%;
    }
  }
`;

export default Blog;
