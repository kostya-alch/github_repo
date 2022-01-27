import { createSlice } from '@reduxjs/toolkit';
import { getProfileUserAction, getReposAction } from '../../actions/actions';

const reposSlices = createSlice({
  name: 'repos',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getReposAction.fulfilled, (state, action) => {
      state.reposList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getReposAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.reposList = undefined;
    });
    //Profile
    builder.addCase(getProfileUserAction.pending, (state, action) => {
      state.loading = true;
      state.profile = undefined;
    });
    builder.addCase(getProfileUserAction.fulfilled, (state, action) => {
      state.profile = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getProfileUserAction.rejected, (state, action) => {
      state.loading = false;
      state.profile = undefined;
      state.error = action.payload;
    });
  },
});

export default reposSlices.reducer;
