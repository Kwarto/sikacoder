import React from "react";
import AdNav from "./AdNav";
import styled from "styled-components";
import Overview from "./Overview";
import Intern from "./Intern";
import Programs from "./Programs";
import Announce from "./Announce";
import Blogpost from "./Blogpost";

const AdDash = ({ activeIndex }) => {
  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <Overview />;
      case 1:
        return <Intern />;
      case 2:
        return <Programs />;
      case 3:
        return <Announce />;
      case 4:
        return <Blogpost />;
      default:
        break;
    }
  };
  return (
    <AdDashContainerWrapper>
      <AdNav />
      {renderComponent()}
    </AdDashContainerWrapper>
  );
};

const AdDashContainerWrapper = styled.section`
  width: calc(100% - 15rem);
  height: 100%;
  background: linear-gradient(135deg, rgb(241, 241, 241), rgba(0, 0, 0, 0.336));
  position: absolute;
  top: 0;
  left: 15rem;
  overflow: hidden;
`;

export default AdDash;
