import { createSlice } from "@reduxjs/toolkit";

const productManagementSlice = createSlice({
  name: "product",
  initialState: {
    getProduct: null,
    addProduct: null,
    editProduct: null,
    deleteProduct: null,
  },
  reducers: {
    getProduct: (state, action) => {
      state.getProduct = action.payload;
    },

    addProduct: (state, action) => {
      state.addProduct = action.payload;
    },

    editProduct: (state, action) => {
      state.editProduct = action.payload;
    },

    deleteProduct: (state, action) => {
      state.deleteProduct = action.payload;
    },
  },
});

export const { getProduct, addProduct, editProduct, deleteProduct } = productManagementSlice.actions;
export const productReducer = productManagementSlice.reducer;
