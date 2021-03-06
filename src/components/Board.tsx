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
  if (!board) {
    return <div>Ops can`t find this board</div>
  }
  return (
    <BoardContainer p={3} pt={6} data-testid="view-board">
      <BoardTitleContainer pt={3} pb={2} px={3}>
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
  left: 0;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.colors.lightgray};
`

const BoardContainer = styled(Box)`
  position: relative;
  overflow-x: auto;
  min-height: 100vh;
`

export default Board
