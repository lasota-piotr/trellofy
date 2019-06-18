import React from 'react'
import { Box, Button, CardProps, Text } from 'rebass'
import { hideVisually } from 'polished'
import styled from 'styled-components'
import { useAppDispatch } from '../context/AppContext'
import FormAdd from './reusable/FormAdd'
import ListContainer from './reusable/ListContainer'
import AddElement from './reusable/AddElement'

const ADD_LIST_TITLE_INPUT_MAX_LENGTH = 30

interface AddListProps extends CardProps {
  boardId: string
}

//appDispatch({
//             type: 'addList',
//             payload: {
//               title: newText,
//               boardId,
//             },
//           })

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
