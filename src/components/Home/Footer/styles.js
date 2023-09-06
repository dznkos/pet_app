import styled from "styled-components";

export const MyFooter = styled.div`

  width:100%;
  height:100%;

  display: flex; 
  justify-content: center;
  align-items: center;
  box-shadow: 5px 3px 12px rgba(0,0,0,0.3);

  h5 {
    color: ${({theme})=> theme.text};
  }
  // background-color: blue;

`