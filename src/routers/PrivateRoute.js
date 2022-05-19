import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ isAuthenticated, children}) => {
  
  return isAuthenticated 
          ? <Navigate to="/" replace />
          : children;

  // return isAuthenticated 
  //         ? children
  //         : <Navigate to="/auth/login"/>;
         
}
