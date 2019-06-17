/*
 * List contains cards
 * */
import React from 'react'
import styled from 'styled-components'
import useAppContext from '../context/useAppContext'
import Card from './Card'

interface ListProps {
  listId: string
}

const List: React.FC<ListProps> = ({ listId }) => {
  const appContextValue = useAppContext()
  const list = appContextValue.lists.byId[listId]
  return (
    <ListWrapper>
      List
      <div>
        {listId} {list.title}{' '}
      </div>
      <div>
        {list.cards.map(cardId => (
          <Card cardId={cardId} key={cardId} />
        ))}
      </div>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  border: 1px solid blue;
`

export default List
