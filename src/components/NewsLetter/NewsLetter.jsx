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
        <h2>Stay Updated With Latest Offers, Products & Events</h2>
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
  height: 70vh;
  overflow-y: hidden;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .sub-wrap {
    width: 80%;
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
    gap: 1rem;
    text-align: center;
    h2{
        font-size: 1.8rem;
        color: rgb(243, 242, 242);
        max-width: 400px;
        text-align: center;
    }
    p{
        color: rgb(255, 255, 255);
        max-width: 400px;
        padding: 5px 0;
    }
    .input-area{
        width: 50%;
        height: 60px;
        background: #fff;
        border-radius: .5rem;
        box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.096);
        display: flex;
        align-items: center;
        justify-content: center;
        .input-field{
            width: 70%;
            height: 100%;
            input{
                background: rgb(250, 249, 249);
                width: 100%;
                height: inherit;
                padding: 0 15px;
                font-size: 1rem;
            }
        }
        button{
         width: 29%;
         height: 92%;
         background: rgb(223, 49, 57);
         border-radius: 10px;
         box-shadow: 0 1rem 10px rgba(0, 0, 0, 0.096);
         color: #fff;
         cursor: pointer;
         font-size: 1rem;
         font-weight: 600;
         transition: background 0.3s ease-in-out;
         &:hover{
            background: red;
         }
        }
    }
  }
  @media screen and (max-width: 430px) {
    height: 60vh;
    .sub-wrap{
      width: 100%;
      height: 98%;
      text-align: center;
      gap: 1.5rem;
      padding: 5px;
      margin: 0;
      h1{
        text-align: center;
      }
      p{
        padding: 6px 0;
      }
      .input-area{
        width: 98%;
       .input-field{
         width: 65%;
       }
       button{
        width: calc(100% - 65%);
        font-size: 1rem;
       }
      }
    }
  }
`;

export default NewsLetter;
