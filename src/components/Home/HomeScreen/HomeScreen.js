import GlobalStyles from '../../../styles/GlobalStyles';
import { Aside } from '../Aside/Aside';
import { Header } from '../Header/Header';

import { Container } from './styles';
import { Footer } from '../Footer/Footer';

export const HomeScreen = ({ children, theme, setTheme }) => {

  return (
    <>
      <Container>
        <header className='header'>
          <Header theme={theme} setTheme={setTheme}/>
        </header>
        <aside className='sidebar'>
          <Aside/>
        </aside>
        <article className='main'>
          { children }
        </article> 
        <footer className='footer'>
          <Footer />                 
        </footer>
      </Container>
      <GlobalStyles/>
    </>
  )
}
