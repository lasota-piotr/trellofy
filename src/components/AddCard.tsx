import React from 'react'
import { useAppDispatch } from '../context/AppContext'
import AddElement from './reusable/AddElement'

interface AddCardProps {
  listId: string
}

const AddCard: React.FC<AddCardProps> = ({ listId }) => {
  const appDispatch = useAppDispatch()
  return (
    <AddElement
      text="+ Add another card"
      buttonText="Add card"
      placeholder="Enter a title for this card..."
      onAccept={newText => {
        appDispatch({
          type: 'addCard',
          payload: {
            title: newText,
            listId,
          },
        })
      }}
    />
  )
}

export default AddCard
