/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import bannerCover from "../../assets/images/bg_dots.svg";
import bannerAvatar from '../../assets/images/community-bg.jpg'
import { motion } from "framer-motion";

const Community = () => {
  return (
    <CommunityContainerWrapper className="grid-col-2">
      <LeftContentWrapper>
        <h1>Join Our Vast Community of Alumni and Professional Developers.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          soluta, dolor blanditiis dolorem possimus in assumenda itaque
          temporibus. Officia eaque libero nihil aspernatur obcaecati, optio eos
          magni voluptate inventore minus?
        </p>
        <div className="btn">Join Community</div>
      </LeftContentWrapper>
      <RightBannerWrapper>
        <motion.div
          className="container"
          initial={{ opacity: 0, translateX: '100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.05 }}
        >
          <img src={bannerCover} alt="banner-cover" />
          <motion.div className="overlay" initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}>
            <img src={bannerAvatar} alt="sc-community-profile" />
          </motion.div>
        </motion.div>
      </RightBannerWrapper>
    </CommunityContainerWrapper>
  );
};

const CommunityContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px;
  @media screen and (max-width: 430px) {
    height: max-content;
  }
`;
const LeftContentWrapper = styled.article`
  width: 100%;
  height: 98%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: transparent;
    background-image: linear-gradient(
      165deg,
      rgb(255, 0, 0),
      rgb(29, 226, 226)
    );
    background-clip: text;
    -webkit-background-clip: text;
    max-width: 600px;
  }
  p {
    max-width: 550px;
    padding: 12px 0;
  }
  .btn {
    width: 28%;
  }
  @media (max-width: 430px){
    .btn{
      width: 38%;
     }
  }
`;
const RightBannerWrapper = styled(LeftContentWrapper)`
  .container {
    width: inherit;
    height: inherit;
    position: relative;
    overflow-y: hidden;
    img {
      width: 100%;
    }
    .overlay{
      position: absolute;
      top: 5rem;
      right: 2rem;
      width: 450px;
      border-radius: 15rem 0 0 15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(1.05);
      img{
        width: 100%;
        border-radius: inherit;
      }
    }
  }
  @media screen and (max-width: 430px) {
    .container{
      .overlay{
        width: 310px;
        top: 2rem;
        right: 0;
        img{
          width: 100%;
        }
      }
    }
  }
`;

export default Community;
