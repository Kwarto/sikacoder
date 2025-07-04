/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import offerBg from '../../assets/images/offers_bg.jpg'
import { MdCode, MdOutlineShieldMoon } from 'react-icons/md';
import { FaGears, FaTeamspeak } from 'react-icons/fa6';

import { motion } from 'framer-motion';

const offerData = [
  {
    ico: <MdCode/>,
    id: 1,
    title: "Web Development",
    description: "Master front-end and back-end technologies through hands-on projects. Build responsive websites, learn JavaScript frameworks, and create dynamic user experiences that stand out ."
  },
  {
    ico: <FaGears />,
    id: 2,
    title: "Software Engineering",
    description: "Dive into software architecture, APIs, and database management. Gain proficiency in languages like Python and Java, and develop scalable, maintainable applications with real-world engineering practices."
  },
  {
    ico: <FaTeamspeak />,
    id: 3,
    title: "Team Collaboration",
    description: "Work in cross-functional teams to simulate professional environments. Enhance communication, project management, and agile methodologies skills while contributing to group projects."
  },
   {
    ico: <MdOutlineShieldMoon />,
    id: 4,
    title: "Land a Job",
    description: "Receive career coaching, resume reviews, and interview prep. Leverage your portfolio of completed projects and internship experience to secure rewarding roles in the tech industry."
  }
];

const Offers = () => {
  return (
    <OffersContainerWrapper>
     <LeftContainerWrapper>
      <h1>From Learning to Earning – Start with Sikacoder</h1>
      <h4>What We Bring to the Table – Learn, Build, Thrive</h4>
      <p>At Sikacoder, we offer immersive tech courses, hands-on projects, mentorship, and internship opportunities. Learners gain practical skills in web development, software engineering, and teamwork, all within a supportive community. Our programs are designed to turn beginners into confident professionals ready to take on real-world tech challenges.</p>
      <div className="btn">Pick Course</div>
     </LeftContainerWrapper>
     <GridBoxContainer className='grid-col-2'>
        {offerData.map((offer, id) => (
        <motion.div className="card" key={id}  initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05 * id }}>
          <div className="ico-wrap">
          {offer.ico} 
          </div>
          <h4>{offer.title}</h4>
          <p>{offer.description}</p>
        </motion.div>
        ))}
     </GridBoxContainer>
    </OffersContainerWrapper>
  )
}

const OffersContainerWrapper = styled.section`
 width: 100%;
 height: 90vh;
 background: url(${offerBg});
 background-size: cover;
 background-position: center;
 padding: 20px;
 display: grid;
 grid-template-columns: 40% 60%;
 place-items: center;
 gap: 1rem;
  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
    height: max-content;
    padding: 20px 5px;
  }
`
const LeftContainerWrapper = styled.article`
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
   max-width: 500px;
 }
 p{
  padding: 10px 0;
 }
`
const GridBoxContainer = styled.article`
padding: 10px;
border-radius: 10px;
 .card{
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.116);
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  .ico-wrap{
    width: 50px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(2, 148, 158);
    border-radius: 10px;
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.027);
    color: #fff;
    font-size: 1.5rem;
  }
  h3{
    padding: 5px 0;
  }
  &:hover{
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.027);
    transform: translateY(.3rem);
  }
 }
 @media screen and (max-width: 430px){
  padding: 0;
 }
`

export default Offers