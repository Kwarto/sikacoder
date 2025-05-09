/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Video = ({setIsModal}) => {
  return (
    <VideoModalContainer>
      <motion.article 
       initial={{opacity: 0, scale: 0}}
       animate={{opacity: 1, scale: 1}}
       transition={{duration: 1}}
       className="tutorial-wrapper"
      >
       <div className="close" onClick={() => {setIsModal(false)}}>
         <MdClose />
       </div>
      </motion.article>
    </VideoModalContainer>
  );
};

const VideoModalContainer = styled.section`
  .tutorial-wrapper {
    width: 80%;
    height: 85vh;
    background: blue;
    border-radius: 10px;
    position: fixed;
    top: 5.3rem;
    left: 16rem;
    padding: 10px;
    .close{
        width: 30px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: red;
        box-shadow: 0 10px 0 rgba(0, 0, 0, 0.062);
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        font-size: 1.3rem;
        font-weight: 600;
    }
  }
  @media screen and (max-width: 430px) {
    .tutorial-wrapper{
      top: 40%;
      left: .5rem;
      width: 96%;
      height: 35vh;
    }
  }
`;

export default Video;
