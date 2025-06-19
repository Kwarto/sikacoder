import React, {useState} from "react";
import styled from "styled-components";
import bgImg from "../../assets/images/in_hero_bg.jpg";
import { FaInfo } from "react-icons/fa6";


const InternDetail = ({usrId, interns, setIsDetail }) => {
 console.log(usrId)
  return (
    <InternDetailContainerWrapper>
      <div
        className="close"
        onClick={() => {
          setIsDetail(false);
        }}
      >
        X
      </div>
      {interns &&
        interns.map((intern) => {
          return (
            <article key={intern.id} className="grid-col-2" id={'user' `${intern.id}`} onClick={getUser}>
              <div className="top-wrap">
                <div className="img-card">
                  <img src={intern.userProfile} alt="" />
                </div>
                <div className="meta-info">
                  <h3>{intern.fullName}</h3>
                  <h4>{intern.email}</h4>
                  <div className="add-info">
                    <h4>{intern.contactNumber}</h4>
                  </div>
                </div>
              </div>
              <div className="top-wrap">
                <div className="ico-wrap">
                  <FaInfo />
                </div>
                <div className="meta-info">
                  <h3>{intern.domain}</h3>
                  <h4>{intern.country}, Accra</h4>
                  <h4>{intern.college}</h4>
                </div>
              </div>
            </article>
          );
        })}
    </InternDetailContainerWrapper>
  );
};

const InternDetailContainerWrapper = styled.section`
  width: 60rem;
  height: 88%;
  background: url(${bgImg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(2, 19, 12, 0.021);
  padding: 10px;
  position: absolute;
  top: 75px;
  right: 3px;
  z-index: 1500;
  .close {
    width: 25px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(58, 189, 75);
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(2, 19, 12, 0.021);
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 1px;
  }
  article {
    .top-wrap {
      display: flex;
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 0.5rem;
      border: 1px solid rgb(240, 237, 237);
      box-shadow: inset 0 0 10px rgba(2, 19, 12, 0.021);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      padding: 10px;
      .img-card {
        width: 120px;
        height: 90%;
        background: rgb(250, 249, 249);
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(2, 19, 12, 0.021);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 98px;
          border-radius: inherit;
          object-fit: cover;
        }
      }
      .meta-info {
        transform: translateX(6rem);
        h4 {
          padding: 4px 0;
          color: teal;
        }
      }
      .add-info {
        text-align: left;
      }
      .ico-wrap {
        width: 90px;
        height: 90%;
        background: rgb(97, 200, 248);
        border-radius: 8px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
      }
    }
    .apply-info {
    }
  }
`;

export default InternDetail;
