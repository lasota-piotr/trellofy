/*
 * List contains cards
 * */
import React from 'react'
import styled from 'styled-components/macro'
import { Card as CardRebass, CardProps } from 'rebass'
import { useAppDispatch, useAppState } from '../context/AppContext'
import Card from './Card'
import AddCard from './AddCard'
import ListTitle from './ListTitle'

interface ListProps extends CardProps {
  listId: string
}

const List: React.FC<ListProps> = ({ listId, ...rest }) => {
  const appContextValue = useAppState()
  const appDispatch = useAppDispatch()
  const list = appContextValue.lists.byId[listId]
  return (
    //@ts-ignore
    <ListWrapper {...rest}>
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
    </ListWrapper>
  )
}

const ListWrapper = styled(CardRebass).attrs({
  bg: 'lightgray',
  boxShadow: 'small',
  p: 2,
})`
  width: 15em;
`

export default List
