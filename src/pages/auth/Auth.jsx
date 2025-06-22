import React, { useState } from 'react'
import { Login, Register } from '../../components';
import styled from 'styled-components';
import authImg from '../../assets/images/footer-bg.png';
import lfImg from '../../assets/images/avatar.png';
import fvImg from '../../assets/icons/favicon.png';

const Auth = () => {
  const [login, setLogin] = useState(true);
  return (
    <AuthContainerWrapper className='grid-col-2'>
        <LeftContainerWrapper>
          <div className="content">
            <div className="cap">
              <img src={fvImg} alt="" />
              <h4>Sikacoder</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos temporibus minus sapiente atque labore eaque facilis exercitationem, dolores eligendi.</p>
            </div>
            <div className="side-img">
              <img src={lfImg} alt="" />
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
  @media screen and (max-width: 430px) {
   grid-template-columns: 100%;
  }
`
const LeftContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  background: url(${authImg});
  background-position: center;
  background-size: cover;
  .content{
    width: 100%;
    height: 100%;
    position: relative;
    .cap{
      width: 500px;
      height: 200px;
      background: rgba(5, 43, 58, 0.89);
      box-shadow: inset 0 0 10px rgba(5, 43, 58, 0.76);
      border-radius: 1rem;
      padding: 10px;
      position: absolute;
      top: 8rem;
      left: 1rem;
      img{
        width: 50px;
      }
      h4{
        font-weight: 700;
        color: red;
      }
      p{
        max-width: 400px;
        color: #ccc;
      }
    }
    .side-img{
      width: 65%;
      position: absolute;
      bottom: -8rem;
      right: 0;
      z-index: 1000;
      img{
        width: 100%;
        opacity: .6;
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