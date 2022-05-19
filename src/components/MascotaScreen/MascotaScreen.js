import React from 'react'
import { Container, BoxMascotas, Data, NavLinkStyle } from './styles'

import  { TrashAlt} from '@styled-icons/fa-solid/TrashAlt';
import { Pencil } from '@styled-icons/boxicons-solid/Pencil';
import { NavLink } from 'react-router-dom';

export const MascotaScreen = () => {


  return (
    <Container>
      
        <NavLinkStyle to="/create" exact="true">
          Crear mascota
        </NavLinkStyle>   
      <BoxMascotas>
       
      <ul>
          <li>
            <Data>
              <p>01</p>
              <h4>Pelusa</h4>
            </Data>
            <Data>
              <i><Pencil width={ 20 } height={ 20 }/></i>
              <i><TrashAlt width={ 20 } height={ 20 } color={ 'red' }/></i>        
            </Data>
          </li>
          
        </ul>
      </BoxMascotas>
    </Container>
  )
}
