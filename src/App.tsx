import React from 'react'
import { AppContextProvider } from './assets/hooks/useAppContext'
import './App.css'

const App: React.FC = () => {

  return (
    <AppContextProvider>
      <h1>Child</h1>
    </AppContextProvider>
  )
}

export default App;
