import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counter';

import todoReducer from './toDo/todoSlice';

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todos :todoReducer,
  },
})