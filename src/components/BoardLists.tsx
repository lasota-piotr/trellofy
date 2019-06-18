import React from 'react'
import styled from 'styled-components'
import { Board } from '../context/appContextValue'
import List from './List'
import AddList from './AddList'

interface BoardListsProps {
  lists: Board['lists']
  boardId: string
}

const BoardLists: React.FC<BoardListsProps> = ({
  lists,
  boardId,
}) => {
  return (
    <BoardListsWrapper>
      {lists.map(listId => {
        return (
          <List
            listId={listId}
            key={listId}
            m={2}
          />
        )
      })}
      <AddList boardId={boardId} m={2} />
    </BoardListsWrapper>
  )
}

const BoardListsWrapper = styled.div`
  display: flex;
`

export default BoardLists
