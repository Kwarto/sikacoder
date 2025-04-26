/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import serviceImg from '../../assets/images/service-bg.png';
import { motion } from 'framer-motion';

const HeroService = () => {
  return (
    <HeroServiceWrapper>
     <motion.h1 initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 1}} transition={{duration: 1}}>Empowering Future Innovators with Smart IT Solutions & Hands-On Internships</motion.h1>
     <div className="btn">Learn More</div>
    </HeroServiceWrapper>
  )
}

const HeroServiceWrapper = styled.header`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(125deg,rgba(4, 94, 94, 0.534), rgba(0, 10, 10, 0.747)),url(${serviceImg});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    h1{
        color: #fff;
    }
    @media screen and (max-width: 430px) {
      height: 70vh;
      text-align: center;
      align-items: center;
    }
`

export default HeroService