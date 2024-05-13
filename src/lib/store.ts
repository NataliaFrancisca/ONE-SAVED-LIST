import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from './features/inputToggle/inputToggle';
import inputReducer from './features/inputSearchValue/inputSearchValue';
import userContentReducer from './features/userContent/userContent';

export const store = () => {
  return configureStore({
    reducer: {
      toggle: toggleReducer,
      inputSearchValue: inputReducer,
      userContent: userContentReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']