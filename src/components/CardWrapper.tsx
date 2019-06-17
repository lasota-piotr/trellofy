import { Card as CardRebass } from 'rebass'
import * as React from 'react'

const CardWrapper: React.FC = props => (
  <CardRebass
    fontSize={2}
    p={1}
    my={2}
    bg="white"
    borderRadius={8}
    boxShadow="small"
    {...props}
  />
)

export default CardWrapper
