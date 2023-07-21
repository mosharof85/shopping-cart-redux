import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = false;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.status = true;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = false;
      state.error = true;
    });
  },
});

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  return await data.json();
});

export default productSlice.reducer;
