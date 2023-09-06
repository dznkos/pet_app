import styled from "styled-components";

import myImage from '../../../assets/images/LoginBackground.png'

export const Container = styled.div`
  
  background-image: url(${myImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  max-width: 1400px;
  
  display: flex;
  justify-content: space-evenly;
`

export const LoginBox = styled.div`

  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  max-height: 320px;
  width: 95%;
  max-width: 400px;
  position: absolute;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  top: 28%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-content: center;
  text-align: center;  
`
export const LoginText = styled.h2`
    
    height: 29px;
    margin-top: 15px;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    color: #000000;
`

export const Input = styled.input`
  
    border: 1px solid #E3E3E3;
    border-bottom: 1px solid $light-grey;
    background: rgba(0, 0, 0, 0.4);
    
    margin-top: 8px;
    padding-left: 8px;
    transition: border-bottom .3s ease;
    &:focus {
        border-bottom: 1px solid $primary;
        outline: none;
    }

    
    color: #fff;

    width: 90%;
    max-width: 345px;
    height: 40px;

    ::placeholder {
      
      color: #fff;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 17px;
      letter-spacing: -0.017em;
      display: flex;
      align-items: center;  
    }

    :focus {
      border: 2px solid var(--loginColor);
      
      color: #fff;
    }

    :focus::placeholder {
      color: var(--loginColor);
    }
`

export const Form = styled.form`
    /* display: inline-block; */
    

`

export const Error = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 15px;
    padding: 3px;
    letter-spacing: -0.017em;
    color: #FF0000;
    margin-left: 35px;
    text-align: start;
`

export const Button = styled.button`
    
  width: 90%;
  max-width: 345px;
  height: 40px;

  background-color: var(--loginColor);
  border: 1px solid #E3E3E3;

  color: #FFFFFF;
  font-weight: 700;
  font-size: 0.96rem;
  line-height: 22px;


  :hover {

    background-color: #2C91F6;
  }

  :active { 
    background-color: #2080DF;
  }  
`

export const ContainerTest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`

export const AccountTest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 20px;
  padding-left: 35px;
  list-style: none;    
`
export const RowTest = styled.li`
  font-size: 0.825rem;
  line-height: 15px;
  font-style: italic;
  color: #020100;
`
export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  
  & .path {
    stroke: #2992BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;