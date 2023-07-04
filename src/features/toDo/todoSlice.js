import { createSlice} from '@reduxjs/toolkit';

const todoSlice= createSlice({
    name:"todos",
    initialState:[],
    reducer: {
        addToDo:()=>{
            console.log("1")
            // const newTodo = {
            //     text: action.payload,
            //   };
            //   state.todo.push(newTodo);
        }
    }
})
export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer;