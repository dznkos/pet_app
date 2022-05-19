import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, StyleLi, StyleUl } from './styles'

export const Aside = () => {


  
  return (
    <Container>
        
        <StyleUl>
        <NavLink to="/inicio" activeclassname="current" exact="true">
          <li>Inicio</li>
        </NavLink>
        <NavLink to="/mascotas" activeclassname="current" exact="true">
          <li>Mascotas</li>
        </NavLink>
        </StyleUl>
    </Container>
  )
}
