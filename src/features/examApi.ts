import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExamState } from './examSlice';

export const fetchInitialData = createAsyncThunk<{ [key: string]: ExamState }, void>(
  'exam/fetchInitialData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('../../data.json');
      const data = await response.json();
      console.log("DATA FROM FETCH:", data)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
