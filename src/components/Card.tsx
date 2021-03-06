import React from 'react'
import styled from 'styled-components/macro'
import { Card as CardRebass, Text } from 'rebass'
import { ellipsis } from 'polished'
import { useAppState } from '../context/AppContext'

interface CardProps {
  cardId: string
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ cardId, ...rest }) => {
  const appContextValue = useAppState()
  const card = appContextValue.cards.byId[cardId]

  if (!card) {
    return <div>Ops, can`t find card</div>
  }

  return (
    <CardWrapper {...rest}>
      <CardTitle>{card.title}</CardTitle>
      {card.description ? (
        <CardDescription mt={1}>{card.description}</CardDescription>
      ) : null}
    </CardWrapper>
  )
}

const CardTitle = styled(Text).attrs({
  fontSize: 2,
  fontWeight: 'bold',
})`
  ${ellipsis()}
`

const CardDescription = styled(Text)`
  ${ellipsis()}
`

const CardWrapper = styled(CardRebass).attrs({
  fontSize: 2,
  p: 2,
  my: 2,
  bg: 'white',
  borderRadius: 8,
  boxShadow: 'small',
})`
  display: flex;
  flex-direction: column;
  :hover {
    cursor: pointer;
  }
`
export default Card
