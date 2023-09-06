import React,{ useEffect} from 'react'
import { Container } from './styles'

import { useDispatch } from 'react-redux';
import { petClearActive } from '../../../actions/pets';

export const Main = () => {


  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(petClearActive())    
  }, [dispatch])

  return (
    <Container>
      <h1>Bienvenido a Pets App!</h1>
      <p>
        Explore PetApps, en este sitio puede registrar sus mascotas, subir la foto de su mascota.
      </p>
      <br/>
      <p>Ingrese a "Mascotas" podra ver todas las mascotas, puede agregar alguna a sus favoritos con el ❤ de la imagen. 
        Puede agregar nuevas mascotas con el boton de la parte superior solo en el rol de Admin.</p>
    </Container>
  )
}
