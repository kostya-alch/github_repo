import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// получаю список репозиториев конкретного юзера
export const getReposAction = createAsyncThunk(
   'repos/list',
   async (user, { rejectWithValue, getState, dispatch }) => {
      try {
         const { data } = await axios.get(
            `https://api.github.com/users/${user}/repos?per_page=700&sort=asc`
         );
         return data;
      } catch (error) {
         if (!error.response) {
            throw error;
         }
         return rejectWithValue(error?.response.data);
      }
   }
);

// получаю профиль конкретного пользователя
export const getProfileUserAction = createAsyncThunk(
   'profile/list',
   async (user, { rejectWithValue, getState, dispatch }) => {
      try {
         const { data } = await axios.get(
            `https://api.github.com/users/${user}`
         );
         return data;
      } catch (error) {
         if (!error.response) {
            throw error;
         }
         return rejectWithValue(error?.response.data);
      }
   }
);
