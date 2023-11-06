import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (state.value.length === 0) {
        state.value.push(action.payload)
      } else if (state.value[0]._id !== action.payload._id) {
        state.value.push(action.payload)
      } else {
        return
      }
    },


    removeCart: (state, action) => {
      state.value.splice(action.payload, 1)
    },

    setCount: (state, action) => {
      const cartItem = state.value.findIndex(item => item._id === action.payload.id)
      state.value[cartItem].count = action.payload.count
    },

    clearCart: (state, action) => {
      state.value = action.payload
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        };
      },
    },
  }
})

export const { addCart } = cartSlice.actions;
export const { removeCart } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;
export const { setCount } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;