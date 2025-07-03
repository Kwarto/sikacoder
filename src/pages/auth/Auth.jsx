import React, { useState } from 'react'
import { Login, Register } from '../../components';
import styled from 'styled-components';
import authBgVid from '../../assets/images/ai-home.mp4';
import logoImg from '../../assets/icons/favicon.png'
const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <AuthContainerWrapper className='grid-col-2'>
        <LeftContainerWrapper>
          <video src={authBgVid} autoPlay muted loop />
          <div className="notice">
            <div className="logo">
              <img src={logoImg} alt="sc-logo" />
            </div>
            <div className="note">
              <h4>Ready to Learn</h4>
              <p>Login to your account now and explore our wide range of courses. Find the one that perfect-fits your goals and start learning today at your own pace!</p>
            </div>
          </div>
        </LeftContainerWrapper>
        <RightContainerWrapper>
        {login &&<Login setLogin={setLogin} login={login} /> }
        {!login && <Register setLogin={setLogin} login={login} /> }       
        </RightContainerWrapper>
    </AuthContainerWrapper>
  )
}

const AuthContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  gap: 0;
  overflow-y: hidden;
  @media screen and (max-width: 430px) {
   grid-template-columns: 100%;
  }
`
const LeftContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  position: relative;
  video{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 655px;
    object-fit: cover;
  }
  .notice{
    width: 80%;
    height: max-content;
    background: rgba(20, 14, 53, 0.815);
    box-shadow: inset 0 0 20px rgba(20, 14, 53, 0.815);
    border: 1px solid rgba(204, 204, 204, 0.164);
    border-radius: 1rem;
    cursor: pointer;
    padding: 12px;
    position: absolute;
    top: 10rem;
    left: 4rem;
    z-index: 1000;

    .logo{
      width: 22%;
      height: 95px;
      background: rgba(12, 7, 27, 0.322);
      border: 1px solid rgba(204, 204, 204, 0.055);
      border-radius: 1rem;
      box-shadow: inset 0 0 20px rgba(20, 14, 53, 0.815);
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img{
        width: 70%;
        transform: translateX(-.5rem);
      }
    }
    .note{
      h4{
        color: red;
        font-weight: 600;
        font-size: 20px;
      }
      p{
        color: #fff;
        font-size: 18px;
      }
    }
  }
  @media screen and (max-width: 430px) {
    position: relative;
  } 
`
const RightContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 241, 241, 0.945);
  padding: 10px;
  @media screen and (max-width: 430px) {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255);
    z-index: 1000;
  } 
`
export default Auth