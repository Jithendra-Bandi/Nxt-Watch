import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
  savedList: [],
  onAddSavedItem: () => {},
  onRemoveSavedItem: () => {},
})

export default AppContext
