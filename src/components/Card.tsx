import React from 'react'
import styled from 'styled-components'
import useAppContext from '../context/useAppContext'

interface CardProps {
  cardId: string
}

const Card: React.FC<CardProps> = ({ cardId }) => {
  const appContextValue = useAppContext()
  const card = appContextValue.cards.byId[cardId]
  return (
    <CardWrapper>
      Card <div>{cardId} {card.title} {card.description}</div>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  background-color: #efefef;
`

export default Card
