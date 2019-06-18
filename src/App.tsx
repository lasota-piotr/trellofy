import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import { Link } from '@reach/router'
import Layout from './components/Layout'
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import AppRoot from './AppRoot'
import { AppContextProvider } from './context/AppContext'
import { Text, Flex } from 'rebass'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Layout>
          <GlobalStyles />
          <Header as="header" px={4} py={1} alignItems="center">
            <nav>
              <Link to="/">
                <Text as="h1" fontSize={2} mr={4}>
                  Trellofy
                </Text>
              </Link>
            </nav>
          </Header>
          <AppRoot />
        </Layout>
      </AppContextProvider>
    </ThemeProvider>
  )
}

const Header = styled(Flex)`
  border-bottom: 1px solid ${p => p.theme.colors.lightgray};
  position: fixed;
  top: 0;
  width: 100%;
`

export default App
