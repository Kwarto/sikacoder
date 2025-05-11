import React, { useState } from 'react'
import styled from 'styled-components'
import avatarImg from '../../assets/icons/avatar.png'
import { MdArrowDropDown } from 'react-icons/md'
import { RiMenu4Fill } from "react-icons/ri";
import UserModal from './UserModal';

const TopNav = ({setShowSideBar}) => {
  const [isModal, setIsModal] = useState(true);
  return (
    <TopNavContainerWrapper>
     <div className="left">
        <h4>Hey, Joey</h4>
        <p>Let's learn something new today!</p>
     </div>
     <div className="bars" onClick={() => {setShowSideBar(true)}}>
        <RiMenu4Fill />
     </div>
     <div className="right">
        <div className="usr" onClick={() => {setIsModal(!isModal)}}>
            <div className="avatar">
                <img src={avatarImg} alt="usr-profile" />
            </div>
            <h4>Joey Austen <MdArrowDropDown /> </h4>
        </div>
     </div>
     {isModal && <UserModal isModal={isModal}/>}
    </TopNavContainerWrapper>
  )
}

const TopNavContainerWrapper = styled.nav`
  width: 100%;
  height: 70px;
  background: rgb(255, 255, 255);
  box-shadow: 0 10px 10px rgba(97, 151, 151, 0.055);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  .left{
    h4{
        font-weight: 600;
        color: rgb(5, 63, 63);
    }
  }
  .bars{
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding-left: 8px;
  }
  .right{
    .usr{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        h4{
          display: flex;
          align-items: center;
          font-weight: 400;
        }
        .avatar{
            width: 45px;
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            background: rgb(233, 231, 231);
            padding: 5px;
            img{
                width: 100%;
            }
        }
    }
  }

  @media screen and (max-width: 912px) {
    .left{
      display: none;
    }
    .bars{
      display: flex;
    }
  }
`

export default TopNav