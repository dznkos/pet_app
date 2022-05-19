import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from '../../../styles/GlobalStyles'
import { useForm } from '../../../hooks/useForm';



import { Button, Container, Error, Form, Input, LoginBox, LoginText } from './styles'
import { startLoginEmailPassword } from '../../../actions/auth';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  // const { loading } = useSelector( state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    email: 'admin@gmail.com',
    password: '123123'
  });


  const { email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password) )

    console.log( formValues );
  }

  return (
    <>
    <Container>
      <LoginBox>
        <LoginText>Ingresa</LoginText>
        <Form 
        onSubmit={ handleLogin }
        // className='animate__animated animate__fadeIn animate__faster'
        >
        <Input          
          type="text"
          placeholder='Correo electronico'
          name='email' 
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
        <Input 
          type="password"
          placeholder='Contraseña'
          name='password' 
          value={ password }
          onChange={ handleInputChange }
        />
        <Error>
          Usuario no existente
        </Error>
        <Button 
          type='submit' 
          // disabled={ loading }
        >
          Iniciar sesion
        </Button>
        
        {/* <Link to='/auth/register' className='link'>
          Create new account
        </Link> */}

      </Form>
      </LoginBox>
    </Container>
    <GlobalStyles/>
    </>
  )
}
