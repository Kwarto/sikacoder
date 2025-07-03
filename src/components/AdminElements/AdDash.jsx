import React from "react";
import AdNav from "./AdNav";
import styled from "styled-components";
import Overview from "./Overview";
import Intern from "./Intern";
import Programs from "./Programs";
import Announce from "./Announce";
import Blogpost from "./Blogpost";
import { MdCloudUpload } from "react-icons/md";
import UserAccountMa from "./UserAccountMa";
import Post from "./Post";

const AdDash = ({isDrawer, courses, users, blogs, setIsInterns, setIsDrawer, activeIndex, showPost, setShowPost }) => {
  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <Overview courses={courses} users={users} blogs={blogs} setIsInterns={setIsInterns}/>;
      case 1:
        return <Intern interns={users} />;
      case 2:
        return <Programs courses={courses}/>;
      case 3:
        return <Announce />;
      case 4:
        return <Blogpost blogs={blogs} />;
      default:
        break;
    }
  };
  return (
    <AdDashContainerWrapper>
      <AdNav setIsDrawer={setIsDrawer} isDrawer={isDrawer}/>
      <AddPostModalButton onClick={() =>{setShowPost(true)}}>
        <MdCloudUpload />
      </AddPostModalButton>
      {isDrawer && <UserAccountMa />}
      {showPost && <Post />}
      {renderComponent()}
    </AdDashContainerWrapper>
  );
};

const AdDashContainerWrapper = styled.section`
  width: calc(100% - 15rem);
  height: 100vh;
  background: linear-gradient(135deg, rgb(241, 241, 241), rgba(0, 0, 0, 0.336));
  position: absolute;
  top: 0;
  left: 15rem;
  overflow-y: scroll;

  @media screen and (max-width: 430px) {
    left: 0;
    width: 100%;
  }
`;

const AddPostModalButton = styled.article`
  position: absolute;
  top: 25rem;
  left: .2rem;
  z-index: 1000;
  width: 60px;
  aspect-ratio: 1/1;
  background: rgb(9, 178, 207);
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.11);
  cursor: pointer;
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default AdDash;
