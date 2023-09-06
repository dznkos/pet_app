import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  
  height: 100%;
  
  display: flex;

  flex-direction: column;
  align-items: flex-end;
  padding: 20px 5px 20px 5px;
  gap: 15px;

`

export const NavLinkStyle = styled(NavLink)` 
  
  min-width: 150px;
  height: 40px;
  padding: 8px 12px;

  background-color: ${({theme})=> theme.btn};
  border-radius: 25px;

  color: #fff;
  text-decoration: none;
  font-size: 1.075rem;
  font-weight: 500;

  display: flex;

  justify-content: center;
  align-items: center;
  
  :hover {
    // font-size: 1.175rem;
    transition: all 0.3s ease; 
    background-color: rgba(78, 219, 213, 0.7);
    box-shadow: 2px 2px 7px 1px rgba(78, 219, 213, 0.3)
  } 


`  

export const BoxMascotas = styled.div`
  
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;  

  padding: 0px 40px 0px 40px;
  
  ul {
    height: 100%;
    width: 100%;     
  }

  li {
    display: flex;      
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    color: ${({theme})=> theme.text};

    height: 80px;
    width: 100%;
    border-radius: 12px;
    background: ${({theme})=> theme.panel};

    :hover {
      box-shadow: 2px 2px 8px 1px #567EEE;      
      transition: all 0.3s ease-in;  
    }
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  i{

    padding: 8px;
    border-radius: 25px;
    

    :active {
      background-color: rgba(255, 0, 0, 0.3);
      
    }

    :hover {
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.6s ease;
    }
  }


`

export const Data = styled.div`
  
  
  width: 50%;

  display: flex;
  justify-content: start;
  padding-left: 35px;
  gap: 30px;

  h4 {
    font-size: 1.125rem;
    font-weight: normal;
  }

  p { 
    font-size: 1.125rem;
    color: #B6956A;
  }

`

export const Controls = styled.div`
  
  width: 50%;

  display: flex;
  justify-content: flex-end;
  padding-right: 15px;

  h4 {
    font-size: 1.125rem;
    font-weight: normal;
  }

  p { 
    font-size: 1.125rem;
    color: #B6956A;
  }

`

export const ButtonDel = styled.button`
  
  width: 30%;  
  min-height: 40px;
  border-radius: 10px;
  background-color: red;
  color: white;
`

export const ButtonCancel = styled.button`
  
  width: 30%;   
  min-height: 40px;
  border-radius: 10px;
  background-color: #B6956A;
  color: white;
`
export const Actions = styled.div`
  
  display: flex;
`
