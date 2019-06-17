import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { Link } from '@reach/router'
import Layout from './components/Layout'
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import AppRoot from './AppRoot'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <header className="App-header">
          Trellofy
          <nav>
            <Link to="/">Boards</Link> <Link to="/board">Board</Link>
          </nav>
        </header>
        <AppRoot />
      </Layout>
    </ThemeProvider>
  )
}

export default App
