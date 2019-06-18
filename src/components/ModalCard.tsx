import React from 'react'
import '@reach/dialog/styles.css'
import styled from 'styled-components'
import { Text } from 'rebass'
import { useAppDispatch, useAppState } from '../context/AppContext'
import Modal from './reusable/Modal'
import EditableText from './reusable/EditableText'
import { Keys } from './reusable/ListenForKeys'

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
            <Text
              {...getTextProps()}
              marginTop={0}
              marginBottom={1}
              fontSize={3}
              fontWeight="bold"
              as="h3"
            >
              {text}
            </Text>
          )}
          renderInput={({ getInputProps }) => (
            <Text
              type="text"
              {...getInputProps()}
              as="input"
              fontSize={3}
              fontWeight="bold"
              width="70%"
              margin="-3px"
            />
          )}
        />
        <EditableText
          text={card.description}
          optional
          onAccept={newText =>
            appDispatch({
              type: 'updateCardDescription',
              payload: {
                description: newText,
                cardId,
              },
            })
          }
          renderInput={({ getInputProps }) => (
            <ModalCardTextarea
              {...getInputProps()}
              as="textarea"
              rows={10}
              fontSize={2}
              width="100%"
            />
          )}
          renderText={({ text, getTextProps }) => (
            <ModalCardDescription
              {...getTextProps()}
              as="p"
              fontSize={2}
              marginTop={3}
            >
              {text || 'Type description here'}
            </ModalCardDescription>
          )}
          acceptKeys={[Keys.Esc]}
        />
      </Modal>
    </div>
  )
}

const ModalCardDescription = styled(Text)`
  white-space: pre;
`

const ModalCardTextarea = styled(Text)`
  margin: ${p => p.theme.space[3] - 7}px -3px -3px;
`

export default ModalCard
