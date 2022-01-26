import { createSlice } from '@reduxjs/toolkit';
import { getReposAction } from '../../actions/actions';

const reposSlice = createSlice({
  name: 'repos',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getReposAction.fulfilled, (state, action) => {
      state.loading = false;
      state.reposList = action?.payload;
      state.error = undefined;
    });
    builder.addCase(getReposAction.rejected, (state, action) => {
      state.loading = false;
      state.reposList = undefined;
      state.error = action?.payload;
    });
    // profile
  },
});

export default reposSlice.reducer;
