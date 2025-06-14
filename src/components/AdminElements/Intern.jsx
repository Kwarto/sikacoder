import React, { useState} from 'react'
import { FaHome, FaMapMarker } from 'react-icons/fa'
import { FaPhone, FaTableList } from 'react-icons/fa6'
import { MdDashboard, MdEmail } from 'react-icons/md'
import styled from 'styled-components'
import InternDetail from './InternDetail'

const Intern = ({interns}) => {
  const [isGrid, setIsGrid] = useState(false);
  const [showDetailModal, setShowDetailModal] =useState(false);

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
          <div className="intern-card" key={intern.id} onClick={() => {setShowDetailModal(true)}}>
          <div className="intern-info">
            <div className="profile">
              <img src={intern.userProfile} alt={intern.username} />
            </div>
            <div className="meta">
              <h4>{intern.fullName}</h4>
              <span>{intern.domain}</span>
            </div>
          </div>
          <div className="intern-contact">
            <li><MdEmail /> {intern.email}</li>
            <li><FaMapMarker /> {intern.country}</li>
            <li><FaPhone /> {intern.contactNumber}</li>
          </div>
        </div>
          )
        })}
      </InternsListGridContainer>
      {showDetailModal && <InternDetail interns={interns} setShowDetailModal={setShowDetailModal} />}
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
  .list-content{
    .intern-card{
      display: flex;
      align-items: center;
      height: max-content;
      background: red;
    }
  }
`

export default Intern