import React from 'react'
import { appContextDefaultValue, AppContextValue, appContextValue } from './appContextValue'

export const AppContextProvider: React.FC = props => (
  <AppContext.Provider
    value={appContextValue}
    {...props}
  />
)

const AppContext = React.createContext<AppContextValue>(appContextDefaultValue)

export default AppContext
