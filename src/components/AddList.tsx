import React from 'react'
import styled from 'styled-components'
import { CardProps } from 'rebass'
import { useAppDispatch } from '../context/AppContext'
import ListContainer from './reusable/ListContainer'
import AddElement from './reusable/AddElement'

const ADD_LIST_TITLE_INPUT_MAX_LENGTH = 30

interface AddListProps extends CardProps {
  boardId: string
}

const AddList: React.FC<AddListProps> = ({ boardId, ...props }) => {
  const appDispatch = useAppDispatch()

  return (
    // @ts-ignore
    <AddListContainer padding={0} {...props}>
      <AddElement
        text="+ Add another list"
        placeholder="Enter list title..."
        maxLength={ADD_LIST_TITLE_INPUT_MAX_LENGTH}
        onAccept={newText => {
          appDispatch({
            type: 'addList',
            payload: {
              title: newText,
              boardId,
            },
          })
        }}
      />
    </AddListContainer>
  )
}

const AddListContainer = styled(ListContainer)`
  align-self: start;
`

export default AddList
