import React from 'react'
import { useAppDispatch, useAppState } from '../context/AppContext'
import EditableText from './reusable/EditableText'
import { Text } from 'rebass'
import styled from 'styled-components'
import { ellipsis } from 'polished'
import { ADD_LIST_TITLE_INPUT_MAX_LENGTH } from './constants/list'

interface ListTitleProps {
  listId: string
}

const ListTitle: React.FC<ListTitleProps> = ({ listId }) => {
  const appDispatch = useAppDispatch()
  const appContextValue = useAppState()
  const list = appContextValue.lists.byId[listId]

  if (!list) {
    return <div>Ops, can`t find list</div>
  }

  const { title } = list

  return (
    <header>
      <EditableText
        text={title}
        onAccept={newText =>
          appDispatch({
            type: 'updateListTitle',
            payload: {
              title: newText,
              listId,
            },
          })
        }
        renderInput={({ getInputProps }) => (
          <Text
            width="100%"
            p={1}
            mt={1}
            fontSize={3}
            maxLength={ADD_LIST_TITLE_INPUT_MAX_LENGTH}
            fontWeight="bold"
            as="input"
            type="text"
            {...getInputProps()}
          />
        )}
        renderText={({ text, getTextProps }) => (
          <ListTitleText as="h3" fontSize={3} m={2} mb={3} {...getTextProps()}>
            {text}
          </ListTitleText>
        )}
      />
    </header>
  )
}

const ListTitleText = styled(Text)`
  ${ellipsis()};
  :hover {
    cursor: pointer;
  }
`

export default ListTitle
