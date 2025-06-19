import React from 'react'
import styled from 'styled-components'
import {useUserAuth} from '../../context/UserAuthContext'
const Loader = () => {
    const {user} = useUserAuth()
  return (
    <LoaderContainer>
     <div className="mid">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
     </div>
     <h1>SIKACODER</h1>
     <div className="alert">
        {!user ?
        <h4>Please Register Account And Visit The Route Again..</h4> :
        <h4>Check Your Network Cables And Reload..</h4>
        }
     </div>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.section`
    width: 100%;
    height: 100vh;
    background: rgba(1, 34, 48, 0.932);
    cursor: progress;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .8rem;
    position: relative;
    .top, .down{
      width: 30px;
      height: 30px;
      background: rgb(238, 4, 63);
      border-radius: 2rem 2rem;
    }
    .mid{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
        width: 100%;
        transform: translateY(4rem);
        
        @keyframes dragAnime {
            0%{
                transform: translateX(0);
            }
            100%{
                transform: translateX(5rem);
                transition: transform 0.3s;
            }
        }
        @keyframes dragAnime2 {
            0%{
                transform: translateX(-4rem);
            }
            100%{
                transform: translateX(6rem);
                transition: transform 0.3s;
            }
        }
        @keyframes dragAnime3 {
            0%{
                transform: translateX(1.9);
            }
            100%{
                transform: translateX(1.6rem);
                transition: transform 0.3s;
            }
        }
        .one{
            animation: dragAnime linear infinite 1s;
            background: rgba(5, 190, 236, 0.932);
            width: 35px;
            height: 35px; 
            border-radius: 50px;
        }
        .two{
            background: rgba(236, 5, 43, 0.932);
            width: 40px;
            height: 38px;
            border-radius: 50px;
            animation: dragAnime2 linear infinite 1s;
            position: absolute;
            z-index: 100;
        }
        .three{
            width: 40px;
            height: 38px;
            border-radius: 50px;
            animation: dragAnime3 linear infinite 1s;
            background: rgba(5, 190, 236, 0.932);
        }
    }
    .alert{
      position: absolute;
      bottom: 2rem;
      h4{
        font-size: 1.2rem;
        color: #ccc;
      }
    }
`

export default Loader