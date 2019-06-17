/*
 * Board contains lists
 * */
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import useAppContext from '../context/useAppContext'
import List from './List'

interface BoardProps {
  boardId?: string
}

const Board: React.FC<BoardProps & RouteComponentProps> = ({ boardId }) => {
  const appContextValue = useAppContext()
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
        <div>
          {board.lists.map(listId => {
            return <List listId={listId} key={listId} />
          })}
        </div>
      </div>
    </BoardWrapper>
  )
}

const BoardWrapper = styled.div`
  border: 1px solid black;
`

export default Board
