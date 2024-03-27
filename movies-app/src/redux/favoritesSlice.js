import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: { //фильтр, который знает состояние(state) store и какое событие(action) произошло, потом обновляет состояние 
    addToFavorites(state, action) {
      state.push(action.payload);
    },
    removeFromFavorites(state, action) {
      return state.filter(movie => movie.imdbID !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;