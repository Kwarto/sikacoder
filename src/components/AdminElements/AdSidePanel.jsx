import React from 'react'
import styled from 'styled-components'

const AdSidePanel = () => {
  return (
    <AdSidePanelContainerWrapper>
        <div className="welcome">

        </div>
    </AdSidePanelContainerWrapper>
  )
}

const AdSidePanelContainerWrapper = styled.aside`
 width: 15rem;
 height: 100%;
 background: rgb(3, 29, 36);
 box-shadow: 0 1rem 40px rgba(7, 7, 7, 0.795);
 position: absolute;
 left: 0;
 .welcome{
    width: 100%;
    height: 70px;
    background: rgba(82, 81, 81, 0.116);
    backdrop-filter: blur(10px);
 }
`

export default AdSidePanel