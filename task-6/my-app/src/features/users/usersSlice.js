import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  per_page:  10,
  total:  0,
  total_pages:  0,
  data: [],
  isFetching: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    requestData: state => {
      state.isFetching = true;      
    },
    fillData: (state, action) => {
      Object.assign(state, {  ...action.payload, isFetching: false });
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  },
});

export const { requestData, fillData, remove } = usersSlice.actions;

export const selectUsers = state => {
  console.log(state.users)
  return state.users;
}

export default usersSlice.reducer;
