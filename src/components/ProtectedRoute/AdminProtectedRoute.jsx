import React from 'react'
import { useAdminAuth } from '../../context/AdminAuthContext';
import { LoginAdmin } from '../../pages';
import Loader from '../Loader/Loader';

const AdminProtectedRoute = ({children}) => {
  const {admin, loading} = useAdminAuth();
  if(loading) return <Loader />;
  if(!admin) return <LoginAdmin />;
  return children;
}

export default AdminProtectedRoute