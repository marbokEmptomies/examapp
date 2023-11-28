import { configureStore } from '@reduxjs/toolkit';
import examReducer from '../features/examSlice'
const store = configureStore({
  reducer: {
    exam: examReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;