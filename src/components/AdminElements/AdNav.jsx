import React from 'react'
import styled from 'styled-components'
import logoImg from '../../assets/images/sc-logo.png';
import { useUserAuth } from '../../context/UserAuthContext';
const AdNav = ({isDrawer, setIsDrawer}) => {
  const {user} = useUserAuth()
  return (
    <AdNavContainer>
      <LogoWrapper>
         <img src={logoImg} alt="sikacoder-logo" />
      </LogoWrapper>
      <ProfileWrapper onClick={() => {setIsDrawer(!isDrawer)}}>
        <h4>{user?.displayName.substring(0,1)}J</h4>
      </ProfileWrapper>
    </AdNavContainer>
  )
}

const AdNavContainer = styled.nav`
 width: calc(100% - 15rem);
 height: 70px;
 background: rgba(255, 255, 255, 0.678);
 box-shadow: 0 1rem 40px rgba(4, 46, 35, 0.048);
 backdrop-filter: blur(10px);
 -webkit-backdrop-filter: blur(10px);
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px;
 position: fixed;
 left: 15rem;
 right: 0;
 z-index: 100;
 @media screen and (max-width: 430px) {
  left: 0;
  width: 100%;
  height: 80px;
 }
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

 @media screen and (max-width: 430px){
   width: 30%;
   img{
    width: 230px;
   }
 }
`
const ProfileWrapper = styled.div`
  width: 50px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(12, 68, 68);
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  cursor: pointer;
  h4{
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media screen and (max-width: 430px) {
    width: 40px;
    margin-right: 15px;
  }  
`

export default AdNav