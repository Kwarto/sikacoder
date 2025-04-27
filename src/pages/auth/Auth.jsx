import React, { useState } from 'react'
import { Login, Register } from '../../components';
import styled from 'styled-components';
import authImg from '../../assets/images/footer-bg.png'
const Auth = () => {
  const [login, setLogin] = useState(false);
  return (
    <AuthContainerWrapper className='grid-col-2'>
        <LeftContainerWrapper>

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
  padding: 10px;
  @media screen and (max-width: 430px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background: rgb(255, 255, 255);
  } 
`
export default Auth