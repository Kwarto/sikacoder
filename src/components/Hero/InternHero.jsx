/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import inHeroImg from '../../assets/images/footer-bg.png'
import endImg from '../../assets/images/end_shape02.svg'
import starImg from '../../assets/images/star.svg'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const InternHero = () => {
  const navigate = useNavigate()
  return (
    <InternHeroContainerWrapper>
     <div className="star">
        <img src={starImg} alt="" />
     </div>
     <h1>Available Courses</h1>
     <h4 onClick={() => {navigate('/')}}>Home - <span>Courses</span></h4>
     <motion.div className="end-shape" 
      initial={{opacity: 0, y: -30}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1.2}}
     >
        <img src={endImg} alt="" />
     </motion.div>
    </InternHeroContainerWrapper>
  )
}

const InternHeroContainerWrapper = styled.header`
 width: 100%;
 height: 50vh;
 background: url(${inHeroImg});
 background-size: cover;
 background-position: center;
 position: relative;
 display: flex;
 align-items: flex-start;
 justify-content: center;
 flex-direction: column;
 h1,h4{
    padding: 10px;
    color: #fff;
 }
 h4{
    cursor: pointer;
    span{
        color: tomato;
        cursor: text;
    }
 }
 .end-shape{
    position: absolute;
    bottom: 0;
    right: 0;
    img{
        width: 100%;
        opacity: 0.5;
    }
 }
 .star{
    padding: 12px;
    img{
        animation: animateFor linear infinite 2s;
        opacity: .4;
    }
 }
`
export default InternHero