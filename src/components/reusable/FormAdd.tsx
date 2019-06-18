import React, { useState } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import useOutsideClick from 'react-outside-click-hook';
import ListenForKeys, { Keys } from './ListenForKeys'

type GetInputProps = () => any
type Accept = () => void

interface FormAddProps {
  onAccept: (newText: string) => void
  renderText: (data: {
    getTextProps: () => {
      onClick: () => void
    }
  }) => JSX.Element
  renderInput: (data: {
    getInputProps: GetInputProps
    accept: Accept
    inputVisible: boolean,
    inputContainerRef: React.Ref<any>
  }) => JSX.Element
}

const FormAdd: React.FC<FormAddProps> = ({
  renderInput,
  onAccept,
  renderText,
}) => {
  const [newText, setNewText] = useState('')
  const [inputVisible, setInputVisible] = useState(false)
  const inputContainerRef = React.useRef(null)
  const inputRef = React.useRef(null)




  const focusInput = () => {
    if (!inputRef || !inputRef.current) {
      return
    }
    // @ts-ignore
    inputRef.current.focus()
  }
  const showInput = () => {
    focusInput()
    setInputVisible(true)
  }

  useOutsideClick(
    // Ref to the container element
    inputContainerRef,
    // Callback function to be called on outside click
    setInputVisible,
    // When to disable the outside click handler, ie. when the modal is closed.
    inputVisible
  )


  const getTextProps = () => ({
    onClick: showInput,
  })
  const textElement = renderText({ getTextProps })

  const accept = () => {
    onAccept(newText)
    setNewText('')
  }

  const getInputProps = () => ({
    value: newText,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewText(e.target.value)
    },
    ref: inputRef,
  })

  return (
    <>
      {inputVisible ? (
        <VisuallyHidden>{textElement}</VisuallyHidden>
      ) : (
        textElement
      )}
      {typeof renderInput === 'function' &&
        renderInput({ accept, getInputProps, inputVisible, inputContainerRef })}
      {inputVisible && (
        <ListenForKeys
          callback={() => {
            if (!inputRef || !inputRef.current) {
              return
            }

            // @ts-ignore
            setInputVisible(false)
          }}
          options={{
            detectKeys: [Keys.Esc],
          }}
        />
      )}
    </>
  )
}

export default FormAdd
