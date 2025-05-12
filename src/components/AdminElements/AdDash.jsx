import React from 'react'
import AdNav from './AdNav'
import styled from 'styled-components'

const AdDash = () => {
  return (
    <AdDashContainerWrapper>
        <AdNav />
    </AdDashContainerWrapper>
  )
}

const AdDashContainerWrapper = styled.section`
 width: calc(100% - 15rem);
 height: 100%;
 background: linear-gradient(135deg,rgb(241, 241, 241), rgba(0, 0, 0, 0.336) );
 position: absolute;
 top: 0;
 left: 15rem;
`

export default AdDash