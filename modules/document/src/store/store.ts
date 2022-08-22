import { configureStore } from '@reduxjs/toolkit'

import documentsReducer from './slices/documentSlice'

export const createStore = () =>
  configureStore({
    reducer: {
      documents: documentsReducer,
    },
  })

export type RootState = ReturnType<any>

export type AppDispatch = any
