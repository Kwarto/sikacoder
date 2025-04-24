import React from 'react'
import styled from 'styled-components'
import logoImg from '../../assets/images/sc-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <NavbarContainerWrapper>
        <LogoWrapper onClick={() => {navigate('/')}}>
          <img src={logoImg} alt="sikacoder-logo" />
        </LogoWrapper>
        <MenuListContainerWrapper>
          <NavLink className='nav_link' to={'/'}>
            Home
          </NavLink>
          <NavLink className='nav_link' to={'/about'}>
            About
          </NavLink>
            <NavLink className='nav_link' to={'/services'}>
            Services
          </NavLink>
            <NavLink className='nav_link' to={'/internship'}>
            Courses
          </NavLink>
            <NavLink className='nav_link' to={'/network'}>
            Network
          </NavLink>
          <NavLink className='nav_link' to={'/blog'}>
            Blog
          </NavLink>
        </MenuListContainerWrapper>
        <div className="btn">Get Started</div>
    </NavbarContainerWrapper>
  )
}

const NavbarContainerWrapper = styled.nav`
 width: 100%;
 height: 70px;
 background: #fff;
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.027);
 display: flex;
 align-items: center;
 justify-content: space-between;
`
const LogoWrapper = styled.div`
 width: 14%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 img{
    width: 160px;
    transform: translateX(-1rem);
 }
`
const MenuListContainerWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  .nav_link{
    font-size: 1.3rem;
    font-weight: 500;
    color: rgb(1, 17, 17);
    padding: 0 25px;
    transition: color 0.3s ease-in-out;
    &:hover{
      color: rgb(3, 185, 185);
    }
  }
`


export default Navbar