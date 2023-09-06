import { useSelector, useDispatch } from 'react-redux';

import { BoxImg, BrandLogo, Container, ContentLogo, ContentSession, ImgProfile, Logo, Logout, Nav, SwitchButton, SwitchMode, UserProfile } from './styles'
import { startLogout } from '../../../actions/auth';
import { finishLoading } from '../../../actions/ui';

import logo from '../../../assets/images/logo192.png';
import logo1 from '../../../assets/images/logopets192g.png';
import userProfile from '../../../assets/images/userprofile.png';

import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useState } from 'react';

export const Header = (props) => {

  const [toggleState, setToggleState] = useState(false)
  const dispatch = useDispatch();
  const { name } = useSelector( state => state.auth );

  const handleLogout = () => {
    dispatch( startLogout() )

    dispatch( finishLoading() )
  }

  const changeMode = () => { 
    if (props.theme === 'light') {
      props.setTheme('dark')
      changeToggle();
    }else {
      props.setTheme('light')
      changeToggle();
    }
  }

  const changeToggle = () => {
    setToggleState( !toggleState )
  }

  return (
    <Container>
      <Nav>
        <ContentLogo>
          <Logo src={logo} src1={logo1} ></Logo>
          <BrandLogo>Pets</BrandLogo>
        </ContentLogo>
          <SwitchMode>
            <SwitchButton onClick={() => changeMode() } mode= { toggleState.toString() } >
              {
                toggleState 
                ? <BsMoonFill color='white' />
                : <BsSun />
              }
            </SwitchButton>
          </SwitchMode>
        <ContentSession>
          <UserProfile>
            <BoxImg>
              <ImgProfile src={userProfile} alt="Perfil"/>
            </BoxImg>
            <h1>{name}</h1>        
          </UserProfile>
          <Logout onClick={ handleLogout } >          
            Cerrar sesión               
          </Logout>     
        </ContentSession>  
      </Nav>
    </Container>
  )
}
