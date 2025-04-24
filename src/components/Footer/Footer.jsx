import React from 'react'
import styled from 'styled-components'
import footerBg from '../../assets/images/footer-bg.png'
import logoImg from '../../assets/images/sc-logo.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'
import { MdArrowRight } from 'react-icons/md'
const Footer = () => {
  return (
    <FooterContainerWrapper>
       <LeftContainer>
        <div className="logo-wrapper">
         <img src={logoImg} alt="" />
        </div>
        <div className="txt">
          <p>Sikacoder is a tech-driven firm dedicated to empowering young
            talents through hands-on internships, offering training in web
            development, software engineering, and real-world project
            collaboration.</p>
        </div>
        <div className="social-wrapper">
          <h3>Follow Us On:</h3>
          <div className="social-ls-wp">
            <div className="ico-wp">
              <FaFacebook />
            </div>
            <div className="ico-wp">
              <FaLinkedin />
            </div>
            <div className="ico-wp">
              <FaInstagram />
            </div>
            <div className="ico-wp">
              <FaYoutubeSquare />
            </div>
          </div>
        </div>
       </LeftContainer>
       <RightContainer>
         <div className="footer-links-wp">
          <h3>Quick Links</h3>
          <div className="links-wp">
            <li><MdArrowRight className='ico' /> Courses</li>
            <li><MdArrowRight className='ico' /> About Us</li>
            <li><MdArrowRight className='ico' /> Get In Touch</li>
            <li><MdArrowRight className='ico' /> Community</li>
            <li><MdArrowRight className='ico' /> Blog</li>
          </div>
         </div>
          <div className="footer-links-wp">
           <h3>Features</h3>
          <div className="links-wp">
            <li><MdArrowRight className='ico' />Internship Roadmap</li>
            <li><MdArrowRight className='ico' />Internship Program</li>
            <li><MdArrowRight className='ico' />Mentorship</li>
            <li><MdArrowRight className='ico' />Development</li>
            <li><MdArrowRight className='ico' />Resources</li>
          </div>
         </div>
          <div className="footer-links-wp">
          <h3>Legal Information</h3>
          <div className="links-wp">
            <li><MdArrowRight className='ico' /> Privacy Policy</li>
            <li><MdArrowRight className='ico' />Terms & Conditions</li>
            <li><MdArrowRight className='ico' />Internship Policy</li>
            <li><MdArrowRight className='ico' />Data Security</li>
            <li><MdArrowRight className='ico' />Our Sponsors</li>
          </div>
         </div>
       </RightContainer>
    </FooterContainerWrapper>
  )
}

const FooterContainerWrapper = styled.footer`
  width: 98%;
  height: 70vh;
  background: linear-gradient(rgba(0, 14, 14, 0.733), rgba(0, 14, 14, 0.87)),url(${footerBg});
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 30% 70%;
  place-items: center;
  gap: 1rem;
  padding: 10px;
   @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
    height: max-content;
    width: 100%;
  }
`
const LeftContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .logo-wrapper{
    width: 50%;
    img{
      width: 100%;
      transform: translateX(-1rem);
    }
  }
  .txt{
    p{
      color: #fff;
    }
  }
  .social-wrapper{
    h3{
      padding: 8px 0;
      color: #fff;
    }
    padding: 10px 0;
    .social-ls-wp{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .ico-wp{
        width: 60px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(9, 180, 171, 0.342);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: .5rem;
        box-shadow: 0 1rem 30px rgba(0, 0, 0, 0.144);
        cursor: pointer;
        color: rgb(255, 255, 255);
        font-size: 1.5rem;
      }

    }
  }
`
const RightContainer = styled.article`
 width: 100%;
 height: 100%;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 place-items: center;
 gap: .2rem;
 padding: 10px;
 .footer-links-wp{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h3{
    color: rgb(0, 247, 255);
  }
  .links-wp{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    li{
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      padding: 13px 0;
      transition: color 0.3s ease-in-out;
      .ico{
        color: rgb(0, 247, 255);
      }
      &:hover{
        color: rgb(255, 0, 0);
        .ico{
          color: rgb(255, 0, 0);
        }
      }
    }
  }
 }
  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Footer