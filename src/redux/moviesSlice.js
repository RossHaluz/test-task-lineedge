import { createSlice } from "@reduxjs/toolkit";
import { getMovieBySearch, getMovieDetails } from "./operation";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        items: [],
        itemDetails: null,
        isLoading: false,
        error: null
    },
    extraReducers: {
        [getMovieBySearch.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getMovieDetails.fulfilled](state, action) {
            state.itemDetails = action.payload;
            state.isLoading = false;
            state.error = null;
        }
    }
})

export const moviesReducers = moviesSlice.reducer;