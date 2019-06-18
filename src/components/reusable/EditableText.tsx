import React, { useState } from 'react'
import { hideVisually } from 'polished'
import VisuallyHidden from '@reach/visually-hidden'
import ListenForKeys from './ListenForKeys'

export enum Keys {
  Esc = 27,
  Enter = 13,
}

interface EditableTextProps {
  text: string
  onAccept: (newText: string) => void
  acceptKeys?: any[]
  renderText: (data: {
    text: string
    getTextProps: () => {
      onClick: () => void
    }
  }) => JSX.Element
  renderInput?: (data: any) => JSX.Element
  optional?: boolean
}

const EditableText: React.FC<EditableTextProps> = ({
  text,
  onAccept,
  acceptKeys = [Keys.Enter, Keys.Esc],
  optional = false,
  renderText,
  renderInput,
}) => {
  const [newText, setNewText] = useState(text)
  const [inputFocused, setInputFocused] = useState(false)

  const onBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (newText !== text && (optional || newText)) {
      onAccept(newText)
    } else {
      // reset text to previous
      setNewText(text)
    }
    setInputFocused(false)
  }

  const inputRef = React.useRef(null)

  const focusInput = () => {
    if (!inputRef || !inputRef.current) {
      return
    }
    // @ts-ignore
    inputRef.current.focus()
  }

  const getTextProps = () => ({
    onClick: focusInput,
  })
  const textElement = renderText({ text, getTextProps })

  const getInputProps = () => ({
    value: newText,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setNewText(e.target.value),
    onBlur: onBlurHandle,
    onFocus: () => setInputFocused(true),
    ref: inputRef,
    style: inputFocused ? undefined : hideVisually(),
  })

  return (
    <>
      {inputFocused ? (
        <VisuallyHidden>{textElement}</VisuallyHidden>
      ) : (
        textElement
      )}

      {typeof renderInput === 'function' && renderInput({ getInputProps })}
      {inputFocused && (
        <ListenForKeys
          callback={() => {
            if (!inputRef || !inputRef.current) {
              return
            }
            // @ts-ignore
            inputRef.current.blur()
          }}
          options={{
            detectKeys: acceptKeys,
          }}
        />
      )}
    </>
  )
}

export default EditableText
