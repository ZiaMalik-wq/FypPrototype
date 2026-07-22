import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, StudentProfile } from '@/types';
import { mockStudentUser, mockAdminUser } from '@/services/mockData';

interface AuthState {
  isAuthenticated: boolean;
  user: User | StudentProfile | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: true,
  user: mockStudentUser,
  token: 'mock-jwt-token-99882211',
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ user: User | StudentProfile; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    switchRole: (state, action: PayloadAction<'Student' | 'SystemAdmin'>) => {
      if (action.payload === 'SystemAdmin') {
        state.user = mockAdminUser;
      } else {
        state.user = mockStudentUser;
      }
    },
    updateUserProfile: (state, action: PayloadAction<Partial<StudentProfile>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, switchRole, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
