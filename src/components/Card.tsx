import React from 'react'
import styled from 'styled-components/macro'
import { Text } from 'rebass'
import {useAppState} from '../context/AppContext'
import CardWrapper from './CardWrapper'

interface CardProps {
  cardId: string
}

const Card: React.FC<CardProps> = ({ cardId }) => {
  const appContextValue = useAppState()
  const card = appContextValue.cards.byId[cardId]
  return (
    <CardWrapper>
      <CardTitle>{card.title}</CardTitle>
      Card{' '}
      <div>
        {cardId} {card.description}
      </div>
    </CardWrapper>
  )
}

const CardTitle = styled(Text).attrs({
  fontSize: 2,
  fontWeight: 'bold',
})``

export default Card
