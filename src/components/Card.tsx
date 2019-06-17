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
  return (
    <CardWrapper {...rest}>
      <CardTitle>{card.title}</CardTitle>
      <CardDescription>{card.description}</CardDescription>
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
  p: 1,
  my: 2,
  bg: 'white',
  borderRadius: 8,
  boxShadow: 'small',
})`
  display: flex;
  flex-direction: column;
`
export default Card
