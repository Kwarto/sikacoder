import React from 'react'
import styled from 'styled-components'
import TopNav from '../TopNav/TopNav'
import Dash from './dash/Dash'
import MyCourses from './mycourses/MyCourses'
import Messages from './messages/Messages'
import Tasks from './tasks/Tasks'
import Settings from './settings/Settings'

const Overview = ({showDash, showCourse, showNotice, showTasks, showSettings}) => {
  return (
    <MainOverviewContainer>
     <TopNav />
     <OverviewAreaContainer>
      {showDash && <Dash/>}
      {showCourse && <MyCourses />}
      {showNotice && <Messages />}
      {showTasks && <Tasks />}
      {showSettings && <Settings />}
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
 overflow-y: hidden;
`

export default Overview