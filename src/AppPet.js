import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import { default as Themes } from './components/Theme/Themes';
import { ThemeProvider } from 'styled-components';

export const AppPet = () => {

  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeProvider theme={ Themes[theme] }>
        <Provider store={ store }>
          <AppRouter theme={theme} setTheme={setTheme}/>        
        </Provider>
      </ThemeProvider>
    </>
  )
}
