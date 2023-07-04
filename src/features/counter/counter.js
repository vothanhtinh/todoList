import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
        if (state.value > 0) {
          state.value -= 1;
        } else {
            state.value = 0;
        }
    },

    decrementByAmount:(state, action)=>{
      if (state.value >= 3) {
        state.value -= action.payload
      } 
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,decrementByAmount} = counterSlice.actions

export default counterSlice.reducer