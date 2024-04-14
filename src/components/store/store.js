import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favorites'

const store = configureStore({
    reducer: {
      favorites: favoriteReducer ,
    },
  });
  
  export default store;