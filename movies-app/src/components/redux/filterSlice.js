import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    year: "",
    type: "",
    title: ""
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setYearFilter(state, action) {
        state.year = action.payload;
      },
      setTypeFilter(state, action) {
        state.type = action.payload;
      },
      setTitleFilter(state, action) {
        state.title = action.payload;
      },
      resetFilters(state) {
        state.year = "";
        state.type = "";
        state.title = "";
      },
  },
});

export const { setYearFilter, setTypeFilter, setTitleFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
