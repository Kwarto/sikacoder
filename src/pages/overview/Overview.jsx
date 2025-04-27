import React, { useState } from "react";
import styled from "styled-components";
import { Over, SideBar } from "../../components";

const Overview = () => {
  const [showDash, setShowDash] = useState(true);
  const [showCourse, setShowCourse] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  return (
    <OverviewContainerWrapper>
      <SideBar
        setShowDash={setShowDash}
        setShowCourse={setShowCourse}
        setShowNotice={setShowNotice}
        setShowTasks={setShowTasks}
        showSettings={showSettings}
      />
      <Over
        showDash={showDash}
        showCourse={showCourse}
        showNotice={showNotice}
        showTasks={showTasks}
        showSettings={setShowSettings}
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
