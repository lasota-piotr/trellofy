/*
 * List contains cards
 * */
import React from 'react'
import { useAppDispatch, useAppState } from '../context/AppContext'
import Card from './Card'
import AddCard from './AddCard'
import ListTitle from './ListTitle'
import ListContainer from './reusable/ListContainer'
import { CardProps } from 'rebass'


interface ListProps extends CardProps {
  listId: string
}

const List: React.FC<ListProps> = ({ listId, ...rest }) => {
  const appContextValue = useAppState()
  const appDispatch = useAppDispatch()
  const list = appContextValue.lists.byId[listId]
  return (
    //@ts-ignore
    <ListContainer as="article" {...rest}>
      <ListTitle listId={listId} />

      <div>
        {list.cards.map(cardId => (
          <Card
            cardId={cardId}
            key={cardId}
            onClick={() => {
              appDispatch({
                type: 'changeShowModal',
                payload: { show: true, cardId },
              })
            }}
          />
        ))}
      </div>
      <AddCard listId={listId} />
    </ListContainer>
  )
}

export default List
