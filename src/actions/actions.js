import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReposAction = createAsyncThunk(
  'repos/list',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=30&sort=asc`
      );
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

export const getProfileUserAction = createAsyncThunk(
  'profile/list',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);
