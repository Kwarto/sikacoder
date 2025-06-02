import React from 'react'
import styled from 'styled-components'
import bgImg from "../../assets/images/in_hero_bg.jpg"
const InternDetail = ({setShowDetailModal}) => {
  return (
    <InternDetailContainerWrapper>
      <div onClick={() => {setShowDetailModal(false)}}>X</div>
    </InternDetailContainerWrapper>
  )
}

const InternDetailContainerWrapper = styled.section`
 width: 60rem;
 height: 88%;
 background: url(${bgImg});
 background-size: cover;
 background-position: center;
 border-radius: 10px;
 box-shadow: 0 0 30px rgba(2, 19, 12, 0.021);
 position: absolute;
 top: 75px;
 right: 3px;
 z-index: 1500;
`

export default InternDetail