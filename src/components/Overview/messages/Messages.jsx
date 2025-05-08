import React from 'react'
import styled from 'styled-components'

const Messages = () => {
  return (
    <MessageContainerWrapper>
     <MessagesCardWrapper>
      <MessagesCard className='card'>

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
 justify-content: center;
 align-items: center;
 flex-direction: column;
`
const MessagesCard = styled.div`
 width: 80%;
 height: 120px;
 background: rgba(255,255,255.06);
 backdrop-filter: blur(10px);
 border-radius: 10px;
`

export default Messages