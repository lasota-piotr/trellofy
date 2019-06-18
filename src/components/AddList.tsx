import React from 'react'
import { useAppDispatch } from '../context/AppContext'
import FormAdd from './reusable/FormAdd'
import { hideVisually } from 'polished'

const ADD_LIST_TITLE_INPUT_MAX_LENGTH = 30

interface AddListProps {
  boardId: string
}

const AddList: React.FC<AddListProps> = ({ boardId }) => {
  const appDispatch = useAppDispatch()

  return (
    <div>
      <FormAdd
        onAccept={newText => {
          appDispatch({
            type: 'addList',
            payload: {
              title: newText,
              boardId,
            },
          })
        }}
        renderText={({ getTextProps }) => {
          return <span {...getTextProps()}>+ Add another list</span>
        }}
        renderInput={({
          accept,
          getInputProps,
          inputVisible,
          inputContainerRef,
        }) => {
          return (
            <form
              onSubmit={event => {
                event.preventDefault()
                accept()
              }}
              style={inputVisible ? undefined : hideVisually()}
              ref={inputContainerRef}
            >
              <input
                {...getInputProps()}
                type="text"
                maxLength={ADD_LIST_TITLE_INPUT_MAX_LENGTH}
                placeholder="Enter list title..."
                required
              />
              <input value="Add list" type="submit" />
            </form>
          )
        }}
      />
    </div>
  )
}

export default AddList
