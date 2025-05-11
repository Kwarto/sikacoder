import React, { useState } from 'react';
import styled from 'styled-components';

const AccountSettings = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
  });
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordInfoChange = (e) => {
    setPasswordInfo({
      ...passwordInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleNotificationChange = (e) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleUpdatePersonalInfo = () => {
    // Implement update logic for personal info
    console.log('Updating personal info:', personalInfo);
  };

  const handleChangePassword = () => {
    // Implement password change logic
    console.log('Changing password:', passwordInfo);
  };

  const handleUpdateNotificationPreferences = () => {
    // Implement update logic for notification preferences
    console.log('Updating notification preferences:', notificationPreferences);
  };

  return (
    <SettingsContainer>
      <SettingsSection>
        <SectionTitle>Personal Information</SectionTitle>
        <InputGroup>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={handlePersonalInfoChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
        </InputGroup>
        <Button onClick={handleUpdatePersonalInfo}>Update Personal Info</Button>
      </SettingsSection>

      <SettingsSection>
        <SectionTitle>Change Password</SectionTitle>
        <InputGroup>
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={passwordInfo.currentPassword}
            onChange={handlePasswordInfoChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwordInfo.newPassword}
            onChange={handlePasswordInfoChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="confirmNewPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={passwordInfo.confirmNewPassword}
            onChange={handlePasswordInfoChange}
          />
        </InputGroup>
        <Button onClick={handleChangePassword}>Change Password</Button>
      </SettingsSection>

      <SettingsSection>
        <SectionTitle>Notification Preferences</SectionTitle>
        <CheckboxGroup>
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={notificationPreferences.emailNotifications}
            onChange={handleNotificationChange}
          />
          <label htmlFor="emailNotifications">Receive email notifications</label>
        </CheckboxGroup>
        <CheckboxGroup>
          <input
            type="checkbox"
            id="smsNotifications"
            name="smsNotifications"
            checked={notificationPreferences.smsNotifications}
            onChange={handleNotificationChange}
          />
          <label htmlFor="smsNotifications">Receive SMS notifications</label>
        </CheckboxGroup>
        <Button onClick={handleUpdateNotificationPreferences}>Update Preferences</Button>
      </SettingsSection>
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: sans-serif;
`;

const SectionTitle = styled.h2`
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const SettingsSection = styled.div`
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxGroup = styled.div`
  margin-bottom: 15px;

  label {
    margin-left: 5px;
  }
`;

export default AccountSettings;