import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from '@/types';
import { mockSkills } from '@/services/mockData';

interface SkillState {
  items: Skill[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string | null;
}

const initialState: SkillState = {
  items: mockSkills,
  loading: false,
  error: null,
  searchQuery: '',
  selectedCategory: null,
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<Omit<Skill, 'id' | 'lastUpdated'>>) => {
      const newSkill: Skill = {
        ...action.payload,
        id: `SK-${Date.now()}`,
        lastUpdated: new Date().toISOString().split('T')[0],
      };
      state.items.unshift(newSkill);
    },
    updateSkill: (state, action: PayloadAction<Skill>) => {
      const index = state.items.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteSkill: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(s => s.id !== action.payload);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    }
  },
});

export const { addSkill, updateSkill, deleteSkill, setSearchQuery, setSelectedCategory } = skillSlice.actions;
export default skillSlice.reducer;
