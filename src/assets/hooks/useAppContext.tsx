import React, { useReducer, useContext } from 'react';

const AppContext = React.createContext<AppStateContext|null>(null);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialAppState: AppState = APP_STATE.NONE;
  const [ state, dispatch ] = useReducer(appStateReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useChartContext must be used within a ChartContextProvider');
  }
  return context;
};

const appStateReducer = (appState: AppState, action: AppReducerAction): AppState => {
  switch (action.type) {
    case APP_REDUCER_ACTION.SPIN_WINDMILL:
      return APP_STATE.WINDMILL_SPINNING;
    case APP_REDUCER_ACTION.AWAIT_USER:
      return APP_STATE.AWAITING_USER;
    case APP_REDUCER_ACTION.PLAY_INTRO:
      return APP_STATE.INTRO;
    default:
      return appState;
  }
};

export type AppStateContext = {
  state: AppState;
  dispatch: React.Dispatch<AppReducerAction>;
};

type ObjectValues<T> = T[keyof T];

export type AppState = ObjectValues<typeof APP_STATE>;

export type AppReducerAction = {
  type: ObjectValues<typeof APP_REDUCER_ACTION>;
};

export const APP_STATE = {
  NONE: 'NONE',
  INTRO: 'INTRO',
  AWAITING_USER: 'AWAITING_USER',
  WINDMILL_SPINNING: 'WINDMILL_SPINNING',
} as const;

export const APP_REDUCER_ACTION = {
  SPIN_WINDMILL: 'SPIN_WINDMILL',
  AWAIT_USER: 'AWAIT_USER',
  PLAY_INTRO: 'PLAY_INTRO',
} as const;