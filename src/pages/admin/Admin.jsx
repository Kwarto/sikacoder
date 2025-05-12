import React from 'react'
import styled from 'styled-components'
import {AdDash, AdSidePanel} from '../../components'

const Admin = () => {
  return (
    <AdminContainerWrapper>
      <AdSidePanel />
      <AdDash />
    </AdminContainerWrapper>
  )
}

const AdminContainerWrapper = styled.section`
 position: relative;
 width: 100%;
 height: 100vh;
`

export default Admin