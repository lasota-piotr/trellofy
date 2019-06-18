import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'
import { render } from '@testing-library/react'
import * as React from 'react'

function renderWithRouter(
  ui: React.ReactElement<any>,
  { route = '/', history = createHistory(createMemorySource(route)) } = {},
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}


export default renderWithRouter
