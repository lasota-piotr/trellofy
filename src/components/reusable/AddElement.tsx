import React from 'react'
import { hideVisually } from 'polished'
import styled from 'styled-components'
import { Box, Button, Text } from 'rebass'
import FormAdd, { FormAddProps } from './FormAdd'

interface AddElementProps {
  text: string
  placeholder: string
  maxLength?: number
  onAccept: FormAddProps['onAccept']
}

const AddElement: React.FC<AddElementProps> = ({
  onAccept,
  text,
  placeholder,
  maxLength
}) => {
  return (
    <FormAdd
      onAccept={onAccept}
      renderText={({ getTextProps }) => {
        return (
          <AddElementText as="span" p="0.75rem" {...getTextProps()}>
            {text}
          </AddElementText>
        )
      }}
      renderInput={({
        accept,
        getInputProps,
        inputVisible,
        inputContainerRef,
      }) => {
        return (
          <AddElementForm
            as="form"
            p={1}
            onSubmit={event => {
              event.preventDefault()
              accept()
            }}
            style={inputVisible ? undefined : hideVisually()}
            ref={inputContainerRef}
          >
            <AddElementInput
              p={2}
              mb={2}
              as="input"
              width="100%"
              {...getInputProps()}
              type="text"
              placeholder={placeholder}
              maxLength={maxLength}
              required
            />
            <AddElementButton
              as="input"
              fontSize={1}
              value="Add list"
              type="submit"
            />
          </AddElementForm>
        )
      }}
    />
  )
}

const AddElementText = styled(Text)`
  display: block;
  :hover {
    cursor: pointer;
  }
`

const AddElementForm = styled(Box)``

const AddElementInput = styled(Text)``

const AddElementButton = styled(Button)`
  :hover {
    cursor: pointer;
  }
`

export default AddElement
