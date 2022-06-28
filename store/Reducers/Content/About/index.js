import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutEdit: null,
    aboutDelete: null,
    aboutCreate: null,
    aboutGet: null,
  },
  reducers: {
    aboutEdit: (state, action) => {
      state.aboutEdit = action.payload;
    },

    aboutDelete: (state, action) => {
      state.aboutDelete = action.payload;
    },

    aboutCreate: (state, action) => {
      state.aboutCreate = action.payload;
    },

    aboutGet: (state, action) => {
      state.aboutGet = action.payload;
    },
  },
});

export const { aboutEdit, aboutDelete, aboutCreate, aboutGet } = aboutSlice.actions;
export const aboutReducer = aboutSlice.reducer;
