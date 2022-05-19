

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../../components/auth/login/LoginScreen'
import { RegisterScreen } from '../../components/auth/register/RegisterScreen'
import { AuthBody, AuthBox } from './styles'

export default function AuthRouter() {
  return (
    // <AuthBody>
    //   <AuthBox>
        <Routes>
          <Route exact path="/login" element={ <LoginScreen/> } />
          <Route exact path="/register" element={ <RegisterScreen/> } />

          <Route path="*"
            element={ <Navigate to="/login"/> } />
        </Routes>
      // </AuthBox>
    // </AuthBody>
  )
}
