import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SkillGapResult } from '@/types';
import { mockSkillGapResult } from '@/services/mockData';

interface AnalysisState {
  currentAnalysis: SkillGapResult | null;
  isAnalyzing: boolean;
  analysisProgressStep: number; // 0 to 5
  history: SkillGapResult[];
  error: string | null;
}

const initialState: AnalysisState = {
  currentAnalysis: mockSkillGapResult,
  isAnalyzing: false,
  analysisProgressStep: 0,
  history: [mockSkillGapResult],
  error: null,
};

export const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    startAnalysis: (state) => {
      state.isAnalyzing = true;
      state.analysisProgressStep = 1;
      state.error = null;
    },
    setAnalysisStep: (state, action: PayloadAction<number>) => {
      state.analysisProgressStep = action.payload;
    },
    finishAnalysis: (state, action: PayloadAction<SkillGapResult>) => {
      state.isAnalyzing = false;
      state.analysisProgressStep = 5;
      state.currentAnalysis = action.payload;
      state.history.unshift(action.payload);
    },
    failAnalysis: (state, action: PayloadAction<string>) => {
      state.isAnalyzing = false;
      state.analysisProgressStep = 0;
      state.error = action.payload;
    }
  },
});

export const { startAnalysis, setAnalysisStep, finishAnalysis, failAnalysis } = analysisSlice.actions;
export default analysisSlice.reducer;
