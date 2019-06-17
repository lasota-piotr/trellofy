import React from 'react'

import '@reach/dialog/styles.css'
import { useAppDispatch, useAppState } from '../context/AppContext'
import Modal from './reusable/Modal'
import EditableText from './reusable/EditableText'

export type SetShowModal = (value: boolean) => void

const ModalCard: React.FC = () => {
  const appContextValue = useAppState()
  const appDispatch = useAppDispatch()
  const { cardId, show } = appContextValue.ui.modalCard
  if (!cardId) {
    return null
  }
  const card = appContextValue.cards.byId[cardId]

  return (
    <div>
      <Modal
        showModal={show}
        setShowModal={showModal =>
          appDispatch({
            type: 'changeShowModal',
            payload: { show: showModal, cardId },
          })
        }
      >
        <EditableText
          text={card.title}
          onAccept={newText =>
            appDispatch({
              type: 'updateCardTitle',
              payload: {
                title: newText,
                cardId,
              },
            })
          }
          renderText={({ text, getTextProps }) => (
            <h3 {...getTextProps()}>{text}</h3>
          )}
        />
        <EditableText
          text={card.description}
          onAccept={newText =>
            appDispatch({
              type: 'updateCardDescription',
              payload: {
                description: newText,
                cardId,
              },
            })
          }
          renderText={({ text, getTextProps }) => (
            <div {...getTextProps()}>{text || 'Type description here'}</div>
          )}
        />
      </Modal>
    </div>
  )
}

export default ModalCard
