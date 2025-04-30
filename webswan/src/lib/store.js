// src/lib/store.js
'use client'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/authSlice'   // ← ou './slices/counerSlice' si tu ne renommes pas

export const store = configureStore({
  reducer: {
    counter: counterReducer     // state.counter.value …
  }
})
