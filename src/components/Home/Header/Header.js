import React from 'react'

import { Container, Logout, Nav } from './styles'

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Logout>
          Cerrar sesion
        </Logout>
      </Nav>
    </Container>
  )
}
