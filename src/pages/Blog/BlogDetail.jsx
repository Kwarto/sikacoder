import React from 'react'
import styled from 'styled-components'
import blogImg from '../../assets/images/thumb/cat3.webp';
import blogImg2 from '../../assets/images/thumb/cat1.jpg'
const BlogDetail = () => {
  return (
    <BlogDetailContainerWrapper>
      <CategoryContainerWrapper>
        <div className="profile-box">
          
        </div>
        <div className="cat-list-wrap">
          <h2>Category</h2>  
          <div className="list">
            <span>Data Science</span>
          </div>
          <div className="list">
            <span>Data Science</span>
          </div>
          <div className="list">
            <span>Data Science</span>
          </div>
          <div className="list">
            <span>Data Science</span>
          </div>
          <div className="list">
            <span>Data Science</span>
          </div>
          <div className="list">
            <span>Data Science</span>
          </div>
          <div className="list">
            <span>Data Science</span>
          </div>
        </div>
      </CategoryContainerWrapper>
      <BlogDetailGapWrapper>
         <BannerContainerWrapper>
            <img src={blogImg2} alt="" />
         </BannerContainerWrapper>
         <BlogContentContainerWrapper>
          <div className="meta-info">
            <h3>Intelligence Committee to begin circulating draft Ukraine report Monday</h3>
            <p>By: <span>Mark, Sikacoder</span></p>
          </div>
          <div className="desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at similique rem, quidem placeat qui aperiam eius doloribus molestias magni eveniet reprehenderit alias reiciendis, maiores mollitia maxime esse quasi error deserunt ipsum animi beatae quisquam, totam illum. Natus alias odit placeat in ipsam quas! Voluptate minima sapiente necessitatibus repudiandae magnam, nulla itaque. Dolorum voluptatibus molestiae repellat dolor ipsum doloribus optio?</p>
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eos similique aperiam dolor. Ullam quia voluptatibus suscipit omnis vero aliquid similique perferendis amet quam, maxime excepturi quaerat dicta libero facere ducimus veritatis exercitationem tenetur eaque</p>
            <br />
          </div>
          <div className="last">
            
          </div>
         </BlogContentContainerWrapper>
      </BlogDetailGapWrapper>
      <RelatedPostContainerWrapper>
        <div className="head">
            <h2>Related News</h2>
            <span>See All</span>
        </div>
        <article className='related'>
         <div className="related-card">
            <div className="b-img-wrap">
              <img src={blogImg} alt="" />
            </div>
            <h4>WebDev</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
         </div>
         <div className="related-card">
            <div className="b-img-wrap">
              <img src={blogImg} alt="" />
            </div>
            <h4>WebDev</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
         </div>
        </article>
      </RelatedPostContainerWrapper>
    </BlogDetailContainerWrapper>
  )
}

const BlogDetailContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #ffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 15% 55% 30%;
  place-items: center;
`

const CategoryContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .profile-box{
    width: 95%;
    height: 180px;
    background: red;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .cat-list-wrap{
    width: 95%;
    height: calc(100% - 200px);
    background: rgb(249, 249, 253);
    border-radius: 10px;
    padding: 5px;
    h4{
        margin-bottom: 11rem;
    }
    .list{
        padding: 12px 20px;
        background: #fff;
        border-radius: 8px;
        margin-bottom: 6px;
    }
  }
`
const BlogDetailGapWrapper = styled.div`
  width: 100%;
  height: 100%; 
  width: 98%;
  height: 100%;
  background: #fff;
`

const BannerContainerWrapper = styled.div`
 width: 98%;
 height: 40%;
 background: orange;
 border-radius: 10px;
 margin: 5px auto;
 overflow: hidden;
 img{
    width: 100%;
    object-fit: cover;
 }
`
const BlogContentContainerWrapper = styled.div`
 width: 98%;
 height: calc(100% - 40%);
 padding: 10px;
`

const RelatedPostContainerWrapper = styled.div`
  width: 98%;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  .head{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .related{
    width: 98%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    .related-card{
        width: 100%;
        height: 280px;
        background: #fff;
        border-radius: 10px;
        border: 1px solid rgba(58, 56, 56, 0.034);
        padding: 10px;
        overflow-y: hidden;
        .b-img-wrap{
          border-radius: 10px;
          width: 100%;
          height: 70%;
          overflow: hidden;
          margin-bottom: 6px;
          img{
            width: 100%;
            object-fit: 100%;
          }
        }
        h4{
            color: red;
        }
    }
  }
`

export default BlogDetail