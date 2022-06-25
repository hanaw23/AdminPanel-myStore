import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    carouselEdit: null,
    carouselDelete: null,
  },
  reducers: {
    carouselEdit: (state, action) => {
      state.carouselEdit = action.payload;
    },

    carouselDelete: (state, action) => {
      state.carouselDelete = action.payload;
    },
  },
});

export const { carouselEdit, carouselDelete } = carouselSlice.actions;
export const carouselReducer = carouselSlice.reducer;
