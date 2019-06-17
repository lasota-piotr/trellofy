import React from 'react'
import { Router } from '@reach/router'
import Route from './components/Route'
import Board from './components/Board'
import Boards from './components/Boards'

const AppRoot = () => {
  return (
    <Router>
      <Route component={Boards} path="/" />
      <Route component={Board} path="board" />
    </Router>
  )
}

export default AppRoot
