import React from 'react'
import GlobalStyles from '../../../styles/GlobalStyles';
import { Aside } from '../Aside/Aside';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import { Container } from './styles';

export const HomeScreen = ({ children }) => {
  return (
    <>
      <Container>
        <header className='header'>
          <Header/>
        </header>
        <aside className='sidebar'>
          <Aside/>
        </aside>
        <article className='main'>
          { children }
        </article>        
      </Container>
      <GlobalStyles/>
    </>
  )
}
