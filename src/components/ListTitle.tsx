import React from 'react'
import { useAppDispatch, useAppState } from '../context/AppContext'
import EditableText from './reusable/EditableText'

interface ListTitleProps {
  listId: string
}

const ListTitle: React.FC<ListTitleProps> = ({ listId }) => {
  const appDispatch = useAppDispatch()
  const appContextValue = useAppState()
  const list = appContextValue.lists.byId[listId]
  const { title } = list

  return (
    <div>
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
          <input
            type="text"
            {...getInputProps()}
          />
        )}
        renderText={({ text, getTextProps }) => (
          <div {...getTextProps()}>{text}</div>
        )}
      />
    </div>
  )
}

export default ListTitle
