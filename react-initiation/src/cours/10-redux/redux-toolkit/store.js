// npm install @reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})