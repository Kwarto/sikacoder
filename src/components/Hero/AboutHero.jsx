/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import heroImg from '../../assets/images/banner_bg.png';
import cloudImg from '../../assets/images/hero-cloud.svg'
import bImg from '../../assets/images/why-avatar.png';
import overImg from '../../assets/images/overlay.jpg';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <AboutHeroContainerWrapper className='grid-col-2'>
      <AboutContentWrapper>
       <h4>Sikacoder</h4>
       <h1>About Us</h1>
       <div className="txt">
        <p>At Sikacoder, we offer immersive tech courses, hands-on projects, mentorship, and internship opportunities. Learners gain practical skills in web development, software engineering, and teamwork, all within a supportive community. Our programs are designed to turn beginners into confident professionals ready to take on real-world tech challenges.</p>
       </div>
       <div className="btn">Know More</div>
      </AboutContentWrapper>
      <AboutHeroBannerWrapper>
       <motion.div className="banner" 
       initial={{opacity: 0, scale: 0}} 
       whileInView={{opacity: 1, scale: 1}} 
       transition={{duration: 1}}>
        <img src={cloudImg} alt="" />
        <div className="img-b">
            <img src={bImg} alt="" />
        </div>
         <div className="overlay">
          <img src={overImg} alt="" />
         </div>
       </motion.div>
      </AboutHeroBannerWrapper>
    </AboutHeroContainerWrapper>
  )
}

const AboutHeroContainerWrapper = styled.header`
 width: 100%;
 height: 100vh;
 background-image: url(${heroImg});
 background-size: cover;
 background-position: center;
 padding: 20px;
  @media screen and (max-width: 430px){
  height: max-content;
  padding: 0 5px;
 }
`

const AboutContentWrapper = styled.article`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: flex-start;
 justify-content: center;
 flex-direction: column;
 h4{
    color: rgb(255, 0, 0);
    font-weight: 600;
 }
 .txt{
    width: 85%;
    padding: 10px 0;
    p{
        max-width: 500px;
    }
 }
 @media screen and (max-width: 430px) {
  .txt{
    width: 100%;
  }
 }
`
const AboutHeroBannerWrapper = styled.article`
 width: 100%;
 height: 95%;
 .banner{
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   img{
    width: 100%;
    position: absolute;
   }
   .img-b{
     img{
        position: absolute;
        top: 3rem;
        right: 3rem;
        width: 55%;
        z-index: 10;
     }
   }
   .overlay{
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    height: 80%;
    border-radius: 15rem 0 0 15rem;
    box-shadow: 0 1rem 40px rgba(0, 0, 0, 0.034);
    z-index: 1;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
   }
 }
 @media screen and (max-width: 430px){
  display: none;
 }
`

export default AboutHero