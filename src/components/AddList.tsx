import React from 'react'
import { CardProps } from 'rebass'
import { useAppDispatch } from '../context/AppContext'
import ListContainer from './reusable/ListContainer'
import AddElement from './reusable/AddElement'
import { ADD_LIST_TITLE_INPUT_MAX_LENGTH } from './constants/list'

interface AddListProps extends CardProps {
  boardId: string
}

const AddList: React.FC<AddListProps> = ({ boardId, ...props }) => {
  const appDispatch = useAppDispatch()

  return (
    // @ts-ignore
    <ListContainer padding={0} {...props}>
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
    </ListContainer>
  )
}

export default AddList
