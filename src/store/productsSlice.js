import { createSlice } from "@reduxjs/toolkit";

import { fetchProductsClothes, fetchProductsMiscellaneous } from "./fetchApiThunk.js";

const initialState = {
    ProductsAll: [],
    ProductsClothes: [],
    ProductsMiscellaneous: [],
    selectedProduct: null,
    error: null
};

const FETCH_PRODUCTS_SUCCESS = 'allProducts';
const FETCH_PRODUCTS_ERROR = 'allProducts/error';

const productsSlice = createSlice({
    name: 'data1',
    initialState,
    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(FETCH_PRODUCTS_SUCCESS, (state, action) => {
            state.ProductsAll = action.payload;
            state.error = null;
        })
        .addCase(FETCH_PRODUCTS_ERROR, (state, action) => {
            state.ProductsAll = [];
            state.error = action.payload;
        })
        .addCase(fetchProductsClothes.fulfilled, (state, action) => {
            state.ProductsClothes = action.payload;
            state.error = null;
        })
        .addCase(fetchProductsClothes.rejected, (state, action) => {
            state.ProductsClothes = [];
            state.error = action.payload;
        })
        .addCase(fetchProductsMiscellaneous.fulfilled, (state, action) => {
            state.ProductsMiscellaneous = action.payload;
            state.error = null;
        })
        .addCase(fetchProductsMiscellaneous.rejected, (state, action) => {
            state.ProductsMiscellaneous = [];
            state.error = action.payload;
        })
    }
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;