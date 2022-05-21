import React,{ useEffect} from 'react'
import { Container } from './styles'

import { useDispatch } from 'react-redux';
import { petClearActive } from '../../../actions/pets';

export const Main = () => {


  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(petClearActive())
    
  }, [])

  return (
    <Container>
      <h1>Hola Luis!</h1>
      <p>Ingresa a "Mascotas" para crear nuevas mascotas</p>
    </Container>
  )
}
