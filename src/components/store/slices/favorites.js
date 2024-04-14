import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  favorites: [],
};

// Define slice
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovieToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeMovieFromFavorites(state, action) {
      const index = state.favorites.findIndex(
        (movie) => movie.id === action.payload.id
      );

      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
});

// Export actions
export const { addMovieToFavorites, removeMovieFromFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
