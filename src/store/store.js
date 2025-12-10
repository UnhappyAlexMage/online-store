import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice.js';
import productsReducer from './productsSlice.js';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer
    },
});