import React, { useState } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../components/Home/HomeScreen/HomeScreen';
import { Main } from '../components/Home/Main/Main';
import { MascotaNew } from '../components/MascotaNew/MascotaNew';
import { MascotaScreen } from '../components/MascotaScreen/MascotaScreen';
import AuthRouter from './Auth/AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={ 
            <PublicRoute isAuthenticated={ isLoggedIn }>
              <AuthRouter/> 
            </PublicRoute>
          }/>
        <Route exact path='/inicio' element={ 
          <PrivateRoute isAuthenticated={ isLoggedIn } >
            <HomeScreen children={ <Main/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/mascotas' element={ 
          <PrivateRoute isAuthenticated={ isLoggedIn } >
            <HomeScreen children={ <MascotaScreen/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/create' element={ 
          <PrivateRoute isAuthenticated={ isLoggedIn } >
            <HomeScreen children={ <MascotaNew/> }/> 
          </PrivateRoute>
        }/>

        <Route
          path="*"
          element={ <Navigate to="/auth/login"/> }
        />
      </Routes>

    </BrowserRouter>
  )
}
