import React from 'react'
import App from './App'
import renderWithRouter from './testUtils/renderWithRouter'

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
