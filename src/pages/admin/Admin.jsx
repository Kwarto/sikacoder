import React, { useState } from "react";
import styled from "styled-components";
import { AdDash, AdSidePanel } from "../../components";

const Admin = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDash, setIsDash] = useState(true);
  const [isInterns, setIsInterns] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <AdminContainerWrapper>
      <AdSidePanel
        setIsDash={setIsDash}
        setIsInterns={setIsInterns}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setShowPost={setShowPost}
        setIsDrawer={setIsDrawer}
      />
      <AdDash
        isDash={isDash}
        isInterns={isInterns}
        activeIndex={activeIndex}
        showPost={showPost}
        setShowPost={setShowPost}
        isDrawer={isDrawer}
        setIsDrawer={setIsDrawer}
      />
    </AdminContainerWrapper>
  );
};

const AdminContainerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default Admin;
