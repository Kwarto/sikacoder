import React from 'react'
import { FaHome, FaMapMarker } from 'react-icons/fa'
import { FaPhone, FaTableList } from 'react-icons/fa6'
import { MdDashboard, MdEmail } from 'react-icons/md'
import styled from 'styled-components'
import { usrData } from '../../utils/usrData'

const Intern = () => {
  return (
    <InternsContainerWrapper>
      <HeaderWrapper>
        <div className="top">
          <div className="left">
            <h3>Verified Interns [50]</h3>
            <div className="small">
            <FaHome />
            <span>- Interns</span>
            </div>
          </div>
        <div className="right">
          <div className="ico-box">
            <MdDashboard />
          </div>
          <div className="ico-box">
            <FaTableList />
          </div>
        </div>
        </div>
      </HeaderWrapper>
      <InternsListGridContainer className='grid-col-4'>
        {usrData && usrData.map((intern) => {
          return(
            <div className="intern-card" key={intern.id}>
          <div className="intern-info">
            <div className="profile">
              <img src={intern.userProfile} alt={intern.userName} />
            </div>
            <div className="meta">
              <h4>{intern.userName}</h4>
              <span>{intern.courseApplied}</span>
            </div>
          </div>
          <div className="intern-contact">
            <li><MdEmail /> {intern.emailId}</li>
            <li><FaMapMarker /> {intern.location}</li>
            <li><FaPhone /> {intern.phone}</li>
          </div>
        </div>
          )
        })}
      </InternsListGridContainer>
    </InternsContainerWrapper>
  )
}

const InternsContainerWrapper = styled.article`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 10px;
 gap: 1rem;
 overflow-y: scroll;
`
const HeaderWrapper = styled.div`
 width: 100%;
 background: rgb(255, 255, 255);
 box-shadow:  0 0 10px rgba(0, 5, 5, 0.082);
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px;
 .top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
   .left{
      display: flex;
      flex-direction: column;
      gap: 1rem;
     .small{
      font-size: 20px;
      display: flex;
      justify-content: flex-start;
      gap: .4rem;
      cursor: pointer;
      color: rgba(88, 88, 88, 0.904);
     }
   }
   .right{
     display: flex;
     flex-direction: column;
     gap: 1rem;
     .ico-box{
      width: 30px;
      height: 30px;
      background: rgba(0, 5, 5, 0.082);
      color: teal;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: .5rem;
      font-weight: 300;
      cursor: pointer;
     }
   }
 }
`
const InternsListGridContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: .5rem;
  padding: 10px;
  overflow-y: scroll;
  .intern-card{
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: .5rem;
    box-shadow:  0 0 10px rgba(0, 5, 5, 0.082);
    cursor: pointer;
    padding: 10px;
    overflow: hidden;
    .intern-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      .profile{
        width: 80px;
        aspect-ratio: 1/1;
        background: rgba(24, 23, 23, 0.877);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 80%;
        }
      }
      .meta{
        h4{
          color: rgba(2, 19, 20, 0.795);
        }
        span{
          color: rgb(8, 184, 184);
        }
      }
    }
    .intern-contact{
      width: 100%;
      height: 65%;
      margin-top: 8px;
      li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 10px 8px;
        background: rgba(2, 19, 20, 0.795);
        box-shadow:  0 0 10px rgba(0, 5, 5, 0.082);
        border-radius: 5px;
        margin: 2px 0;
        font-weight: 500;
        color: #fff;
      }
    }
  }
`

export default Intern