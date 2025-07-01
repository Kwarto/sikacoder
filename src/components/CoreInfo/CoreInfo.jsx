/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import mImg from '../../assets/images/mission.jpg';
import vImg from '../../assets/images/vision.jpg'
import vbImg from '../../assets/images/footer-bg.png'
import { motion } from 'framer-motion';
import { GiTeamIdea } from "react-icons/gi";
import { FaTeamspeak } from "react-icons/fa";
import { LuServerCog } from "react-icons/lu";
import { SiDavinciresolve } from "react-icons/si";

const CoreInfo = () => {
  return (
    <CoreInfoContainerWrapper>
      <LeftContentWrapper>
         <motion.div className="gridBox" initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}}>
          <img src={mImg} alt="" />
         </motion.div>
         <div className="gridBox-l">
            <h1>Our Mission</h1>
            <div className="txt">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui totam esse maxime harum laudantium suscipit nulla. Neque assumenda vero autem id quibusdam tenetur rerum repudiandae, doloremque dolores magnam atque, velit odio officiis eum et aliquid, consectetur esse reprehenderit adipisci non sit? Reiciendis ipsum accusamus non perferendis, quidem saepe reprehenderit est eveniet a nulla provident, nemo veritatis nesciunt dolor autem atque quia, dolores cumque? Ipsam beatae maiores nihil accusantium, debitis doloremque ut delectus! Nesciunt est, deserunt, corrupti dignissimos minima eaque modi veniam fugit error velit reiciendis quibusdam ut necessitatibus, libero excepturi distinctio doloremque delectus eligendi earum assumenda a pariatur! Incidunt, unde?</p>
            </div>
         </div>
      </LeftContentWrapper>
      <RightContentWrapper>
        <div className="text">
         <h1>Our Vision</h1>
         <div className="txt">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil voluptatem possimus, dicta rerum ipsa soluta quia consequatur, necessitatibus, ut tempore officia excepturi. Omnis quis sunt error iste esse laboriosam. Magni enim officia exercitationem harum temporibus ducimus laborum libero quasi in. Suscipit debitis velit iure reiciendis, hic quaerat eos dolorum rem voluptate dolor aspernatur, fuga odio asperiores saepe consectetur illo impedit numquam obcaecati nobis porro commodi consequuntur enim? Rerum, assumenda excepturi! Qui rem sint veritatis nostrum vero ullam tempora quis ratione? Nulla, quaerat veniam. Blanditiis temporibus fugiat numquam quod minus, doloremque aliquid, culpa perspiciatis labore itaque eos veniam at iusto aut?</p>
         </div>
        </div>
         <motion.div className="banner" initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1.2}}>
           <img src={vImg} alt="" />
         </motion.div>
      </RightContentWrapper>
      <ValueContainerWrapper>
        <div className="left">
            <h4>Our Values</h4>
        <h1>We live and work by an important set of values</h1>
        </div>
        <ValuesListContainerWrapper className='grid-col-2'>
          <div className="value-box">
            <div className="ico-wrap">
              <FaTeamspeak />
            </div>
           <h3>Empower & Support</h3>
           <p>We support each other personally and professionally, allowing our unique talents and capabilities to flourish.</p>
          </div>
          <div className="value-box">
            <div className="ico-wrap">
                  <GiTeamIdea />           
            </div>
           <h3>Go Further Together</h3>
           <p>We are better together. We collaborate with and help others, both inside and outside of Generation.</p>
          </div>
            <div className="value-box">
                <div className="ico-wrap">
                 <LuServerCog />
                </div>
           <h3>Here To Serve</h3>
           <p>We commit to enabling the growth of our participants, and to providing great talent for our employer partners.</p>
          </div>
            <div className="value-box">
                <div className="ico-wrap">
                 <SiDavinciresolve />
                </div>
           <h3>Solve Problems That Matter</h3>
           <p>We work on activities that advance our mission, and rigorously measure impact to allocate time and resources.</p>
          </div>
          
        </ValuesListContainerWrapper>
      </ValueContainerWrapper>
    </CoreInfoContainerWrapper>
  )
}

const CoreInfoContainerWrapper = styled.section`
  width: 100%;
  height: max-content;
  padding: 20px;
   @media screen and (max-width: 430px){
    padding: 0;
   }
`
const LeftContentWrapper = styled.article`
 display: grid;
 grid-template-columns: 40% 60%;
 place-items: center;
 gap: 1rem;
 height: 60vh;
 padding: 20px;
 .gridBox{
    width: 100%;
    height: 100%;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.014);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        border-radius: inherit;
    }
 }
 .gridBox-l{
    transform: translateX(-2rem);
    border-radius: 10px;
    box-shadow: 0 1rem 40px rgba(0, 0, 0, 0.014);
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-y: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .txt{
      p{
        max-width: 700px;
      }
    }
 }
 @media screen and (max-width: 430px) {
  grid-template-columns: 100%;
  height: max-content;
  padding: 5px;
  .gridBox, .gridBox-l{
   transform: translate(0);
   padding: 0;
  }
 }
`
const RightContentWrapper = styled.article`
 display: grid;
 grid-template-columns: 60% 40%;
 place-items: center;
 gap: 1rem;
 height: 60vh;
 padding: 20px;
 .banner{
    width: 100%;
    height: 100%;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.014);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        border-radius: inherit;
    }
 }
 .text{
    transform: translateX(2rem);
    border-radius: 10px;
    box-shadow: 0 1rem 40px rgba(0, 0, 0, 0.014);
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-y: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .txt{
      p{
        max-width: 700px;
      }
    }
 }
  @media screen and (max-width: 430px) {
    padding: 5px;
   grid-template-columns: 100%;
   height: max-content;
  .text, .banner{
   transform: translate(0);
   padding: 0;
  }
 }
`
const ValueContainerWrapper = styled.article`
  width: 100%;
  height: 70vh;
  background: url(${vbImg});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  .left{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    height: 98%;
  }
  h4{
    color: red;

  }
  h1{
    color: #fff;
  }
 @media screen and (max-width: 430px){
  flex-direction: column;
  height: max-content;
  margin: 10px 0;
  .left{
    width: 100%;
  }
 }
 
`
const ValuesListContainerWrapper = styled.article`
 width: 60%;
 height: 98%;
 .value-box{
    width: 100%;
    height: max-content;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.192);
    cursor: pointer;
    color: white;
    padding: 10px;
    .ico-wrap{
        width: 60px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: red;
        border-radius: .5rem;
        box-shadow: 0 15px 30pc rgba(0, 0, 0, 0.192);
    }
    h3{
      font-size: 1.4rem;
      font-weight: 600;
    }
 }
 @media screen and (max-width: 430px){
  width: 100%;
 }
`
export default CoreInfo