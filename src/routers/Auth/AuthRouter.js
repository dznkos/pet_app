import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../../components/auth/login/LoginScreen'
import { RegisterScreen } from '../../components/auth/register/RegisterScreen'

export default function AuthRouter() {
  return (
      <Routes>
        <Route exact path="/login" element={ <LoginScreen/> } />
        <Route exact path="/register" element={ <RegisterScreen/> } />

        <Route path="*"
          element={ <Navigate to="/login"/> } />
      </Routes>
  )
}
