import { NavLink } from 'react-router-dom'
import { Container, StyleUl } from './styles'
import { useSelector } from 'react-redux'

export const Aside = () => {

  const auth = useSelector(state => state.auth)
  
  return (
    <Container>      
        <nav>
        <StyleUl>
          <NavLink to="/inicio"className={ ({ isActive }) => (isActive ? 'active' : 'inactive' )} end >
            <li className='navbtn'>
              <span>Inicio</span>            
            </li> 
          </NavLink>        
          
          <NavLink to="/mascotas" className={ ({ isActive }) => (isActive ? 'active' : 'inactive' )} >
            <li className='navbtn'>
            <span>Mascotas</span>       
            </li>
          </NavLink>
          
          {
            (auth.role === "ADMIN") 
            ?  
            <NavLink to="/panel" className={ ({ isActive }) => (isActive ? 'active' : 'inactive' )} >
              <li className='navbtn'>
              <span>Panel</span>       
              </li>
            </NavLink> 
            :   
            <NavLink to="/favoritos" className={ ({ isActive }) => (isActive ? 'active' : 'inactive' )} > 
              <li className='navbtn'>
                <span>Favoritos</span>
              </li>
            </NavLink>
          }          
        </StyleUl>
        </nav>  
    </Container>
  )
}
