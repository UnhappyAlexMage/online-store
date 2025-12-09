import { createSlice } from "@reduxjs/toolkit";

import { fetchProductsClothes, fetchProductsMiscellaneous } from "./fetchApiThunk.js";

const initialState = {
    itemClothes: [],
    itemMiscellaneous: [],
    visibleCount: 5,
    error: null
};

const productsSlice = createSlice({
    name: 'data1',
    initialState,
    reducers: {
        loadMoreProducts: (state) => {
            state.visibleCount += 5;
        },
        resetVisibleCount: (state) => {
            state.visibleCount -= 5;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsClothes.fulfilled, (state, action) => {
            state.itemClothes = action.payload;
            state.error = null;
        })
        .addCase(fetchProductsClothes.rejected, (state, action) => {
            state.itemClothes = [];
            state.error = action.payload;
        })
        .addCase(fetchProductsMiscellaneous.fulfilled, (state, action) => {
            state.itemMiscellaneous = action.payload;
            state.error = null;
        })
        .addCase(fetchProductsMiscellaneous.rejected, (state, action) => {
            state.itemMiscellaneous = [];
            state.error = action.payload;
        })
    }
});

export const { loadMoreProducts, resetVisibleCount } = productsSlice.actions;
export default productsSlice.reducer;