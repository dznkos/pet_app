import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`
export const StyleUl = styled.ul`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {  
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    a {
      width: 100%;
    }
  }
  
  a{
    // min-width: 177px;
    text-decoration: none;
  }

  li {
    width: 100%;
    list-style: none;
    padding: 16px 10px;
    font-size: 1.085rem;
    line-height: 22px;
    color: ${({theme}) => theme.text};;
    
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    
    li {  
      font-size: 1.085rem;
      background-color: rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      color: linear-gradient(66deg, rgba(16,134,79,1) 0%, rgba(0,67,113,1) 100%);
    }
    
  } 
  
  a.active {
    color: #ffffff !important;    
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);    
    color: linear-gradient(66deg, rgba(16,134,79,1) 0%, rgba(0,67,113,1) 100%);

    li {
      background-color: ${({theme})=> theme.navHover};
      transition: all 0.3s ease;
    }

    li span {    
        font-size: 1.285rem;
        font-weight: 700;
        background: linear-gradient(to bottom, rgb(255, 252, 121), rgb(61, 191, 52));
        -webkit-background-clip: text;
        color: transparent;
        transition: all 0.4s ease;     
    }
  }

  a.inactive {
    color: #ffffff !important;
  }


`

