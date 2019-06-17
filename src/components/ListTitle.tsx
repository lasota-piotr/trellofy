import React, { useState } from 'react'

import { useAppDispatch, useAppState } from '../context/AppContext'
import ListenForKeys from './ListenForKeys'

interface ListTitleProps {
  listId: string
}

const ListTitle: React.FC<ListTitleProps> = ({ listId }) => {
  const appDispatch = useAppDispatch()
  const appContextValue = useAppState()
  const list = appContextValue.lists.byId[listId]
  const { title } = list
  const [newTitle, setNewTitle] = useState(title)
  const [inputFocused, setInputFocused] = useState(false)

  const onBlurHandle = () => {
    if (newTitle && newTitle !== title) {
      appDispatch({
        type: 'updateListTitle',
        payload: {
          title: newTitle,
          listId,
        },
      })
    } else {
      // reset title to previous
      setNewTitle(title)
    }
    setInputFocused(false)
  }

  const inputRef = React.useRef(null)

  return (
    <div>
      <h3>{list.title}</h3>
      <input
        type="text"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        onBlur={onBlurHandle}
        onFocus={() => setInputFocused(true)}
        ref={inputRef}
      />
      {inputFocused && (
        <ListenForKeys
          callback={() => {
            if (inputRef === null || !inputRef.current) {
              return
            }
            // @ts-ignore
            inputRef.current.blur()
          }}
        />
      )}
    </div>
  )
}

export default ListTitle
