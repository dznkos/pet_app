import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Container, Logout, Nav } from './styles'
import { startLogout } from '../../../actions/auth';

export const Header = () => {


  const dispatch = useDispatch();
  const { name } = useSelector( state => state.auth );

  const handleLogout = () => {
    console.log('Hola')
    dispatch( startLogout() )
  }

  return (
    <Container>
      <Nav>
        <h1>{name}</h1>
        <Logout          
          onClick={ handleLogout }
        >
          Cerrar sesion
        </Logout>
      </Nav>
    </Container>
  )
}
