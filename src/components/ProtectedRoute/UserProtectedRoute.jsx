import React from 'react'
import { useUserAuth } from '../../context/UserAuthContext'
import { Auth } from '../../pages';
import Loader from '../Loader/Loader';
const UserProtectedRoute = ({children}) => {
  const {user, loading} = useUserAuth();
  if(loading) return <Loader />;
  if(!user) return Auth;
  return children;
}

export default UserProtectedRoute