import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
    },

    clearUser: (state, action) => {
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

export const { setUser } = userSlice.actions;
export const { clearUser } = userSlice.actions
export const selectUser = (state) => state.cart.value;
export default userSlice.reducer;
