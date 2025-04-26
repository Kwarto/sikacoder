/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import bImg1 from '../../assets/images/vision.jpg'
const MoreInfo = () => {
  return (
    <MoreInfoContainerWrapper>
     <motion.article className="more-service-ls-1" initial={{opacity: 0, scale: 0}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1}}>
      <div className="left-content">
       <h1>General Business Solution Consultancy</h1>
       <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi fuga iste magni distinctio pariatur.</h4>
       <p>From strategy to implementation, our team of industry-leading professionals ensures that you receive the highest level of service and results. Let us unlock your digital potential and propel your business into the future. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aliquid. Inventore, eaque! Reprehenderit, atque aspernatur, repellat, laudantium in officia recusandae voluptatum perspiciatis ab quis fugit.</p>
       <div className="btn">Cotact Us</div>
      </div>
      <motion.div className="right-banner" initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}>
        <img src={bImg1} alt="" />
      </motion.div>
     </motion.article>
      <motion.article className="more-service-ls-1" initial={{opacity: 0, translateX: '-100%'}} whileInView={{opacity: 1, translateX: 0}} transition={{duration: 1}}>
       <motion.div className="right-banner" initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}>
        <img src={bImg1} alt="" />
      </motion.div>
      <div className="left-content sec">
       <h1>Internship & <br />Bootcamp Program</h1>
       <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi fuga iste magni distinctio pariatur.</h4>
       <p>From strategy to implementation, our team of industry-leading professionals ensures that you receive the highest level of service and results. Let us unlock your digital potential and propel your business into the future. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aliquid. Inventore, eaque! Reprehenderit, atque aspernatur, repellat, laudantium in officia recusandae voluptatum perspiciatis ab quis fugit.</p>
       <div className="btn">Intern Here</div>
      </div>
     </motion.article>
     <motion.article className="more-service-ls-1" initial={{opacity: 0, zoom: '0'}} whileInView={{opacity: 1, zoom: 1}} transition={{duration: 1}}>
     <div className="left-content last">
       <h1>Project Management</h1>
       <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi fuga iste magni distinctio pariatur.</h4>
       <p>From strategy to implementation, our team of industry-leading professionals ensures that you receive the highest level of service and results. Let us unlock your digital potential and propel your business into the future. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aliquid. Inventore, eaque! Reprehenderit, atque aspernatur, repellat, laudantium in officia recusandae voluptatum perspiciatis ab quis fugit.</p>
       <div className="btn">
        Contact Us
       </div>
      </div>
      <div className="left-content last">
       <h1>Partnership & Sponsorship</h1>
       <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi fuga iste magni distinctio pariatur.</h4>
       <p>From strategy to implementation, our team of industry-leading professionals ensures that you receive the highest level of service and results. Let us unlock your digital potential and propel your business into the future. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, aliquid. Inventore, eaque! Reprehenderit, atque aspernatur, repellat, laudantium in officia recusandae voluptatum perspiciatis ab quis fugit.</p>
       <div className="btn">
        Contact Us
       </div>
      </div>
     </motion.article>
    </MoreInfoContainerWrapper>
  )
}

const MoreInfoContainerWrapper = styled.section`
    width: 100%;
    height: max-content;
    padding: 10px;
    .more-service-ls-1{
        width: 100%;
        height: 80vh;
        box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.137);
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-image: linear-gradient(rgba(223, 226, 226, 0.141), rgba(0, 128, 128, 0.141));
        border-radius: 10px;
        gap: 1rem;
        margin: 15px 0;
        .left-content,.right-banner{
            width: 50%;
            h4,p{
                max-width: 550px;
                padding: 8px 0;
            }
        }
        .sec{
            padding-left: 20px;
        }
        .last{
            h1{
                max-width: 700px;
            }
        }
        .right-banner{
          width: 50%;
          height: 85%;
          background: #fcfcff;
          border-radius: 10px;
          overflow-y: hidden;
          img{
            width: 100%;
            object-fit: cover;
            border-radius: inherit;
          }
        }
    }
    @media screen and (max-width: 430px) {
        padding: 0;
        .more-service-ls-1{
            flex-direction: column;
        height: max-content;
        .left-content, .right-banner{
            width: 100%;
            height: max-content;
            padding: 0;
        }
        }
    }
`

export default MoreInfo