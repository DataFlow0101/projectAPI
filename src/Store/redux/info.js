import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m';

export const fetchCocktails = createAsyncThunk('cocktails/fetch', async (_, thunkAPI) => {
    try {
        const res = await axios.get(API);
        console.log("Полученные данные:", res.data.drinks); 
        return res.data.drinks || []; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                console.log("Данные сохранены в store:", action.payload); 
                state.loading = false;
                state.data = action.payload; 
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default cocktailSlice.reducer;
