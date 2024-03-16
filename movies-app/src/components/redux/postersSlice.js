import { createSlice } from '@reduxjs/toolkit';

const postersSlice = createSlice({
  name: 'posters',
  initialState: {
    postersList: [],
    loading: false,
    page: 1,
  },
  reducers: {
    setPostersList(state, action) { // обновить список постеров
      if (action.payload.length === 0 && action.isSearch) { // если результат поиска пустой и это новый поиск-заменяем список
        state.postersList = action.payload;
      } else if (action.isSearch) { // если это новый поиск и результаты не пустые- заменяем список
        state.postersList = action.payload;
        state.page = 1; // сбросить номер страницы
      } else { // если это show more, добавляем новые постеры к текущему списку
        state.postersList = state.postersList.concat(action.payload);
      }
    },
    setLoading(state, action) { // состояние загрузки 
      state.loading = action.payload;
    },
    setPage(state, action) { // текущая страница
      state.page = action.payload;
    },
    resetPostersList(state, action) { //обновить при нажати на home
      state.postersList = [];
    },
  },
});

export const { setPostersList, setLoading, setPage, resetPostersList } = postersSlice.actions;

export default postersSlice.reducer;
