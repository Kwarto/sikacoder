import React from 'react'
import styled from 'styled-components'
import { AiFillFolderOpen } from 'react-icons/ai';
import taskBannerImg from '../../../assets/images/thumb/course_thumb03.jpg'
const taskObj = [
  { 
    id: 1,
    taskTItle: "Create a new Next.js app",
    taskBanner: taskBannerImg,
    taskDescription: "Set up a new Next.js project from scratch with basic configurations.",
    taskDeadline: "2025-05-26",
  },
  { 
    id: 2,
    taskTItle: "Create a new Next.js app",
    taskBanner: taskBannerImg,
    taskDescription: "Set up a new Next.js project from scratch with basic configurations.",
    taskDeadline: "2025-05-26",
  },
  { 
    id: 3,
    taskTItle: "Create a new Next.js app",
    taskBanner: taskBannerImg,
    taskDescription: "Set up a new Next.js project from scratch with basic configurations.",
    taskDeadline: "2025-05-26",
  },
  { 
    id: 4,
    taskTItle: "Create a new Next.js app",
    taskBanner: taskBannerImg,
    taskDescription: "Set up a new Next.js project from scratch with basic configurations.",
    taskDeadline: "2025-05-26",
  },
  { 
    id: 5,
    taskTItle: "Create a new Next.js app",
    taskBanner: taskBannerImg,
    taskDescription: "Set up a new Next.js project from scratch with basic configurations.",
    taskDeadline: "2025-05-26",
  },
  { 
    id: 6,
    taskTItle: "Create a new Next.js app",
    taskBanner: taskBannerImg,
    taskDescription: "Set up a new Next.js project from scratch with basic configurations.",
    taskDeadline: "2025-05-26",
  }
]
const Tasks = () => {
  return (
    <TaskContainerWrapper className='grid-col-2'>
      {taskObj.map((task) => (
        <TaskItem key={task.id}>
          <BannerWrapper>
            <img src={task.taskBanner} alt={task.id} />
          </BannerWrapper>
          <LeftItem>
            <Info>
              <Title>{task.taskTItle}</Title>
              <Description>{task.taskDescription}</Description>
            </Info>
           <RightItem>
            <Deadline>Deadline: {task.taskDeadline}</Deadline>
            <AiFillFolderOpen />
          </RightItem>
          </LeftItem>
        </TaskItem>
      ))}
    </TaskContainerWrapper>
  )
}

const TaskContainerWrapper = styled.article`
 width: 100%;
 height: 100%;
 background: #f1f1f1;
 padding: 10px;
 gap: .8rem;
`
const BannerWrapper = styled.div`
 width: 45%;
 height: 160px;
 border-radius: 10px;
 overflow: hidden;
 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
 }
  @media screen and (max-width: 430px) {
    width: 50%;
    height: 130px;
  }
`
const TaskItem = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  margin: 10px 0px;
  @media screen and (max-width: 430px) {
    height: max-content;
    margin: 0;
  }
`;

const LeftItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  svg{
    font-size: 20px;
    color: green;
  }
   @media screen and (max-width: 430px) {
   gap: 5px;
  }
`;
const Info = styled.div`
  display:flex;
  flex-direction:column;
`;
const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`; 
const Description = styled.p`
    font-size: 20px;
    color: #666;
    padding: 4px 0; 
`; 
const Deadline = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: red;
`; 
const RightItem = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap:5px;
  width: 100%;
  svg{
    width: 35px;
    height: 35px;
    font-size: 18px;
    color: #fff;
    background: teal;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
  }
`;



export default Tasks