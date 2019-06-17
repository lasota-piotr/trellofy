import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { Link } from '@reach/router'
import Layout from './components/Layout'
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import AppRoot from './AppRoot'
import { AppContextProvider } from './context/AppContext'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Layout>
          <GlobalStyles />
          <header className="App-header">
            Trellofy
            <nav>
              <Link to="/">Boards</Link>
            </nav>
          </header>
          <AppRoot />
        </Layout>
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default App
