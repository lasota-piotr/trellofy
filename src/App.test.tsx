import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should render correctly', () => {
    const { getByText } = render(<App />)

    getByText('Trellofy')
    getByText('Boards')
  })
})
