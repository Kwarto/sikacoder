import React from 'react'
import styled from 'styled-components'
import { Over, SideBar } from '../../components'

const Overview = () => {
  return (
    <OverviewContainerWrapper>
     <SideBar/>
     <Over />
    </OverviewContainerWrapper>
  )
}

const OverviewContainerWrapper = styled.main`
 max-width: 100%;
 min-height: 100vh;
 position: relative;
`

export default Overview