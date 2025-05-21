import React from 'react'
import { useAdminAuth } from '../../context/AdminAuthContext';
import { LoginAdmin } from '../../pages';
import Overview from '../../pages/overview/Overview';
const AdminProtectedRoute = ({children}) => {
  const {admin, loading} = useAdminAuth();
  if(loading) return <div>Loading...</div>
  if(!admin) return children;
  return children;
}

export default AdminProtectedRoute