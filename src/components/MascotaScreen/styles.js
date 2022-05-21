import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Container = styled.div`
  
  height: 100vh;
  /* width: 100%; */
  /* background-color: gray; */
  
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  

`

export const NavLinkStyle = styled(NavLink)` 
  width: 182px;
  height: 40px;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 60px;

  background-color: #B6956A;
  border-radius: 12px;

  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  display: flex;

  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 3px 1px #ccc;

`  

export const BoxMascotas = styled.li`
  /* display: inline; */
  background-color: #ffffff; 
  width: 90%;
  height: 100%;

  margin: auto;

  display: flex;

  flex-direction: column;

  justify-content: start;
  

  ul { 
    
  }

  li {
    display: flex;      
    justify-content: space-between;
    align-items: center;

    /* width: 880px; */
    height: 80px;
    border-radius: 12px;
    background-color: #ffffff;

    margin-bottom: 15px;
    box-shadow: 3px 3px 5px 1px #ccc;
    
  }

  i{

    padding: 4px;
    border-radius: 15px;

    :active {
      background-color: #5fdec0;
    }
  }


`

export const Data = styled.div`
  
  width: 180px;

  display: flex;

  justify-content: space-evenly;

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
