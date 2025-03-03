import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from './redux/info';
import letterCocktailsReducer from './redux/inputSlice';

const myStore = configureStore({
    reducer: {
        cocktails: cocktailReducer,
        letterCocktails: letterCocktailsReducer,
    },
});

export default myStore;