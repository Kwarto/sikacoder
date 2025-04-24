/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import cirWave from '../../assets/images/why-img-banner.png'
import cirWavAvatar from '../../assets/images/why-avatar.png'
import plane from '../../assets/images/zig-plane.svg'
import { motion } from 'framer-motion'

const WhyChoose = () => {
  return (
    <WhyChooseContainerWrapper className='grid-col-2'>
      <LeftBannerContainerWrapper>
       <motion.div className="wrap" initial={{ opacity: 0, scale: 0 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 2 }} >
       <img src={cirWave} alt="wave-circle" />
        <motion.div className="s-b">
          <motion.img src={plane} alt="" />
        </motion.div>
       <div className="avatarWrap">
        <img src={cirWavAvatar} alt="" />
       </div>
       </motion.div>
      </LeftBannerContainerWrapper>
      <ContentContainerWrapper>
       <h1>Code the Future with Confidence – Learn. Build. Intern. Succeed.</h1>
       <h4>Why Sikacoder</h4>
       <div className="txt">
        <p>Sikacoder offers hands-on tech training, real-world project experience, and a supportive learning environment. We bridge the gap between theory and practice, empowering young talents with industry-relevant skills through guided internships and mentorship. Whether you're starting out or upskilling, Sikacoder sets you on the path to a successful tech career.</p>
       </div>
       <div className="btn">Explore</div>
      </ContentContainerWrapper>
    </WhyChooseContainerWrapper>
  )
}

const WhyChooseContainerWrapper = styled.section`
  width: 100%;
  height: 98vh;
  padding: 20px;
`
const LeftBannerContainerWrapper = styled.article`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
 img{
  width: 80%;
  left: 2rem;
 }
 .avatarWrap{
  position: absolute;
  top: 2rem;
  left: 0;
  img{
    width: 100%;
  }
 }
 .s-b{
   transform: translate(12rem,-20rem);
   img{
    width: 60%;
    animation: animateFor linear infinite 2s;
   }
 }
`
const ContentContainerWrapper = styled.article`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: flex-start;
 justify-content: center;
 flex-direction: column;
 
 h1{
   background-clip: text;
   -webkit-background-clip: text;
   background-image: linear-gradient(165deg, rgb(255, 0, 0), rgb(29, 226, 226));
   margin: 0;
   line-height: normal;
   color: transparent;
   max-width: 600px;
 }
 h4{
  font-size: 1.2rem;
  color:rgb(2, 48, 48) ;
 }
 .txt{
  padding: 10px 0;
  p{
    max-width: 560px;
  }
 }
`

export default WhyChoose