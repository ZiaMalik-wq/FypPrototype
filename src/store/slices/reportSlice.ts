import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReportItem } from '@/types';
import { mockReports } from '@/services/mockData';

interface ReportState {
  items: ReportItem[];
  searchQuery: string;
}

const initialState: ReportState = {
  items: mockReports,
  searchQuery: '',
};

export const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    addReport: (state, action: PayloadAction<ReportItem>) => {
      state.items.unshift(action.payload);
    },
    deleteReport: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(r => r.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { addReport, deleteReport, setSearchQuery } = reportSlice.actions;
export default reportSlice.reducer;
