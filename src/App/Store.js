import { configureStore } from '@reduxjs/toolkit'
import  cart  from './Shopping'

export const store = configureStore({
  reducer: {
    cart:cart,
  },
})