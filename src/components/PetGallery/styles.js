import styled from "styled-components";

import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorite.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import fondopet from '../../assets/images/fondodetalle.jpg';

export const Container = styled.div`
  
  width: 100%;
  padding-bottom: 40px;
  background: ${({theme})=> theme.gallery};

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

export const BoxMascota = styled.div`

  display: flex;
  margin-top: 45px;
  position: relative;
  
  width: 100%;
  max-width: 230px;  
  min-height: 250px;

  border-radius: 25px;
  box-shadow: 3px 3px 3px 1px #3f3f3f;
  transition: transform 0.5s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  :nth-last-child(2):hover{
    transform: rotate(360deg);
  }
`

export const PhotoPet = styled.img`
  
  height: 100%;
  width: 100%;
  position: absolute;

  border-radius: 25px;  
  object-fit: cover;
`

export const NamePet = styled.div`
  
  height: 20%;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
  
  align-self: end;
  position: absolute;
  font-style: bold;
  font-size: 1.175rem;
  border-radius: 0px 0px 25px 25px;
  
  background: rgba(24, 22, 15, .3);;
  color: #ffffff;
`

export const StyledFavoriteIcon = styled(FavoriteIcon)`

  position: absolute;
  right: 10px;
  top: 10px;
  
  width: 20px;
  height: ${({ height }) => height || "20px" };

  & path {
    fill: ${({ color }) => color || "grey" };
  }
  &:hover path {
    fill: ${({ hovercolor }) => hovercolor || "red" };
  }

`
export const StyledFavoriteDetail = styled(FavoriteIcon)`

  position: absolute;
  left: 30px;
  top: 30px;
  
  width: 20px;
  height: ${({ height }) => height || "20px" };

  & path {
    fill: ${({ color }) => color || "grey" };
  }
  &:hover path {
    fill: ${({ hovercolor }) => hovercolor || "red" };
  }

`




// Modal Detalle

export const ModalDiv = styled.div`
  display: ${ p => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  
`
export const BodyDiv = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const ImagePet = styled.img`

  width: 550px; 
  max-height: 720px;

  border-radius: 1.9rem 0 0 1.9rem;  
  object-fit: cover;

  @media (max-width: 950px) { 
    width: 100%;
    height: 100%;
    max-width: none; 
    max-height: none;
    border-radius: 1.9rem 1.9rem 1.9rem 1.9rem;
  }  
`

export const ContentDiv = styled.div`
  position: relative;
  background: url(${fondopet});
  background-size: cover;
   
  max-width: 770px;
  max-height: 650px;

  border-radius: 2rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: start;
 
  @media (max-width: 950px) {  
    background: none;
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
  }  
  
  button {
    margin: 0 auto;
  } 

  h3 {
    font-size: 1.2rem;
    font-weight: 400;    
  }
`
// Content Modal Detail 

export const DataPet = styled.div`

  display: flex;
  gap: 1rem;

  padding: 1rem;
  text-align: justify;
  
  flex-direction: column;
  justify-content: start;

  @media (max-width: 950px) {      

    h4  {
      position: absolute;
      top: 3%;
      left: 42%;
      transition: all 1.5s ease-in-out;
    }
    h2 {
      font-size: 1rem;
      position: absolute;
      top: 14%;
      rigth: 5%;
      transition: 2.5s ease;
    }
    p {
      position: relative;
      top: -15px;
      transition: all 3.5s ease;
    }
  }  

  @media (max-width: 650px) {      

    h4  {
      position: absolute;
      top: 3%;
      left: 28%;
      transition: all 1.5s ease-in-out;
    }   
  }  
  @media (max-width: 350px) {      

    h4  {
      font-size: 0.75rem;
      position: absolute;
      top: 5%;
      left: 25%;
      transition: all 1.5s ease-in-out;
    }   
  }  

`

export const DescDetail = styled.p`
  font-size: 0.990rem;
  color: #fff;
  text-align: center;
  text-wrap: balance;
  border-radius: 5px;
  padding: 10px 8px 10px 8px;
  background: rgba(21, 21 ,21 ,0.8)
`

export const NameDetail = styled.h4`
  text-align: center;
  font-size: 1rem;
  padding: 7px 12px 7px 12px;
  border-radius: 5px;
  color: var(--textAbout);
  background: rgba(21, 21 ,21 ,0.8);
`

export const AgeDetail = styled.h2`
  text-align: center;
  font-size: 1.1rem;
  color: #fff;
  padding: 12px;
  border-radius: 15px;
  background: rgba(21, 21 ,21 ,0.8)
`

export const MyCloseIcon = styled(CloseIcon)`

  position: absolute;
  top: 15px;
  right: 15px;  
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 15px;
  background-color: rgba( 52,52,52, 0.1);

  & path {
    fill: ${({ color }) => color || "black" };
  }
  &:hover path {
    fill: ${({ hovercolor }) => hovercolor || "#AB0202" };
  }
` 