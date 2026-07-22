import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LearningRecommendation } from '@/types';
import { mockRecommendations } from '@/services/mockData';

interface RecommendationState {
  items: LearningRecommendation[];
  filterPriority: 'All' | 'High' | 'Medium' | 'Low';
  loading: boolean;
}

const initialState: RecommendationState = {
  items: mockRecommendations,
  filterPriority: 'All',
  loading: false,
};

export const recommendationSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    toggleSaveRecommendation: (state, action: PayloadAction<string>) => {
      const rec = state.items.find(r => r.id === action.payload);
      if (rec) {
        rec.isSaved = !rec.isSaved;
      }
    },
    toggleCompleteRecommendation: (state, action: PayloadAction<string>) => {
      const rec = state.items.find(r => r.id === action.payload);
      if (rec) {
        rec.isCompleted = !rec.isCompleted;
      }
    },
    setFilterPriority: (state, action: PayloadAction<'All' | 'High' | 'Medium' | 'Low'>) => {
      state.filterPriority = action.payload;
    }
  },
});

export const { toggleSaveRecommendation, toggleCompleteRecommendation, setFilterPriority } = recommendationSlice.actions;
export default recommendationSlice.reducer;
