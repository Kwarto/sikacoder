import React from 'react'
import styled from 'styled-components'
import TopNav from '../TopNav/TopNav'
import Dash from './dash/Dash'
import MyCourses from './mycourses/MyCourses'
import Messages from './messages/Messages'
import Tasks from './tasks/Tasks'
import Settings from './settings/Settings'

const Overview = ({showDash, showCourse, showNotice, showTasks, showSettings, setShowSideBar}) => {
  
  return (
    <MainOverviewContainer>
     <TopNav setShowSideBar={setShowSideBar}/>
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
 width: calc(100% - 15rem);
 height: 100vh;
 position: absolute;
 top: 0;
 left: 15rem;
 @media screen and (max-width: 430px) {
left: 0;
width: 100%;
 }
`
const OverviewAreaContainer = styled.article`
 width: 100%;
 height: calc(100vh - 70px);
 overflow-y: hidden;
`

export default Overview