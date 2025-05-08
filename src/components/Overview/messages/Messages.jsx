import React from 'react'
import styled from 'styled-components'
import msgAvaImg from '../../../assets/images/avatar.png'
import { FaDroplet, FaEye } from 'react-icons/fa6'
// import { motion } from 'framer-motion'

const Messages = () => {
  return (
    <MessageContainerWrapper>
     <MessagesCardWrapper>
      <MessagesCard className='card'>
       <div className="top">
        <div className="from">
         <img src={msgAvaImg} alt="notify-by"/>
        </div>
        <div className="duration">
          <span>2hrs ago</span>
        </div>
       </div>
       <div className="meta">
         <h4>Reliable Cloud Backup Solution</h4>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus doloremque qui dolorum harum at totam quis voluptatem libero excepturi.</p>
         <div className="view">
          <FaEye/>
          <FaDroplet/>
         </div>
       </div>
      </MessagesCard>
      <MessagesCard className='card'>
       <div className="top">
        <div className="from">
         <img src={msgAvaImg} alt="notify-by"/>
        </div>
        <div className="duration">
          <span>2hrs ago</span>
        </div>
       </div>
       <div className="meta">
         <h4>Reliable Cloud Backup Solution</h4>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus doloremque qui dolorum harum at totam quis voluptatem libero excepturi.</p>
         <div className="view">
          <FaEye/>
          <FaDroplet/>
         </div>
       </div>
      </MessagesCard>
     </MessagesCardWrapper>
    </MessageContainerWrapper>
  )
}

const MessageContainerWrapper = styled.article`
 width: 100%;
 height: 100%;
 background: #f1f1f1;
`
const MessagesCardWrapper = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 flex-direction: column;
 padding: 10px;
`
const MessagesCard = styled.div`
 width: 80%;
 height: max-content;
 background: rgb(38 39 39 / 2%);
 backdrop-filter: blur(10px);
 border-radius: 10px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
  margin-bottom: 10px;
 .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.03);
  width: 100%;
  height: 90px;
  border-radius: 10px;
  box-shadow:0 10px 30px 0 rgba(0,0,0,0.034);
  padding: 10px;
  .from{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50px;
   aspect-ratio: 1/1;
   background: #fff;
   border-radius: 50px;
   padding: 5px;
   img{
    width: 80%;
    object-fit: cover;
    border-radius: inherit;
   }
  }
  .duration{
   display: flex;
   justify-content: center;
   align-items: center;
   span{
     font-weight: 600;
     color: rgb(17, 179, 179);
   }
  }
 }
  .meta{
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   padding: 15px;
   margin-top: 10px;
   h4{
    color: teal;
   }
   p{
    max-width: 80%;
    line-height: 1.6;
    color: #111;
   }
   }
   .view{
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: center;
     gap: 1rem;
     color: teal;
   }
  }
`

export default Messages