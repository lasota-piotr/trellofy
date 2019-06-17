import React from 'react'
import styled from 'styled-components/macro'
import { Text } from 'rebass'
import { useAppState } from '../context/AppContext'
import CardWrapper from './CardWrapper'

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
      <div>
        {card.description}
      </div>
    </CardWrapper>
  )
}

const CardTitle = styled(Text).attrs({
  fontSize: 2,
  fontWeight: 'bold',
})``

export default Card
