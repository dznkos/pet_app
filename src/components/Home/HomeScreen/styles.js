
import styled from "styled-components"

export const Container = styled.div`
  
  // height: 100%;
  
  display: grid; 

  min-height: 100vh;

  grid-template: 
        "header" 90px  
        "sidebar" 60px       
        "main" auto  
        "footer" 50px;

@media (min-width: 750px) {  
    grid-template: 
        "header header" 90px 
        "sidebar main" auto 
        "footer footer" 50px /
        177px   auto;
}

@media (min-width: 900px) {   
    grid-template: 
        "header header header" 90px             
        "sidebar main  main " auto 
        "footer footer footer " 50px /
        177px   auto   auto;

    margin: auto;
}

  > * {
    text-align: center;
    box-sizing: border-box;
  }

  .header {
    grid-area: header;    
    background-color: ${({theme}) => theme.bgc};
  }
  
  .sidebar {
      grid-area: sidebar;
      background-color: ${({theme}) => theme.bgc};
      
  }
  .main {
      grid-area: main;
  }

  .footer {
    grid-area: footer;
    background-color: ${({theme}) => theme.bgc};
  }

`


