import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JobSource, SystemServiceHealth, AuditLog, AdminAnalytics, User } from '@/types';
import { mockJobSources, mockSystemHealth, mockAuditLogs, mockAdminAnalytics, mockStudentUser, mockAdminUser } from '@/services/mockData';

interface AdminState {
  users: User[];
  jobSources: JobSource[];
  systemHealth: SystemServiceHealth[];
  auditLogs: AuditLog[];
  analytics: AdminAnalytics;
  userSearchQuery: string;
  selectedRoleFilter: string;
}

const mockUserList: User[] = [
  mockStudentUser,
  mockAdminUser,
  { id: 'USR-1002', fullName: 'Sara Ahmed', email: 'sara.ahmed@nust.edu.pk', role: 'Student', university: 'NUST Islamabad', degree: 'BS Software Engineering', graduationYear: 2026, createdAt: '2025-09-12' },
  { id: 'USR-1003', fullName: 'Prof. Usman Raza', email: 'usman.counselor@comsats.edu.pk', role: 'CareerCounselor', university: 'COMSATS Islamabad', degree: 'MS Computer Science', graduationYear: 2018, createdAt: '2025-01-20' },
  { id: 'USR-1004', fullName: 'Hassan Ali', email: 'hassan.ali@fast.edu.pk', role: 'Student', university: 'FAST NUCES Lahore', degree: 'BS Computer Science', graduationYear: 2027, createdAt: '2026-02-14' },
  { id: 'USR-1005', fullName: 'Dr. Ayesha Malik', email: 'ayesha.admin@pu.edu.pk', role: 'UniversityAdmin', university: 'Punjab University', degree: 'Ph.D. IT', graduationYear: 2010, createdAt: '2024-11-05' }
];

const initialState: AdminState = {
  users: mockUserList,
  jobSources: mockJobSources,
  systemHealth: mockSystemHealth,
  auditLogs: mockAuditLogs,
  analytics: mockAdminAnalytics,
  userSearchQuery: '',
  selectedRoleFilter: 'All Roles',
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    toggleJobSource: (state, action: PayloadAction<string>) => {
      const src = state.jobSources.find(s => s.id === action.payload);
      if (src) {
        src.isAutoScrapeEnabled = !src.isAutoScrapeEnabled;
        src.status = src.isAutoScrapeEnabled ? 'Healthy' : 'Offline';
      }
    },
    updateUserRole: (state, action: PayloadAction<{ userId: string; role: any }>) => {
      const user = state.users.find(u => u.id === action.payload.userId);
      if (user) {
        user.role = action.payload.role;
      }
    },
    toggleUserSuspension: (state, action: PayloadAction<string>) => {
      const user = state.users.find(u => u.id === action.payload);
      if (user) {
        user.isSuspended = !user.isSuspended;
      }
    },
    setUserSearchQuery: (state, action: PayloadAction<string>) => {
      state.userSearchQuery = action.payload;
    },
    setSelectedRoleFilter: (state, action: PayloadAction<string>) => {
      state.selectedRoleFilter = action.payload;
    }
  },
});

export const { toggleJobSource, updateUserRole, toggleUserSuspension, setUserSearchQuery, setSelectedRoleFilter } = adminSlice.actions;
export default adminSlice.reducer;
