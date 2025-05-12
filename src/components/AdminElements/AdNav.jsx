import React from 'react'
import styled from 'styled-components'
import logoImg from '../../assets/images/sc-logo.png';
import avImg from '../../assets/icons/avatar.png'
const AdNav = () => {
  return (
    <AdNavContainer>
      <LogoWrapper>
         <img src={logoImg} alt="sikacoder-logo" />
      </LogoWrapper>
      <ProfileWrapper>
        <img src={avImg} alt="profile" />
      </ProfileWrapper>
    </AdNavContainer>
  )
}

const AdNavContainer = styled.nav`
 width: 100%;
 height: 70px;
 background: rgba(255, 255, 255, 0.678);
 box-shadow: 0 1rem 40px rgba(4, 46, 35, 0.048);
 backdrop-filter: blur(10px);
 -webkit-backdrop-filter: blur(10px);
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px;
`;

const LogoWrapper = styled.div`
 width: 12%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: flex-start;
 cursor: pointer;
 padding: 0 8px;
 img{
    width: 110px;
 }
`
const ProfileWrapper = styled.div`
  width: 50px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  cursor: pointer;
  img{
    width: 80%;
  }
`

export default AdNav