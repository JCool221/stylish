import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../components/darkMode/darkModeSlice'

export const store = configureStore({
    reducer:{
        darkMode: darkModeReducer,
    },

})

