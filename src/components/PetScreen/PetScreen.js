import React, { useEffect, useState } from 'react'
import { Container, BoxMascotas, Data, NavLinkStyle, ButtonDel, ButtonCancel, Actions, Controls } from './styles'

import  { TrashAlt} from '@styled-icons/fa-solid/TrashAlt';
import { Pencil } from '@styled-icons/boxicons-solid/Pencil';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { petDelete, petsStartLoading, petClearActive, petGetTypes } from '../../actions/pets';
import { CustomModal } from '../ModalAlert/ModalAlert';

export const PetScreen = () => {

  const dispatch = useDispatch();
  const { pets } = useSelector( state => state.pets)

  const initStatePet = {
    petid: '',
    show: false
  }

  const [showModal, setShowModal] = useState(initStatePet);

  const hideModal = () => {
    setShowModal(initStatePet)
  }

  const AlertDeletePet = ( id ) => {
    setShowModal( { petid: id, show: true } );

  }
  const deletePet = ( ) => {
    dispatch( petDelete(showModal.petid) );
    hideModal()
  }

  useEffect(() => {
    dispatch(petClearActive())
  }, [dispatch])
  
  
  useEffect(() => {    
    dispatch( petsStartLoading() );    
    dispatch( petGetTypes() );
  }, [dispatch]) 
  
  return (
    <Container>
      

      <BoxMascotas>       
        <NavLinkStyle to="/create" exact="true">
          Agregar mascota
        </NavLinkStyle>  

        <ul>
          {
            pets?.map( (pet, i) => (
              <li key={ pet._id }>
                <Data>
                  <p>{ i+1 }</p>
                  <h4>{ pet.name }</h4>
                </Data>
                <Controls>
                  <NavLink to='/update' state={{ mypet: pet}}><i ><Pencil width={ 20 } height={ 20 } color={ '#B6956A' }/></i></NavLink>
                  <i onClick={ ()=> AlertDeletePet( pet._id ) }><TrashAlt width={ 20 } height={ 20 } color={ 'red' }/></i>        
                </Controls>
              </li>

            ))
          }
          
          
        </ul>
      </BoxMascotas>
      <CustomModal
        show={ showModal.show }
      >
        <h3>¿Estas seguro que quieres eliminar?</h3>

        <Actions>
          <ButtonDel
            onClick={ deletePet }
          >
            Eliminar
          </ButtonDel>
          <ButtonCancel
            onClick={ hideModal }
          >
            Cancelar
          </ButtonCancel>
        </Actions>
      </CustomModal>  

    </Container>
  )
}
