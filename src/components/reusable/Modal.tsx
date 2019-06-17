import React from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import styled from 'styled-components/macro'
import { SetShowModal } from '../ModalCard'
import media from '../../styles/media'
import CloseIcon from './CloseIcon'

interface ModalCardProps {
  showModal: boolean
  setShowModal: SetShowModal
}

const Modal: React.FC<ModalCardProps> = ({
  showModal,
  setShowModal,
  children,
}) => {
  return (
    <DialogStyled isOpen={showModal} onDismiss={() => setShowModal(false)}>
      <CloseButton onClick={() => setShowModal(false)}>
        <VisuallyHidden>Close</VisuallyHidden>
        <CloseIcon />
      </CloseButton>
      {children}
    </DialogStyled>
  )
}

const DialogStyled = styled(Dialog)`
  position: relative;

  &[data-reach-dialog-content] {
    width: 95%;
    ${media.tablet`
      width: 50vw;
    `}
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  position: absolute;
  right: 1em;
  top: 1em;
`

export default Modal
