import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Container, BoxCreate, Input, Form, TextArea, Select } from './styles'

import { useDispatch, useSelector } from 'react-redux';
import { petAdd, petFind, petUpdate } from '../../actions/pets';
import { CustomModal } from '../ModalAlert/ModalAlert';
import { Link, useLocation } from 'react-router-dom';

export const MascotaUpdate = () => {

  const location = useLocation()
  const { mypet } = location.state

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false) 

  const preloadedValues = {
    id: mypet._id,
    name: mypet.name,
    age: mypet.age,
    description: mypet.description,
    image_url: 'imageUrl',
    pet_type_id: "627ed00805be0bce81adba20"
  }

  const [ formValues, handleInputChange, reset ] = useForm(preloadedValues);
  
  const { name, age, image_url,
         description, pet_type_id} = formValues;

  const handleUpdatePet = (e) => {
    e.preventDefault();
    
    console.log( formValues )

    dispatch( petUpdate( formValues ))
    // msg alert
    setShowModal( !showModal );
  }

  return (
    <Container>
      <h1>Actualizar datos de mascota</h1>
      <BoxCreate> 
        <Form 
        onSubmit={ handleUpdatePet }
        >
          <Input   
            width="100%"
            height="40px"       
            type="text"
            placeholder='Nombre'
            name='name' 
            autoComplete='off'
            value={ name }
            onChange={ handleInputChange }
          />
          <Select            
            // name='pet_type_id'
            // value={ pet_type_id }
            // onChange={ handleInputChange }
            >
              <option value="" hidden>
                Tipos de Mascotas
              </option>
              <option value="1">Perro</option>
              <option value="2">Gato</option>
          </Select>
          <Input     
            width="100%"
            height="40px"     
            type="text"
            placeholder='Edad'
            name='age' 
            autoComplete='off'
            value={ age }
            onChange={ handleInputChange }
          />   
          <br />       
          <TextArea    
            width="100%"
            height="134px"      
            type="text"
            placeholder='Descripcion'
            name='description' 
            autoComplete='off'
            value={ description }
            onChange={ handleInputChange }
          />     
          <button
            type='submit' >
            Actualizar mascota
          </button>      
        </Form>
        
      </BoxCreate>
      <CustomModal
        show={ showModal }
      >
        <h3>Mascota actualizada !</h3>
        <Link to="/mascotas">
          <button
            onClick={ hideModal }
          >
            Aceptar
          </button>
        </Link>
      </CustomModal>         
      
    </Container>
  )
}