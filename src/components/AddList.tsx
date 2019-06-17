import React from 'react'
import { useAppDispatch } from '../context/AppContext'

const ADD_LIST_TITLE_INPUT_MAX_LENGTH = 30

interface AddListProps {
  boardId: string
}

const AddList: React.FC<AddListProps> = ({ boardId }) => {
  const [listTitle, setListTitle] = React.useState('')
  const appDispatch = useAppDispatch()
  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    appDispatch({
      type: 'addList',
      payload: {
        title: listTitle,
        boardId,
      },
    })
    setListTitle('')
  }

  return (
    <form onSubmit={onSubmitHandle}>
      <span>+ Add another list</span>
      <input
        type="text"
        maxLength={ADD_LIST_TITLE_INPUT_MAX_LENGTH}
        value={listTitle}
        onChange={e => setListTitle(e.target.value)}
        required
      />
      <input value="Add list" type="submit" />
    </form>
  )
}

export default AddList
