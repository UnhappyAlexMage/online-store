import { API_COTEGORIES, API_PRODUCTS } from "./config.js";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = () => async(dispatch) => {
    try {
        const response = await fetch(`${API_COTEGORIES}`);
        if(!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const categoriesJson = await response.json();
        dispatch({
            type: 'categories/name',
            payload: categoriesJson
        }) 
    } catch(error) {
        dispatch({
            type: 'categories/error',
            payload: error.message
        });
    }
};

export const fetchProductsClothes = createAsyncThunk('products/fetchProductsClothes', 
                                                    async(_, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_PRODUCTS}`); //?categorySlug=clothes
        if(!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const productsClothesJson = await response.json();
        return productsClothesJson;
    } catch(error) {
        return rejectWithValue(error.message);
    }
});

export const fetchProductsMiscellaneous = createAsyncThunk('products/fetchProductsMiscellaneous',
                                                            async(_, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_PRODUCTS}?categorySlug=miscellaneous`);
        if(!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const productsMiscellaneousJson = await response.json();
        return productsMiscellaneousJson;
    } catch(error) {
        return rejectWithValue(error.message);
    }
});
