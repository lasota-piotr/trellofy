/*
 * Board contains lists
 * */
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import useAppContext from '../context/useAppContext'

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
    <div>
      Board {boardId}{' '}
      <div>
        {board.title}
        {board.id}
      </div>
    </div>
  )
}

export default Board
