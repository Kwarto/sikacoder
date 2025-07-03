import { signOut } from 'firebase/auth'
import React from 'react'
import { FaBookOpen, FaGears } from 'react-icons/fa6'
import { MdLogout } from 'react-icons/md'
import styled from 'styled-components'
import { auth } from '../../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'

const Modal = () => {
  const navigate = useNavigate();
  const {user} = useUserAuth();
  return (
    <ModalContainerWrapper>
      <div className="meta-info">
        <h4>{user?.displayName}</h4>
        <p>{user?.email}</p>
        <span>Harlow, UK</span>
      </div>
      <div className="link-area">
        <div className="link-wrapper">
            <FaGears className='linkIco' />
            <span>Manage Account</span>
        </div>
        <div className="link-wrapper" onClick={() => {navigate("/overview")}}>
            <FaBookOpen className='linkIco' />
            <span>My Course</span>
        </div>
        <div className="link-wrapper" onClick={ () => signOut(auth)}>
            <MdLogout className='linkIco' />
            <span>Sign Out</span>
        </div>
      </div>
    </ModalContainerWrapper>
  )
}

const ModalContainerWrapper = styled.div`
  width: 12rem;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: .5rem;
  background: #fff;
  border-radius: .5rem;
  cursor: pointer;
  z-index: 100;
  padding: 10px;
  overflow-y: hidden;
  .meta-info, .link-area{
    width: 100%;
    margin-bottom: 6px;
    overflow-y: hidden;
    h4{
        color: rgb(5, 174, 180);
    }
    p{
        color: rgb(1, 48, 48);
    }
    span{
        font-weight: 600;
        color: rgb(5, 174, 180);
    }
    .link-wrapper{
        background: #fcfcfc;
        border-radius: .3rem;
        width: 100%;
        height: 35px;
        margin: 5px 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        gap: 1rem;
        font-size: 18px;
        padding: 8px;
        overflow-y: hidden;
        transition: box-shadow 0.3s ease-in-out;
        span{
            color: rgb(1, 48, 48);
            font-weight: 500;
        }
        .linkIco{
          color: rgb(5, 174, 180);
        }
        &:hover{
            box-shadow: 0 0 10px rgba(28, 37, 37, 0.075);
        }
    }
  }
`

export default Modal