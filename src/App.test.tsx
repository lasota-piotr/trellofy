import React from 'react'
import renderWithRouter from '../__tests__/testUtils/renderWithRouter'
import App from './App'

jest.mock('./context/appContextValue')

describe('App', () => {
  test('full app rendering/navigating', async () => {
    const {
      history: { navigate },
      getByText,
      getByTestId,
      queryByTestId
    } = renderWithRouter(<App />)
    getByText('Trellofy')
    getByText('Boards')

    getByTestId('view-boards')


    // Navigate to to board view
    await navigate('/boards/board01')
    getByText('Trellofy')
    getByTestId('view-board')
    expect(queryByTestId('view-boards')).toBeNull()
    getByText('Board 01')
  })
})
