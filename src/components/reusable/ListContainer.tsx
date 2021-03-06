import styled from 'styled-components'
import { Card as CardRebass } from 'rebass'

const ListContainer = styled(CardRebass).attrs({
  bg: 'lightgray',
  boxShadow: 'small',
  borderRadius: '3px',
  p: 2,
})`
  width: 15em;
  flex-shrink: 0;
  align-self: start;
`

export default ListContainer
