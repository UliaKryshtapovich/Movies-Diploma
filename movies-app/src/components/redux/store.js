import { configureStore } from '@reduxjs/toolkit';
import postersReducer from './postersSlice';

 
export default configureStore({
  reducer: {
    posters: postersReducer,// логикa управления состоянием для списка постеров
  },
});
// хранилище Redux