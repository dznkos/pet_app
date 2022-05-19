import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Container, BoxCreate, Data, Input, Form, TextArea, Select } from './styles'


export const MascotaNew = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    type: '',
    age: '',
    description: ''
  });


  const { name, type, age, description} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch( startLoginEmailPassword(email, password) )
  }

  const handleGoogleLogin = () => {
    // dispatch( startGoogleLogin() );
  }


  return (
    <Container>
      <h1>Crear una nueva mascota</h1>
      <BoxCreate> 
        <Form 
        onSubmit={ handleLogin }
        // className='animate__animated animate__fadeIn animate__faster'
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
          {/* <Input   
            width="345px"
            height="40px"
            type="text"
            placeholder='Tipo de Mascota'
            name='type' 
            autoComplete='off'
            value={ type }
            onChange={ handleInputChange }
          />      */}
          <Select>
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
        </Form>
        
      </BoxCreate>  
        <button>
          Crear mascota
        </button> 
      
    </Container>
  )
}