import React from 'react'

import {
  appContextDefaultValue,
  AppState,
} from './appContextValue'
import appReducer, { AppAction } from './appReducer'

export type AppDispatch = (action: AppAction) => void

export const AppStateContext = React.createContext<AppState>(
  appContextDefaultValue,
)

export const AppDispatchContext = React.createContext<AppDispatch | undefined>(
  undefined,
)


export const AppContextProvider: React.FC = ({ children }) => {
  const [state, setAppState] = React.useReducer(appReducer, appContextDefaultValue)
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
