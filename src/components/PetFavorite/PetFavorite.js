import React, { useEffect, useState } from 'react'
import { BoxMascota, NamePet, 
          PhotoPet, StyledFavoriteIcon,
          DataPet, ImagePet, MyCloseIcon, 
          StyledFavoriteDetail,
          ModalDiv, BodyDiv, 
          ContentDiv, 
          NameDetail,
          AgeDetail,
          DescDetail} from '../PetGallery/styles'


import { useDispatch, useSelector } from 'react-redux';
import { petsStartLoading, petGetTypes, petAddFavorite, petRemoveFavorite } from '../../actions/pets';
import { Container } from './styles';


export const PetFavorite = () => {

  const dispatch = useDispatch();
  const { pets } = useSelector( state => state.pets)
  const { tps } = useSelector( state => state.pets)

  const [showModal, setShowModal] = useState(false);

  const [PetDetail, setPetDetail] = useState([])
  
  const { _id, name, 
          pet_type_id, 
          tagFav,
          age, 
          description, 
          image_url  } = PetDetail;


  const hideModal = () => {
    setShowModal(!showModal)
  }

  const handleFavorite = (id, tag)=> {   

    if ( tag ) {
      dispatch( petRemoveFavorite(id) );
    }
    else {
      dispatch( petAddFavorite(id) );
    }

  }
  const handleDetalle = (sId) => {
    
    const petDet = pets?.find( (obj)=> obj._id === sId )
    setPetDetail({...petDet});
    setShowModal(!showModal)    
  }  

  useEffect(() => {
    
    dispatch( petsStartLoading() );    
    dispatch( petGetTypes() );

  }, [ dispatch ]) 


  const listpets = pets?.filter( (obj) => obj.tagFav === true );
  

  return (
    <Container>    
    {    
      (listpets.length !== 0)
      ?
      // <GalleryBox>    
      
        listpets.map( (pet, i) => (
          <BoxMascota key={ pet._id} >
            <PhotoPet src={pet.image_url} onClick={ ()=> handleDetalle(pet._id)} ></PhotoPet>
            <NamePet>{pet.name} - { tps?.filter( (tp) => (tp._id === pet.pet_type_id) ).map( obj => obj.name )  }</NamePet>
            <StyledFavoriteIcon 
              hovercolor={ pet.tagFav ? "black" : "red" } 
              color={ pet.tagFav ? "red" : "black" }  
              onClick={ ()=> handleFavorite( pet._id, pet.tagFav )}
            />          
          </BoxMascota>      
        ))
      :
      <div>
        <h1>Aun no tienes mascotas favoritas.</h1>
      </div>    
    }
      <ModalDiv block={ showModal ? 'block': 'none'} >
        <BodyDiv>
          {        
            <ContentDiv>         
              <ImagePet src={ image_url }/>
              <StyledFavoriteDetail 
                  hovercolor={ tagFav ? "black" : "red" } 
                  color={ tagFav ? "red" : "black" }  
                  onClick={ ()=> handleFavorite( _id, tagFav )}
                />
              <DataPet>
                <NameDetail>{ name } - { tps?.filter( (tp) => (tp._id === pet_type_id) ).map( obj => obj.name )  }</NameDetail>
                <AgeDetail>{ age } meses</AgeDetail>
                <DescDetail>{ description } </DescDetail>
              </DataPet>
                        
              <MyCloseIcon onClick={ ()=> hideModal() }/>        
            </ContentDiv>        
          
          }
        </BodyDiv>      
      </ModalDiv> 
    </Container>
  )
}
