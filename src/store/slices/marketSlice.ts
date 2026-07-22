import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketTrend } from '@/types';
import { mockMarketTrend } from '@/services/mockData';

interface MarketState {
  data: MarketTrend;
  selectedTimeframe: 'Quarterly' | 'Monthly' | 'Annual';
  selectedRegion: string;
}

const initialState: MarketState = {
  data: mockMarketTrend,
  selectedTimeframe: 'Quarterly',
  selectedRegion: 'All Regions',
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setTimeframe: (state, action: PayloadAction<'Quarterly' | 'Monthly' | 'Annual'>) => {
      state.selectedTimeframe = action.payload;
    },
    setRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
    }
  },
});

export const { setTimeframe, setRegion } = marketSlice.actions;
export default marketSlice.reducer;
