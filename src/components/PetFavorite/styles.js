import styled from "styled-components";


export const Container = styled.div`

  padding-bottom: 50px;
  display: flex; 
  
  height: 100%;
  width: 100%;
  
  background: rgb(243,144,79);
  background: linear-gradient(90deg, rgba(213,134,79,1) 0%, rgba(59,67,113,1) 100%);

  display: grid;

  grid-template-columns: repeat( 1, 6fr);
  grid-column-gap: auto;
  grid-row-gap: auto;

  grid-auto-flow: row;
  gap: 4px;
  justify-items: center;

  @media (min-width: 480px) { 
    grid-template-columns: repeat( 1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat( 2, 1fr);
  }

  @media (min-width: 1024px) {  
    grid-template-columns: repeat( 3, 1fr);
  }

  h1 {
    font-size: 2.25rem;
  } 
`