/*
 * Board contains lists
 * */
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components/macro'
import { useAppState } from '../context/AppContext'
import BoardLists from './BoardLists'
import ModalCard from './ModalCard'

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
    <BoardWrapper>
      <div>
        {board.title}
        {board.id}
      </div>
      <div>
        <BoardLists lists={board.lists} boardId={boardId} />
      </div>
      <ModalCard />
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  border: 1px solid black;
`

export default Board
