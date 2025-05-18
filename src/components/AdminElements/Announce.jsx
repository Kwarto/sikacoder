import React from 'react'
import styled from 'styled-components'
import { announceData } from '../../utils/annonceData'
import { FaEye } from 'react-icons/fa6'

const Announce = () => {
  return (
     <AnnouncementContainerWrapper className='grid-col-2'>
      {announceData && announceData.map((item) => (
        <div className="announce-card"
         key={item.id}>
          <div className="head">
            <div className="program">
              <p>Program</p>
              <h4>{item.program}</h4>
            </div>
            <div className="avatar">
              <img src={item.announceFav} alt={item.program} />
            </div>
          </div>
          <div className="info">
            <p>{item.announceDesc}</p>
            <span className='read'>
              <FaEye />
              {item.readers}
              </span>
          </div>
        </div>
      ))}
     </AnnouncementContainerWrapper>
  )
}

const AnnouncementContainerWrapper = styled.article`
  width: 100%;
  height: 90vh;
  padding: 75px 10px 0 10px;
  overflow-y: scroll;
  .announce-card{
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: .5rem;
    padding: 10px;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    .head{
      display: flex;
      align-items: center; 
      justify-content: space-between;
      width: 100%;
      .program{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        h4{
          color: rgba(2, 19, 20, 0.795);
        }
        p{
          color: teal;
          font-weight: 600;
        }
      }
      .avatar{
        width: 50px;
        aspect-ratio: 1/1;
        background: rgba(9, 9, 102, 0.123);
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        img{
          width: 80%;
        }
      }
    }
    .info{
      padding-top: 15px;
      overflow: hidden;
      .read{
        color: teal;
        font-weight: 600;
      }
    }
    
  }
`
export default Announce