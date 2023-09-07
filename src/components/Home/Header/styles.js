import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  
  height: 100vh;
  // width: 100vw;
  /* background-color: #a4e56f; */
  
  /* position: fixed; */
  //  box-shadow: inset 0 0 12px #777;  
  //  box-shadow: 1px 1px 9px 2px #555555; 
  
  /* justify-content: center; */

`

export const Nav = styled.nav`

  height: 90px;
  width: 100%;
  
  position: relative;

  display: flex;
  justify-content: end;
  align-items : center;

  h1 {
    margin-right: 8px;
    font-size: 0.8rem;
    color: #66FFB2;
  }
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const ContentLogo = styled.div`
  position: absolute;
  top: 5px;
  left: 25px;
  display: flex;
  justify-content: center;
  align-items : center;
  padding: 5px;
  gap: 15px;
  // background-color: #020100;
`
export const BrandLogo = styled.h3`
  font-size: 1.5rem;
  color: ${({theme}) => theme.text};

  :hover {    
    background: linear-gradient(to bottom, rgb(255, 252, 121), rgb(61, 191, 52));
    -webkit-background-clip: text;
    color: transparent;
    transition: 1s;
  }
`

export const Logo = styled.img`

  height: 70px;
  width: 70px;  
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: none;
  background-size: cover;
  :hover {    
    animation: ${rotateAnimation} 1s ease-in-out infinite; 
  }
`
export const SwitchMode = styled.div`
  margin-right: 25px;
  position: relative;
  width: 52px;
  height: 28px;
  border-radius:25px;
  background-color: ${({theme}) => theme.toggle};
  transition: 1s all ease-in;

  @media (max-width: 350px) {      

    position:absolute;
    bottom: 5px;
    right: 90px;    
  }  
`
export const SwitchButton = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 3px;
  left:  ${({mode}) => (mode) ? "25px" : "5px" };
  width: 23px;
  height: 23px;
  border: none;
  border-radius: 50%;
  background-color: rgba(5,5,0, 0.2) ;
  transition: 0.5s all ease-in;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentSession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 auto;
    letter-spacing: 0.125rem;
  }
`

export const BoxImg = styled.div`
  width: 43px;
  height 43px;
  
  background: #fff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;  
`

export const ImgProfile = styled.img`
  height: 45px;
  width: 45px;  
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: none;
  background-size: cover;

`

export const Logout = styled.button`

  background-color: transparent;
  color: ${({theme}) => theme.text};
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  line-height: 22px;
  height: 22px;
  // margin-right: 25px; 

  :hover {
    color: #A40000;
    transition: all 0.4s ease-in-out;
  }

  :active { 
    background-color: #020100;
  }  

   

`