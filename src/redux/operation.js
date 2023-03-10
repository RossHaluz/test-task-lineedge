import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = 'f2c94d1b';
axios.defaults.baseURL = "http://www.omdbapi.com/";


export const getMovieBySearch = createAsyncThunk('movie/fetchMovies', async (name="Batman", {rejectWithValue}) => {
    try {
        const { data } = await axios.get(`?apikey=${API_KEY}&s=${name}`);
        return data.Search;
    } catch (error) {
        return rejectWithValue(error.messege);
    }
})

export const getMovieDetails = createAsyncThunk('movie/getDetails', async (id = "tt0499549", { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`?i=${id}&apikey=${API_KEY}`);
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue(error.messege)
    }
})

