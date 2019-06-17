import React from 'react'
import { Link } from '@reach/router'
import useAppContext from '../context/useAppContext'

const Boards = () => {
  const appContextValue = useAppContext()
  const boardsIds = appContextValue.boards.allIds

  return (
    <div>
      Boards
      <div>
        {boardsIds.map(boardId => {
          const boardTitle = appContextValue.boards.byId[boardId].title
          return (
            <Link to={`/boards/${boardId}`} key={boardId}>
              {boardTitle}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Boards
