import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import Layout from './components/Layout'
import theme from './styles/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React !!!
          </a>
        </header>
      </Layout>
    </ThemeProvider>
  )
}

export default App
