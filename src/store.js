import { configureStore } from '@reduxjs/toolkit'
import reducer from './features/TodoSlice'

export const store = configureStore({
    reducer: {
        todos: reducer
    },
})