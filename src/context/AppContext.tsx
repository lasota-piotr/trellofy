import React from 'react'
import shortid from 'shortid'
import {
  appContextDefaultValue,
  AppState,
  appContextValue,
} from './appContextValue'

interface AppAction {
  type: 'addList'
  payload: {
    title: string
    boardId: string
  }
}

type AppDispatch = (action: AppAction) => void

export const AppStateContext = React.createContext<AppState>(
  appContextDefaultValue,
)

export const AppDispatchContext = React.createContext<AppDispatch | undefined>(
  undefined,
)

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'addList': {
      const listId = shortid.generate()
      const boardId = action.payload.boardId
      return {
        ...state,
        lists: {
          ...state.lists,
          byId: {
            ...state.lists.byId,
            [listId]: {
              id: listId,
              title: action.payload.title,
              cards: [],
            },
          },
          allIds: [...state.lists.allIds, listId],
        },
        boards: {
          ...state.boards,
          byId: {
            ...state.boards.byId,
            [boardId]: {
              ...state.boards.byId[boardId],
              lists: [...state.boards.byId[boardId].lists, listId],
            },
          },
        },
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, setAppState] = React.useReducer(appReducer, appContextValue)
  console.log({ state })
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={setAppState}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error(
      'useAppState must be used within an AppStateContext.Provider',
    )
  }
  return context
}
export const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useAppDispatch must be used within a AppStateContext.Provider',
    )
  }
  return context
}
