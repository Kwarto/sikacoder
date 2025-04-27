import React from 'react'
import styled from 'styled-components'
import TopNav from '../TopNav/TopNav'
import Dash from './dash/Dash'

const Overview = () => {
  return (
    <MainOverviewContainer>
     <TopNav />
     <OverviewAreaContainer>
      <Dash/>
     </OverviewAreaContainer>
    </MainOverviewContainer>
  )
}

const MainOverviewContainer = styled.section`
 width: calc(100% - 18rem);
 height: 100vh;
 position: absolute;
 top: 0;
 left: 18rem;
`
const OverviewAreaContainer = styled.article`
 width: 100%;
 height: calc(100vh - 70px);
 overflow-y: scroll;
`

export default Overview