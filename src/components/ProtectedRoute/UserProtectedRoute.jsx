import React from 'react'
import { useUserAuth } from '../../context/UserAuthContext'
import { Auth } from '../../pages';
const UserProtectedRoute = ({children}) => {
  const {user, loading} = useUserAuth();
  if(loading) return <div>loading...</div>
  if(!user) return <Auth />
  return children;
}

export default UserProtectedRoute