import { configureStore } from '@reduxjs/toolkit';
import profileSlice from '../slices/profileSlice';
import reposSlice from '../slices/reposSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    repos: reposSlice,
  },
});

export default store;
