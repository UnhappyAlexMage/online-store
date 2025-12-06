import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice.js';

export const store = configureStore({
    reducer: {
        // !!! ВОТ ЗДЕСЬ ВЫ ДАЕТЕ ИМЯ В СОСТОЯНИИ !!!
    // Ключ 'categories' станет частью вашего глобального стейта: state.categories
        categories: categoriesReducer,
    // Если у вас будут другие слайсы, они добавятся сюда как другие ключи:
    // users: usersReducer,
    // products: productsReducer,
    },
});