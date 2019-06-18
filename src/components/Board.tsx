/*
 * Board contains lists
 * */
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components/macro'
import { useAppState } from '../context/AppContext'
import BoardLists from './BoardLists'
import ModalCard from './ModalCard'
import { Box, Text } from 'rebass'

interface BoardProps {
  boardId?: string
}

const Board: React.FC<BoardProps & RouteComponentProps> = ({ boardId }) => {
  const appContextValue = useAppState()
  if (!boardId) {
    return null
  }
  const board = appContextValue.boards.byId[boardId]
  return (
    <BoardContainer p={3} pt={5} data-testid="view-board">
      <BoardTitleContainer p={2}>
        <Text as="h2" m={1}>
          {board.title}
        </Text>
      </BoardTitleContainer>
      <BoardLists lists={board.lists} boardId={boardId} />
      <ModalCard />
    </BoardContainer>
  )
}

const BoardTitleContainer = styled(Box)`
  position: fixed;
  top: 3rem;
`

const BoardContainer = styled(Box)`
  position: relative;
`

export default Board
