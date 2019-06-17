import React, { useState } from 'react'
import { hideVisually } from 'polished'
import VisuallyHidden from '@reach/visually-hidden'
import styled from 'styled-components'
import ListenForKeys from './ListenForKeys'

interface EditableTextProps {
  text: string
  onAccept: (newText: string) => void
  renderText: (data: {
    text: string
    getTextProps: () => {
      onClick: () => void
    }
  }) => JSX.Element
}

const EditableText: React.FC<EditableTextProps> = ({
  text,
  onAccept,
  renderText,
}) => {
  const [newText, setNewText] = useState(text)
  const [inputFocused, setInputFocused] = useState(false)

  const onBlurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (newText && newText !== text) {
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
  return (
    <>
      {inputFocused ? (
        <VisuallyHidden>{textElement}</VisuallyHidden>
      ) : (
        textElement
      )}

      <Input
        type="text"
        value={newText}
        onChange={e => setNewText(e.target.value)}
        onBlur={onBlurHandle}
        onFocus={() => setInputFocused(true)}
        ref={inputRef}
        hide={!inputFocused}
      />
      {inputFocused && (
        <ListenForKeys
          callback={() => {
            if (!inputRef || !inputRef.current) {
              return
            }
            // @ts-ignore
            inputRef.current.blur()
          }}
        />
      )}
    </>
  )
}

interface InputProps {
  hide: boolean
}

const Input = styled.input<InputProps>`
  ${p => p.hide && hideVisually}
`

export default EditableText
