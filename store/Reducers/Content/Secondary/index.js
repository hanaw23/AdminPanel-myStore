import { createSlice } from "@reduxjs/toolkit";

const secondarySlice = createSlice({
  name: "secondary",
  initialState: {
    secondaryEdit: null,
    secondaryDelete: null,
    secondaryCreate: null,
    secondaryGet: null,
  },
  reducers: {
    secondaryEdit: (state, action) => {
      state.secondaryEdit = action.payload;
    },

    secondaryDelete: (state, action) => {
      state.secondaryDelete = action.payload;
    },

    secondaryCreate: (state, action) => {
      state.secondaryCreate = action.payload;
    },

    secondaryGet: (state, action) => {
      state.secondaryGet = action.payload;
    },
  },
});

export const { secondaryEdit, secondaryDelete, secondaryGet, secondaryCreate } = secondarySlice.actions;
export const secondaryReducer = secondarySlice.reducer;
