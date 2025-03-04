import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from './redux/info';
import letterCocktailsReducer from './redux/inputSlice';
import drinkReducer from "./redux/CoctailInfo";

const myStore = configureStore({
    reducer: {
        cocktails: cocktailReducer,
        letterCocktails: letterCocktailsReducer,
        drink: drinkReducer,
    },
});

export default myStore;