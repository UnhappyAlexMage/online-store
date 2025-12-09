import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    error: null
};

const FETCH_CATEGORIES_SUCCESS = 'categories/name';
const FETCH_CATEGORIES_ERROR = 'categories/error';

const categoriesSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        //Создание генератора действий
        //// Здесь только синхронные редьюсеры, типа clearCategories: (state) => { state.item = [] }
    },
    extraReducers: (builder) => {
        builder
        .addCase(FETCH_CATEGORIES_SUCCESS, (state, action) => {
            state.item = action.payload;
            state.error = null;
        })
        .addCase(FETCH_CATEGORIES_ERROR, (state, action) => {
            state.error = action.payload;
            state.item = [];
        })
    }
})

// export const { extraReducers } = categoriesSlice.actions; 
// Экспортируем генераторы действий для использования в компонентах/thunk-ах
export default categoriesSlice.reducer;