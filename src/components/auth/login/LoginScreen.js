import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from '../../../styles/GlobalStyles'
import { useForm } from '../../../hooks/useForm';

import { AccountTest, Button, Container, 
         ContainerTest, 
         Error, Form, Input, 
         LoginBox, LoginText, RowTest, StyledSpinner } from './styles'
import { authRemoveError, startLoginEmailPassword } from '../../../actions/auth';
import ConfirmationModal from '../../../DialogAlert/ModalAlert';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const load = useSelector( state => state.auth);
  const stateLogin = useSelector( state => state.ui);

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });

  const initialState = false;
  const { email, password} = formValues;
  const [show, setShow] = useState(initialState);


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password) )
    dispatch( authRemoveError() )    
  }

  const hideModal = (arg) => {
    setShow(false);
};

  return (
    <>
    <Container>

      <LoginBox>
        {
          (stateLogin.loading === true) ?
          (<StyledSpinner viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="4"
            />
          </StyledSpinner>)
          : <></>
        }
        <LoginText>Ingresa</LoginText>
        <Form 
        onSubmit={ handleLogin }
        disabled={ (stateLogin.loading === true) || (load.error) }
        
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
        {
          (load.error) 
          ? <Error> Verifique sus credenciales!</Error>
          : <Error> </Error>
        }
        
        <Button 
          type='submit'
        >
          Iniciar sesion
        </Button>

        <ContainerTest>
        <AccountTest>
          <RowTest>User Test:</RowTest>
          <RowTest>email: user@gmail.com</RowTest>
          <RowTest>password: 123123</RowTest>
        </AccountTest>
        <AccountTest>
          <RowTest>Admin Test: </RowTest>
          <RowTest>email: admin@gmail.com</RowTest>
          <RowTest>password: 123123</RowTest>
        </AccountTest>
        </ContainerTest>
        
        {/* <Link to='/auth/register' className='link'>
          Create new account 
        </Link> */}

      </Form>
      </LoginBox>
    </Container>
    <ConfirmationModal show={show} headerText="Confirm delete item?"
                    handleClose={hideModal} >
        {`Permanently delete ?`}
    </ConfirmationModal>
    <GlobalStyles/>
    </>
  )
}
