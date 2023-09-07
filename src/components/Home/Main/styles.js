import styled from "styled-components";

export const Container = styled.div`
  
  min-height: 100%;
  padding: 60px;  
  text-align: start;

  h1 { 
    font-size: 2rem;
    color: ${({theme}) => theme.text};
    padding-bottom: 20px;
  }

  p {
    color: ${({theme}) => theme.text};
    font-family: 'Inter', sans-serif;
  }

`