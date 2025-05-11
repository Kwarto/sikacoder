import React from 'react'
import styled from 'styled-components'
import AccountSettings from '../settings/AccountSettings'

const Settings = () => {
  return (
    <SettingsContainerWrapper>
     <AccountSettings />
    </SettingsContainerWrapper>
  )
}

const SettingsContainerWrapper = styled.article`
 width: 100%;
 height: 100%;
 background: #f1f1f1;
`

export default Settings