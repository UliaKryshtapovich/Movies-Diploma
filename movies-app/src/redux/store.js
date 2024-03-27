import { configureStore } from '@reduxjs/toolkit';
import postersReducer from './postersSlice';
import filterReducer from './filterSlice';
import favoritesReducer from './favoritesSlice';

 
export default configureStore({// управлениe состояния 
  reducer: {
    posters: postersReducer,// для списка постеров
    filter: filterReducer,// поиск при фильтре 
    favorites: favoritesReducer// добавление и удаление в фаворит
  },
});
//хранилище 