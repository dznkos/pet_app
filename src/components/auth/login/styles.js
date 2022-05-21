import styled from "styled-components";

import myImage from '../../../assets/images/LoginBackground.png'

export const Container = styled.div`
  
  background-image: url(${myImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  

`

export const LoginBox = styled.div`

  background-color: white;
  height: 251px;
  width: 416px;
  /* margin: 120px 0px 0px 70px; */
  position: absolute;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  margin-left: 65px;
  margin-top: 101px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-content: center;

  text-align: center;
  
`
export const LoginText = styled.h2`
    
    height: 29px;
    margin-top: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

export const Input = styled.input`
  
    border: 1px solid #E3E3E3;
    border-bottom: 1px solid $light-grey;
    background: #FFFFFF;
    
    margin-top: 8px;
    padding-left: 8px;
    transition: border-bottom .3s ease;
    &:focus {
        border-bottom: 1px solid $primary;
        outline: none;
    }

    width: 345px;
    height: 40px;

    ::placeholder {
      color: #E3E3E3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.017em;
      display: flex;
      align-items: center;  
    }

    :focus {
      border: 2px solid #B6956A;
      color: #B6956A;
    }

    :focus::placeholder {
      color: #B6956A;
    }
`

export const Form = styled.form`
    /* display: inline-block; */
    

`

export const Error = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 3px;
    /* identical to box height */

    letter-spacing: -0.017em;

    color: #FF0000;
    margin-left: 35px;
    text-align: start;

    /* display: flex; */

`

export const Button = styled.button`
    
  width: 345px;
  height: 40px;

  background-color: #B6956A;
  border: 1px solid #E3E3E3;

  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 22px;


  :hover {

    background-color: #c6910a;
  }

  :active { 
    background-color: #020100;
  }  
`

