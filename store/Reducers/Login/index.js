import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
  },
  reducers: {
    login: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
