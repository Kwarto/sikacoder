/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

const Faqs = () => {
  const [queryTerm, setQueryTerm] = useState('');

  const handleGenerateSolu  = (e) => {
    e.preventDefault();
    console.log(queryTerm)
  }
  return (
    <FrequentlyAskQuestionWrapper>
      <div className="head">
        <h4>Generate A Solution</h4>
        <h1>Frequently Ask Question</h1>
        <h2>
          <span>
            What problem are you trying to solve? Get immediate feedback
          </span>
        </h2>
      </div>
      <article className="question-area">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.2 }}
        >
          <form onSubmit={handleGenerateSolu}>
            <input
              placeholder='Describe your problem, e.g., "How can I intern here?"'
              onChange={(e) => setQueryTerm(e.target.value)}
              value={queryTerm}
            />
            <div className="answer">
              <h4>How can I intern here?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi distinctio aut sit saepe animi voluptas aperiam non facilis, quas porro quidem modi est expedita, assumenda illo magni similique ab neque aliquid sequi, magnam facere autem. Perspiciatis pariatur a sapiente sunt quidem id totam excepturi, exercitationem, iure ad consequatur, harum est?
              </p>
            </div>
            <button type="submit">Generate solution</button>
          </form>
        </motion.div>
        <div className="left-container">
          <h3>Questions you can ask:</h3>
          <span>
            <strong>Note: </strong>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid impedit laboriosam earum repellat
            consequuntur dolorum quisquam?
          </span>
          <motion.div
            className="quest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="sm-ico">
              <FaCheck />
            </div>
            <p>How can I register Sikacoder account?</p>
          </motion.div>
          <motion.div
            className="quest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.8 }}
          >
            <div className="sm-ico">
              <FaCheck />
            </div>
            <p>Brief me about the Sikacoder internship program</p>
          </motion.div>
          <motion.div
            className="quest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 2.2 }}
          >
            <div className="sm-ico">
              <FaCheck />
            </div>
            <p>How will I benefit from Sikacoder?</p>
          </motion.div>
          <motion.div
            className="quest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 2.6 }}
          >
            <div className="sm-ico">
              <FaCheck />
            </div>
            <p>How can I submit course tasks?</p>
          </motion.div>
        </div>
      </article>
    </FrequentlyAskQuestionWrapper>
  );
};

const FrequentlyAskQuestionWrapper = styled.section`
  width: 100%;
  height: 100vh;
  margin: 5px auto;
  padding: 30px 5px;
  .head {
    h4 {
      color: red;
    }
    h2 {
      font-weight: 400;
    }
  }
  .question-area {
    width: 100%;
    height: 75%;
    background: rgba(40, 129, 151, 0.041);
    border-radius: 1rem;
    margin-top: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 60% 40%;
    place-items: center;
    gap: 1rem;

    .form-container {
      width: 100%;
      height: 95%;
      background: #fff;
      border-radius: 1rem;
      form {
        width: 100%;
        height: 100%;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        input {
          width: 100%;
          height: 15%;
          padding: 5px 0;
          font-size: 1.135rem;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          background: rgb(0,0,0);
          border-radius: 10px;
          color: #ccc;
          padding: 12px;
        }
        .answer {
          width: 100%;
          height: 70%;
          background: rgb(0, 0, 0);
          border-radius: 10px;
          color: #fff;
          margin: 5px 0;
          padding: 12px;
          h4{
            font-size: 22px;
            padding-bottom: 10px;
          }
          p{
            max-width: 650px;
            color: azure;
            font-size: 16px;
            font-weight: 400;
          }
        }
        button {
          background: rgb(73, 179, 221);
          border-radius: 10px;
          box-shadow: inset 0 0 20px rgba(40, 129, 151, 0.041);
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
          width: 30%;
          height: 55px;
          cursor: pointer;
        }
      }
    }
    .left-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 10px;
      span {
        padding: 12px 0;
        font-weight: 300;
      }
      .quest {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        padding: 12px 0;
        .sm-ico {
          width: 25px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50px;
          color: rgb(128, 218, 128);
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    height: max-content;
    .question-area{
      grid-template-columns: 100%;
      padding: 0;
      .form-container{
        form{
          padding: 8px 10px;
          button{
            width: 55%;
          }
        }
      }
    }
  }
`;

export default Faqs;
