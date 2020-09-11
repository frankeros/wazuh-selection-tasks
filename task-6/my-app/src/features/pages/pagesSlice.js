import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    pagesViews: {},
  },
  reducers: {
    increment: (state, action) => {
      if(!Object.prototype.hasOwnProperty.call(state.pagesViews, action.payload)) {
        state.pagesViews[action.payload] = 0;
      }
      state.pagesViews[action.payload] += 1;
    },
  },
});

export const { increment } = pagesSlice.actions;

export const selectPageView = (state, pageId) => {
  return state.pages.pagesViews[pageId] || 0;
}

export default pagesSlice.reducer;
