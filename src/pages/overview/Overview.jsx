import React, { useState } from "react";
import styled from "styled-components";
import { Over, SideBar } from "../../components";

const Overview = () => {
  const [showDash, setShowDash] = useState(false);
  const [showCourse, setShowCourse] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const [showTasks, setShowTasks] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <OverviewContainerWrapper>
      <SideBar
        setShowDash={setShowDash}
        setShowCourse={setShowCourse}
        setShowNotice={setShowNotice}
        setShowTasks={setShowTasks}
        showSettings={showSettings}
        showSideBar={showSideBar}
      />
      <Over
        showDash={showDash}
        showCourse={showCourse}
        showNotice={showNotice}
        showTasks={showTasks}
        showSettings={setShowSettings}
        setShowSideBar={setShowSideBar}
      />
    </OverviewContainerWrapper>
  );
};

const OverviewContainerWrapper = styled.main`
  max-width: 100%;
  min-height: 100vh;
  position: relative;

`;

export default Overview;
