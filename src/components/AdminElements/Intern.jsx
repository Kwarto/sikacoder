/* eslint-disable no-unused-vars */
import React, { useState} from 'react'
import { FaHome, FaMapMarker } from 'react-icons/fa'
import { FaBarsProgress, FaPhone, FaTableList } from 'react-icons/fa6'
import { MdDashboard, MdEmail, MdVerifiedUser } from 'react-icons/md'
import styled from 'styled-components'
import InternDetail from './InternDetail'

const Intern = ({interns}) => {
  const [isGrid, setIsGrid] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const [isDetail, setIsDetail] = useState(false);

  return (
    <InternsContainerWrapper>
      <HeaderWrapper>
        <div className="top">
          <div className="left">
            <h3>Verified Interns [{interns?.length}]</h3>
            <div className="small">
            <FaHome />
            <span>- Interns</span>
            </div>
          </div>
        <div className="right">
          <div className="ico-box" onClick={() => {setIsGrid(true)}}>
            <MdDashboard />
          </div>
          <div className="ico-box" onClick={() => {setIsGrid(false)}}>
            <FaTableList />
          </div>
        </div>
        </div>
      </HeaderWrapper>
      <InternsListGridContainer className={isGrid ? `grid-col-4` : 'list-content'}>
        {interns && interns.map((intern) => {
          return(
          <>
          <div className="intern-card" key={intern.id}>
          <div className="intern-info" onClick={() => {setIsDetail(true)}}>
            <div className="profile">
              <img src={intern.userProfile} alt={intern.username} />
            </div>
            <div className="meta">
              <h4>{intern.fullName}</h4>
              <span>{intern.domain}</span>
            </div>
          </div>
          <div className="intern-contact">
            <li><MdEmail /> <span>{intern.email.substring(0, 23)}..</span></li>
            <li><FaMapMarker /> <span>{intern.country}</span></li>
            <li><FaPhone /> <span>{intern.contactNumber}</span></li>
            {isVerified && <li className='status'><MdVerifiedUser />Verified</li>}
            {!isVerified && <li className='status re'><FaBarsProgress />Pending</li>}
          </div>
        </div>
      {isDetail && <InternDetail usrId={intern.id} setIsDetail={setIsDetail}/>}
          </>
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
 gap: .5rem;
 overflow-y: scroll;
 padding: 75px 10px 0 10px;

 .list-content{
    height: 90%;
    overflow-y: scroll;
    gap: 1rem;
    width: 100%;
    .intern-card{
      display: flex;
      margin: 10px 0;
      .intern-info{
      width: 30%;
      justify-content: flex-start;
      .profile{
        width: 60px;
        aspect-ratio: 1/1;
      }
      .meta{
        h4{
          margin: 0;
        }
      }
      }
      .intern-contact{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        li{
          width: 50%;
          justify-content: center;
          background: transparent;
          box-shadow: none;
          color: rgba(2, 19, 20, 0.795);
          font-size: 15px;
          font-weight: 400;
        }
        .status{
          background: rgb(28, 226, 216);
          box-shadow: inset 0 0 10px rgba(10, 78, 82, 0.24);
          color: #01334b;
          border-radius: 8px;
          width: 160px;
          height: 40px;
          font-weight: 600;
          overflow-y: hidden;
        }
        .re{
          background: rgb(253, 239, 44);
          color: #000207;
        }
      }
    }
  }

 @media screen and (max-width: 430px) {
  .list-content{
    width: 100;
    .intern-card{
       .intern-info{

       }
       .intern-contact{
        width: 30%;
         li{
          span{
            display: none;
          }
         }
       }
    }
  }
 }
`
const HeaderWrapper = styled.div`
 width: 100%;
 height: max-content;
 background: rgb(255, 255, 255);
 box-shadow:  0 0 10px rgba(0, 5, 5, 0.082);
 border-radius: 10px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 10px;
 overflow: hidden;
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
     h3{
      font-size: 1.5rem;
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
  height: 90%;
  border-radius: .5rem;
  padding: 0 5px;
  overflow-y: scroll;
  .intern-card{
    width: 100%;
    height: max-content;
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
        background: rgba(187, 185, 185, 0.103);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 80%;
          border-radius: inherit;
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
      margin-top: 8px;
      li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row-reverse;
        gap: 1rem;
        padding: 10px 8px;
        background: rgba(2, 19, 20, 0.795);
        box-shadow:  0 0 10px rgba(0, 5, 5, 0.082);
        border-radius: 5px;
        margin: 2px 0;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
      .status{
        background: rgb(58, 207, 200);
        box-shadow: inset 0 0 10px rgba(103, 176, 236, 0.247);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .re{
        background: rgb(253, 239, 44);
        color: #000207;
      }
    }
  }
  .list-content{
    .intern-card{
      display: flex;
      align-items: center;
      height: 130vh;
      background: red;
    }
  }
`

export default Intern