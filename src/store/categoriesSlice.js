import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    v1: [],
    error: null
};

const FETCH_CATEGORIES_SUCCESS = 'categories/name';
const FETCH_CATEGORIES_ERROR = 'categories/error';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        //Создание генератора действий
        //// Здесь только синхронные редьюсеры, типа clearCategories: (state) => { state.v1 = [] }
    },
    extraReducers: (builder) => {
        builder
        .addCase(FETCH_CATEGORIES_SUCCESS, (state, action) => {
            state.v1 = action.payload;
            state.error = null;
        })
        .addCase(FETCH_CATEGORIES_ERROR, (state, action) => {
            state.error = action.payload;
            state.v1 = [];
        })
    }
})

// export const { extraReducers } = categoriesSlice.actions; Экспортируем генераторы действий для использования в компонентах/thunk-ах
export default categoriesSlice.reducer;