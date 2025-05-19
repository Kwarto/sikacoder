import React from 'react'
import { useAdminAuth } from '../../context/AdminAuthContext';
import { LoginAdmin } from '../../pages';
const AdminProtectedRoute = ({children}) => {
  const {admin, loading} = useAdminAuth();
  if(loading) return <div>Loading...</div>
  if(!admin) return <LoginAdmin />
  return children;
}

export default AdminProtectedRoute