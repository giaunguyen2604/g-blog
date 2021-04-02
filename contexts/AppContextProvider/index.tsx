import React, { useState, useContext } from 'react';
import { contentType } from '../../constants'

type AppType = {
  currentContent: string,
  updateCurrentContent: (content: string) => void
}

const AppContext = React.createContext<AppType | null>(null)

const AppProvider: React.FC = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<string>(contentType.INTRO)

  const updateCurrentContent = (content: string) => {
    setCurrentContent(content);
  }

  const value = {
    currentContent,
    updateCurrentContent
  }

  return (
    <AppContext.Provider value={value}>
      { children}
    </AppContext.Provider>
  )
}

const useAppContext = (): AppType => {
  const appContext = useContext(AppContext)
  return appContext 
}

export { AppProvider, useAppContext }