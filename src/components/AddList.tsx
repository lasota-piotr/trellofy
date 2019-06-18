import React from 'react'
import { Box, Button, CardProps, Text } from 'rebass'
import { hideVisually } from 'polished'
import styled from 'styled-components'
import { useAppDispatch } from '../context/AppContext'
import FormAdd from './reusable/FormAdd'
import ListContainer from './reusable/ListContainer'

const ADD_LIST_TITLE_INPUT_MAX_LENGTH = 30

interface AddListProps extends CardProps {
  boardId: string
}

const AddList: React.FC<AddListProps> = ({ boardId, ...props }) => {
  const appDispatch = useAppDispatch()

  return (
    // @ts-ignore
    <AddListContainer padding={0} {...props}>
      <FormAdd
        onAccept={newText => {
          appDispatch({
            type: 'addList',
            payload: {
              title: newText,
              boardId,
            },
          })
        }}
        renderText={({ getTextProps }) => {
          return (
            <AddListText as="span" p="0.75rem" {...getTextProps()}>
              + Add another list
            </AddListText>
          )
        }}
        renderInput={({
          accept,
          getInputProps,
          inputVisible,
          inputContainerRef,
        }) => {
          return (
            <AddListForm
              as="form"
              p={1}
              onSubmit={event => {
                event.preventDefault()
                accept()
              }}
              style={inputVisible ? undefined : hideVisually()}
              ref={inputContainerRef}
            >
              <AddListInput
                p={2}
                mb={2}
                as="input"
                width="100%"
                {...getInputProps()}
                type="text"
                maxLength={ADD_LIST_TITLE_INPUT_MAX_LENGTH}
                placeholder="Enter list title..."
                required
              />
              <AddListButton as="input" fontSize={1} value="Add list" type="submit" />
            </AddListForm>
          )
        }}
      />
    </AddListContainer>
  )
}

const AddListContainer = styled(ListContainer)`
  align-self: start;
`

const AddListText = styled(Text)`
  display: block;
  :hover {
    cursor: pointer;
  }
`

const AddListForm = styled(Box)``

const AddListInput = styled(Text)``

const AddListButton = styled(Button)`
  :hover {
    cursor: pointer;
  }
`

export default AddList
