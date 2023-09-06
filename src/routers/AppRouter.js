import React, { useEffect } from 'react'

import { useDispatch, useSelector  } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { HomeScreen } from '../components/Home/HomeScreen/HomeScreen';
import { Main } from '../components/Home/Main/Main';
import AuthRouter from './Auth/AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { PetScreen } from '../components/PetScreen/PetScreen';
import { PetGallery } from '../components/PetGallery/PetGallery';
import { PetFavorite } from '../components/PetFavorite/PetFavorite';
import { PetNew } from '../components/PetNew/PetNew';
import { PetUpdate } from '../components/PetUpdate/PetUpdate';


export const AppRouter = (props) => {

  const dispatch = useDispatch();
  const { checking, uid, role} = useSelector( state => state.auth );

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if ( checking ) {
    return ( <h5> Authentication... Please wait</h5> )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/*' element={ 
            <PublicRoute isAuthenticated={ !!uid }>
              <AuthRouter/> 
            </PublicRoute>
          }/>
        <Route exact path='/inicio' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen theme={props.theme} setTheme={props.setTheme} children={ <Main/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/mascotas' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen theme={props.theme} setTheme={props.setTheme} children={ <PetGallery/> }/>            
          </PrivateRoute>
        }/>

        {
          (role === 'ADMIN')
          ? 
          <Route exact path='/panel' element={ 
            <PrivateRoute isAuthenticated={ !!uid } >
                <HomeScreen theme={props.theme} setTheme={props.setTheme} children={ <PetScreen/> }/> 
            </PrivateRoute>   
          }/>
          :
          <Route exact path='/favoritos' element={ 
            <PrivateRoute isAuthenticated={ !!uid } >
              <HomeScreen theme={props.theme} setTheme={props.setTheme} children={ <PetFavorite/> }/> 
            </PrivateRoute>
          }/>      
        }     
        
        <Route exact path='/create' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen theme={props.theme} setTheme={props.setTheme} children={ <PetNew/> }/> 
          </PrivateRoute>
        }/>
        <Route exact path='/update' element={ 
          <PrivateRoute isAuthenticated={ !!uid } >
            <HomeScreen theme={props.theme} setTheme={props.setTheme} children={ <PetUpdate/> }/> 
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
