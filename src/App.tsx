import React from 'react'
import { AppContextProvider } from './assets/hooks/useAppContext'
import { LaunchButton } from './components/LaunchButton'
import { BUTTON_LAUNCH_TEXT } from './assets/constants'
import './App.css'

const App: React.FC = () => {

  return (
    <AppContextProvider>
      <LaunchButton text={BUTTON_LAUNCH_TEXT} />
    </AppContextProvider>
  )
}

export default App;
