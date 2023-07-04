import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: { // Use "reducers" instead of "reducer"
    addToDo: (state, action) => {
      const newTodo = {
        id:Date.now(),
        text: action.payload,
      };
      state.push(newTodo);
    },
    removeFromToDo: (state, action) => {
      return state.filter( todo => todo.id !==action.payload)
    },
  },
});

export const { addToDo,removeFromToDo } = todoSlice.actions;
export default todoSlice.reducer;
