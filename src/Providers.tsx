import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { AppContextProvider } from './context/AppContext'

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>{children}</AppContextProvider>
    </ThemeProvider>
  )
}

export default Providers
