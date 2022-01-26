import { createSlice } from '@reduxjs/toolkit';
import { getProfileUserAction } from '../../actions/actions';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfileUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action?.payload;
      state.error = undefined;
    });
    builder.addCase(getProfileUserAction.rejected, (state, action) => {
      state.loading = false;
      state.profile = undefined;
      state.error = action?.payload;
    });
  },
});

export default profileSlice.reducer;
