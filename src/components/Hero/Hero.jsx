/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import heroBanner from "../../assets/images/banner_bg.png";
import bannerAvatar from "../../assets/images/avatar.png";
import coverImg from "../../assets/images/bg_dots.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <HeroContainerWrapper>
      <LeftContentWrapper>
        <motion.div
          className="content"
          initial={{ opacity: 0, scale: 0}}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 1 }}
        >
          <h1>Igniting Tech Dreams, One Intern at a Time</h1>
          <p>
            Sikacoder is a tech-driven firm dedicated to empowering young
            talents through hands-on internships, offering training in web
            development, software engineering, and real-world project
            collaboration.
          </p>
          <div className="btn">Intern Now</div>
        </motion.div>
      </LeftContentWrapper>
      <RightContentWrapper>
        <motion.div
          className="cover"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{ duration: 1.3 }}
        >
          <img src={coverImg} alt="" />
          <div>
            <img src={bannerAvatar} alt="" />
          </div>
        </motion.div>
      </RightContentWrapper>
    </HeroContainerWrapper>
  );
};

const HeroContainerWrapper = styled.header`
  width: 100%;
  height: calc(100vh - 70px);
  background-image: url(${heroBanner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const LeftContentWrapper = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  p {
    width: 70%;
    font-weight: 400;
    padding: 10px 0;
  }
`;
const RightContentWrapper = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: 80%;
      transform: translateX(5rem);
      margin-top: 10px;
    }
  }
  .cover {
    position: relative;
    top: 0;
  }
`;

export default Hero;
