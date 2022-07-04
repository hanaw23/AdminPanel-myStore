import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    carouselEdit: null,
    carouselDelete: null,
    carouselCreate: null,
    carouselGet: null,
  },
  reducers: {
    carouselEdit: (state, action) => {
      state.carouselEdit = action.payload;
    },

    carouselDelete: (state, action) => {
      state.carouselDelete = action.payload;
    },

    carouselCreate: (state, action) => {
      state.carouselCreate = action.payload;
    },

    carouselGet: (state, action) => {
      state.carouselGet = action.payload;
    },
  },
});

export const { carouselEdit, carouselDelete, carouselCreate, carouselGet } = carouselSlice.actions;
export const carouselReducer = carouselSlice.reducer;
