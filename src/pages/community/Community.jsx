/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Main } from "../../layout";
import comBg from "../../assets/images/com-hero.png";
import { MdArrowForward } from "react-icons/md";
import {
  FaDiscord,
  FaFireFlameCurved,
  FaSlack,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { motion } from "framer-motion";
const Community = () => {
  return (
    <Main>
      <CommunityContainerWrapper>
        <CommunityHeaderContainer className="grid-col-2">
          <HeaderContentWrapper>
            <h1>The Only Community of Mentors And Pros You Will Ever Need.</h1>
            <p>Join the Sikacoder Network. The ultimate hub where aspiring tech minds connect with seasoned pros and mentors. Level up your skills, grow your career, and get the support you need. Don’t miss out — become part of the future today!
            </p>
            <div className="btn">
              <span>
                Join Community on Slack <MdArrowForward />
              </span>
            </div>
          </HeaderContentWrapper>
          <motion.HeaderBannerContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={comBg} alt="" />
          </motion.HeaderBannerContainer>
        </CommunityHeaderContainer>
        <ListContainerWrapper className="grid-col-4">
          <motion.div
            className="com-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="ico-wrap">
              <FaDiscord />
            </div>
            <div className="meta">
              <h3>
                <span>Sikacoder </span>on Discord
              </h3>
              <p>
                Join our discord community Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Et cum aut unde blanditiis
                expedita hic.
              </p>
              <strong>
                <FaFireFlameCurved /> Join Now
              </strong>
            </div>
          </motion.div>
          <motion.div
            className="com-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <div className="ico-wrap">
              <FaSlack />
            </div>
            <div className="meta">
              <h3>
                <span>Sikacoder </span>on Slack
              </h3>
              <p>
                Join our discord community Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Et cum aut unde blanditiis
                expedita hic.
              </p>
              <strong>
                <FaFireFlameCurved /> Join Now
              </strong>
            </div>
          </motion.div>
          <motion.div
            className="com-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <div className="ico-wrap">
              <FaTelegram />
            </div>
            <div className="meta">
              <h3>
                <span>Sikacoder </span>on Telegram
              </h3>
              <p>
                Join our discord community Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Et cum aut unde blanditiis
                expedita hic.
              </p>
              <strong>
                <FaFireFlameCurved /> Join Now
              </strong>
            </div>
          </motion.div>
          <motion.div
            className="com-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
          >
            <div className="ico-wrap">
              <FaWhatsapp />
            </div>
            <div className="meta">
              <h3>
                <span>Sikacoder </span>on WhatsApp
              </h3>
              <p>
                Join our discord community Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Et cum aut unde blanditiis
                expedita hic.
              </p>
              <strong>
                <FaFireFlameCurved /> Join Now
              </strong>
            </div>
          </motion.div>
        </ListContainerWrapper>
      </CommunityContainerWrapper>
    </Main>
  );
};

const CommunityContainerWrapper = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CommunityHeaderContainer = styled.header`
  width: 100%;
  height: 80vh;
  background: rgba(235, 200, 235, 0.067);
  padding: 10px 20px;
  @media screen and (max-width: 430px) {
    padding: 10px;
  }
`;
const HeaderContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h1 {
    max-width: 500px;
  }
  p{
    max-width: 500px;
    padding: 8px 0;
  }
  .btn {
    align-self: flex-start;
    width: 40%;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
  @media screen and (max-width: 430px) {
    .btn {
      width: 60%;
      height: 55px;
    }
  }
`;
const HeaderBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
  }
  @media screen and (max-width: 430px) {
    img{
      width: 70%;
    }
  }
`;
const ListContainerWrapper = styled.section`
  width: 100%;
  height: 60vh;
  background: rgba(235, 200, 235, 0.067);
  padding: 0 20px;
  .com-card {
    width: 100%;
    height: max-content;
    background: #fff;
    border-radius: 1rem;
    box-shadow: inset 0 1rem 40px rgb(255, 255, 255);
    border: 1px solid #cccccc1c;
    cursor: pointer;
    padding: 10px;
    transition: transform ease-in-out 0.3s;
    .ico-wrap {
      width: 80px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background: rgb(9, 168, 168);
      box-shadow: inset 0 1rem 40px rgba(5, 123, 128, 0.336);
      color: #fff;
      font-size: 2rem;
      margin: 6px 0;
    }
    .meta {
      h3 {
        font-size: 1.4rem;
        font-weight: 600;
        span {
          color: red;
        }
      }
      strong {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.4rem;
        color: rgb(74, 208, 241);
        padding: 5px 0;
      }
    }
    &:hover {
      transform: scale(1.01);
    }
  }
  @media screen and (max-width: 430px) {
    height: max-content;
    .com-card {
      height: max-content;
    }
  }
`;

export default Community;
