import React from 'react'
import styled from 'styled-components/macro'
import { Link } from '@reach/router'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import AppRoot from './AppRoot'
import { Text, Flex } from 'rebass'
import Providers from './Providers'

const App: React.FC = () => {
  return (
    <Providers>
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
    </Providers>
  )
}

const Header = styled(Flex)`
  border-bottom: 1px solid ${p => p.theme.colors.lightgray};
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
`

export default App
