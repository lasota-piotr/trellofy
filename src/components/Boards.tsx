import React from 'react'
import { Link } from '@reach/router'
import { useAppState } from '../context/AppContext'
import { Box, Text } from 'rebass'

const Boards = () => {
  const appContextValue = useAppState()
  const boardsIds = appContextValue.boards.allIds

  return (
    <Box px={4} data-testid="view-boards">
      <Text as="h2" m={2}>
        Boards
      </Text>
      <div>
        {boardsIds.map(boardId => {
          const board = appContextValue.boards.byId[boardId]
          if (!board) {
            return null
          }
          const boardTitle = board.title
          return (
            <Link to={`/boards/${boardId}`} key={boardId}>
              <Text m={2}>{boardTitle}</Text>
            </Link>
          )
        })}
      </div>
    </Box>
  )
}

export default Boards
