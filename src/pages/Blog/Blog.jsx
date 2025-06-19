import React from "react";
import styled from "styled-components";
import { Main } from "../../layout";
import posterImg from "../../assets/images/community-bg.jpg";
import posterImg2 from "../../assets/images/mission.jpg";
import posterImg3 from "../../assets/images/vision.jpg";
//category img
import catImg1 from '../../assets/images/thumb/cat1.jpg';
import catImg2 from '../../assets/images/thumb/cat2.webp';
import catImg3 from '../../assets/images/thumb/cat3.webp';
import catImg4 from '../../assets/images/thumb/cat4.jpg';
import trendImg4 from '../../assets/images/thumb/course_thumb05.jpg';


const Blog = () => {
  return (
    <Main>
      <BlogPageContainerWrapper>
        <BlogHeaderContainer>
          <HeaderContent>
            <img src={posterImg} alt="" />
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
            <div className="left-div">
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
            </div>
            <div className="left-div">
              <img src={posterImg3} alt="" />
              <div className="layer">
                <div className="post-meta-data">
                  <h4>Learn React.Js With Us</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum facilis hic tempore quaerat quibusdam eveniet.
                  </p>
                </div>
              </div>
            </div>
            <div className="left-div">
              <img src={posterImg3} alt="" />
              <div className="layer">
                <div className="post-meta-data">
                  <h4>Learn React.Js With Us</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum facilis hic tempore quaerat quibusdam eveniet.
                  </p>
                </div>
              </div>
            </div>
            <div className="left-div">
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
            </div>
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
          <div className="trending-post-wrap">
            <div className="trend-banner">
              <img src={trendImg4} alt="" />
            </div>
            <div className="trend-info">
              <h3>How to earn money online</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas fuga inventore consequuntur illum molestias ab veniam autem laudantium corporis accusantium vel eligendi neque iure beatae, eveniet rem alias adipisci.</p>
            </div>
          </div>
           <div className="trending-post-wrap">
            <div className="trend-banner">
              <img src={trendImg4} alt="" />
            </div>
            <div className="trend-info">
              <h3>How to earn money online</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas fuga inventore consequuntur illum molestias ab veniam autem laudantium corporis accusantium vel eligendi neque iure beatae, eveniet rem alias adipisci.</p>
            </div>
          </div>
           <div className="trending-post-wrap">
            <div className="trend-banner">
              <img src={trendImg4} alt="" />
            </div>
            <div className="trend-info">
              <h3>How to earn money online</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas fuga inventore consequuntur illum molestias ab veniam autem laudantium corporis accusantium vel eligendi neque iure beatae, eveniet rem alias adipisci.</p>
            </div>
          </div>
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
`;
const BlogHeaderContainer = styled.section`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 40% 60%;
  place-items: center;
  gap: 1;
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
  .layer{
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
      .post-meta-data{
        h4{
          font-size: 2rem;
          color: #fff;
        }
        p{
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
`;

const BlogCategoryContainer = styled.article`
 width: 100%;
 height: 38vh;
 padding: 10px;
 text-transform: uppercase;
 overflow-y: hidden;
 h3{
  margin: 0;
 }
`
const CategoryListContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 1rem;
 width: 100%;
 height: 100%;
`
const CategoryCardWrapper = styled.div`
 width: 400px;
 height: 70%;
 border-radius: 10px;
 box-shadow:  0 0 50px rgba(1, 28, 32, 0.062);
 cursor: pointer;
 overflow-y: hidden;
 position: relative;
 img{
  border-radius: inherit;
  object-fit: cover;
  width: 100%;
 }
 .layer{
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
      h3{

        color: rgb(255, 255, 255);
      }
 }
`
const TrendingBloContainerWrapper = styled.article`
 width: 100%;
 height: 70vh;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 place-items: center;
 gap: 1rem;
 padding: 10px 3px;
 .trending-post-wrap{
   width: 100%;
   height: 90%;
   background-color: #fff;
   box-shadow: 0 0 20px rgba(0, 12, 34, 0.13);
   border-radius: 1rem;
   cursor: pointer;
   padding: 8px;
   overflow-y: hidden;
   .trend-banner{
     width: 100%;
     height: 55%;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 10px;
     img{
       width: 100%;
       height: 100%;
       object-fit: cover;
     }
   }
   .trend-info{
    padding-top: 8px;
    h3{
      font-size: 1.6rem;
      text-transform: uppercase;
    }
   }
 }
`

export default Blog;
