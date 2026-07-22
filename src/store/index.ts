import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/authSlice';
import skillReducer from './slices/skillSlice';
import analysisReducer from './slices/analysisSlice';
import recommendationReducer from './slices/recommendationSlice';
import marketReducer from './slices/marketSlice';
import reportReducer from './slices/reportSlice';
import adminReducer from './slices/adminSlice';
import notificationReducer from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    skills: skillReducer,
    analysis: analysisReducer,
    recommendations: recommendationReducer,
    market: marketReducer,
    reports: reportReducer,
    admin: adminReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
