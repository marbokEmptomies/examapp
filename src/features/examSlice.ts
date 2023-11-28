// examSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchInitialData } from './examApi';

export interface ExamState {
  id: number;
  title: string;
  completed: boolean;
  score: number;
  maxScore: number;
  questions: string[];
  answers: string[];
}

interface ExamStateById {
  [id: number]: ExamState;
}

const initialState: ExamStateById = {};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExam: (state, action: PayloadAction<ExamState>) => {
      // Update or add the exam in the state by its id
      state[action.payload.id] = action.payload;
    },
    initializeExam: (state, action: PayloadAction<ExamState[]>) => {
      // Replace the entire state with an object where keys are exam ids
      return action.payload.reduce((acc, exam) => {
        acc[exam.id] = exam;
        return acc;
      }, {} as ExamStateById);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      // Merge the fetched data with the existing state
      return { ...state, ...action.payload };
    });
  },
});

export const { setExam, initializeExam } = examSlice.actions;
export default examSlice.reducer;
