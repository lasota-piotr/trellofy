import React from 'react'
import { useAppDispatch } from '../context/AppContext'

interface AddCardProps {
  listId: string
}

const AddCard: React.FC<AddCardProps> = ({ listId }) => {
  const [cardTitle, setCardTitle] = React.useState('')
  const appDispatch = useAppDispatch()
  const onSubmitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    appDispatch({
      type: 'addCard',
      payload: {
        title: cardTitle,
        listId,
      },
    })
    setCardTitle('')
  }

  return (
    <form onSubmit={onSubmitHandle}>
      <span>+ Add another card</span>
      <input
        type="text"
        value={cardTitle}
        onChange={e => setCardTitle(e.target.value)}
        required
      />
      <input value="Add card" type="submit" />
    </form>
  )
}

export default AddCard
