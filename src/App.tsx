import React from 'react'
import { AppContextProvider } from './assets/hooks/useAppContext'
import { LaunchButton } from './components/LaunchButton'
import { DynamicTitle } from './components/DynamicTitle'
import { WindmillCounter } from './components/WindmillCounter'
import { Windmill } from './components/Windmill'
import { BackgroundWrap } from './components/BackgroundWrap'
import { BUTTON_LAUNCH_TEXT, DYNAMIC_TITLE_TITLE } from './assets/constants'
import './App.css'

const App: React.FC = () => {

  return (
    <AppContextProvider>
      <BackgroundWrap>
        <Windmill />
      </BackgroundWrap>
      <WindmillCounter />
      <div className='title-n-button-container'>
        <DynamicTitle title={DYNAMIC_TITLE_TITLE} />
        <LaunchButton text={BUTTON_LAUNCH_TEXT} />
      </div>
    </AppContextProvider>
  )
}

export default App;
