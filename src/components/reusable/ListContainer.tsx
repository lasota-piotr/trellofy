import styled from 'styled-components'
import { Card as CardRebass } from 'rebass'

const ListContainer = styled(CardRebass).attrs({
  bg: 'lightgray',
  boxShadow: 'small',
  p: 2,
})`
  width: 15em;
`

export default ListContainer
