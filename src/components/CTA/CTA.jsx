import React from "react";
import styled from "styled-components";
import newsBg from '../../assets/images/news.svg'
import ctaImg from "../../assets/images/banner_shape02.png";
import { motion } from "framer-motion";
motion;
const CTA = () => {
  return (
    <CTAContainerWrapper>
      <motion.div
        className="cta-wrapper"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{duration: 1.2}}
      >
        <h1>
          Join <span>1000+</span> of Learners and Developer Who Already Trust{" "}
          <span>Sikacoder </span>{" "}
        </h1>
        <div className="btn">Intern Here</div>
        <img src={ctaImg} alt="zig-img" />
      </motion.div>
    </CTAContainerWrapper>
  );
};

const CTAContainerWrapper = styled.article`
  width: 98%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .cta-wrapper {
    width: 100%;
    height: 98%;
    background: linear-gradient(135deg,rgba(6, 8, 8, 0.986), rgba(1, 63, 63, 0.966)),url(${newsBg});
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-left: 20px;
    position: relative;
    h1 {
      color: rgb(255, 255, 255);
      max-width: 600px;
      padding: 12px 0;
      span {
        color: red;
      }
    }
    .btn{margin: 8px 0;}
    img {
      position: absolute;
      right: 2rem;
      bottom: 2rem;
      width: 20%;
      opacity: 0.4;
    }
  }
   @media screen and (max-width: 430px) {
    width: 100%;
    height: 50vh;
    padding: 5px;
    .cta-wrapper{
      width: 100%;
      height: 98%;
      margin-left: 0;
      padding: 10px;
      h1{
        max-width: 700px;
      }
    }
  }
`;

export default CTA;
