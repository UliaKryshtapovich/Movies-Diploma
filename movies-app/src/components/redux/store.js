import { configureStore } from '@reduxjs/toolkit';
import postersReducer from './postersSlice';
import filterReducer from './filterSlice';


 
export default configureStore({
  reducer: {
    posters: postersReducer,//управлениe состояния  для списка постеров
    filter: filterReducer// состояния  для поиска при фильтре 
  },
});