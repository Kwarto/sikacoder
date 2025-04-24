/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import newsBg from '../../assets/images/news.svg'
const NewsLetter = () => {
  return (
    <NewsLetterContainerWrapper>
      <motion.div
        className="sub-wrap"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Stay Updated With Latest Offers, Products & Events</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam consectetur voluptatem blanditiis rem, sit error quaerat suscipit alias earum.</p>
        <div className="input-area">
          <div className="input-field">
            <input type="email" name="email" id="email" placeholder="exaample@gmail.com"/>
          </div>  
          <button>Keep me updated</button>
        </div>
      </motion.div>
    </NewsLetterContainerWrapper>
  );
};

const NewsLetterContainerWrapper = styled.section`
  width: 100%;
  height: 80vh;
  overflow-y: hidden;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .sub-wrap {
    width: 98%;
    height: 95%;
    background: linear-gradient(135deg,rgba(6, 8, 8, 0.986), rgba(1, 63, 63, 0.966)),url(${newsBg});
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.096);
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: start;
    h1{
        color: rgb(243, 242, 242);
        max-width: 650px;
        text-align: start;
    }
    p{
        color: rgb(255, 255, 255);
        max-width: 650px;
        padding: 10px 0;
    }
    .input-area{
        width: 48%;
        height: 60px;
        background: #fff;
        border-radius: .5rem;
        box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.096);
        display: flex;
        align-items: center;
        justify-content: center;
        .input-field{
            width: 75%;
            height: 100%;
            input{
                background: rgb(250, 249, 249);
                width: 100%;
                height: inherit;
                padding: 0 15px;
                font-size: 1.3rem;
            }
        }
        button{
         width: 24%;
         height: 92%;
         background: rgb(223, 49, 57);
         border-radius: 10px;
         box-shadow: 0 1rem 10px rgba(0, 0, 0, 0.096);
         color: #fff;
         cursor: pointer;
         font-size: 1.3rem;
         font-weight: 600;
         transition: background 0.3s ease-in-out;
         &:hover{
            background: red;
         }
        }
    }
  }
`;

export default NewsLetter;
