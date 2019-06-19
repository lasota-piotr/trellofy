import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import {
  Board as IBoard,
  Card as ICard,
  List as IList,
} from '../context/appContextValue'
import renderWithSetup from '../../__tests__/testUtils/renderWithSetup'
import { appContextDefaultValue } from '../context/__mocks__/appContextValue'
import Board from './Board'

jest.mock('../context/appContextValue')

describe('Board', () => {
  const boardId = 'board01'
  test('should render correctly', () => {
    const board = appContextDefaultValue.boards.byId[boardId] as IBoard
    const listId = board.lists[0]

    const list = appContextDefaultValue.lists.byId[listId] as IList
    const cardId = list.cards[0]
    const card = appContextDefaultValue.cards.byId[cardId] as ICard
    const { getByText } = renderWithSetup(<Board boardId={boardId} />)

    getByText(board.title)
    getByText(list.title)
    getByText(card.title)
  })

  test('should add list', () => {
    const {
      getByText,
      getByPlaceholderText,
      getByTestId,
    } = renderWithSetup(<Board boardId={boardId} />)

    const formElement = getByTestId('add-list-form')

    // form is invisible
    expect(formElement).toHaveStyle('clip-path: inset(50%)')

    fireEvent.click(getByText(/Add another list/))

    // form is visible
    expect(formElement).not.toHaveStyle('clip-path: inset(50%)')
    const input = getByPlaceholderText(/Enter list title/) as HTMLInputElement
    const MOCK_TEXT = 'abc'
    fireEvent.change(input, { target: { value: MOCK_TEXT } })
    expect(input.value).toBe(MOCK_TEXT)
    fireEvent.click(getByText(/Add list/))

    // added new list with correct title
    expect(getByText(MOCK_TEXT)).toHaveAttribute('data-testid', 'list-title-text')
  })
})
