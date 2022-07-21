import { createSlice } from '@reduxjs/toolkit';

const userManagementSlice = createSlice({
  name: 'product',
  initialState: {
    getUser: null,
    editUser: null,
    deleteUser: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.getUser = action.payload;
    },

    editUser: (state, action) => {
      state.editUser = action.payload;
    },

    deleteUser: (state, action) => {
      state.deleteUser = action.payload;
    },
  },
});

export const { getUser, editUser, deleteUser } = userManagementSlice.actions;
export const userReducer = userManagementSlice.reducer;
