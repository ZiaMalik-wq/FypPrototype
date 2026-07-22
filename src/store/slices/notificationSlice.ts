import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationItem } from '@/types';
import { mockNotifications } from '@/services/mockData';

interface NotificationState {
  items: NotificationItem[];
}

const initialState: NotificationState = {
  items: mockNotifications,
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action: PayloadAction<string>) => {
      const item = state.items.find(n => n.id === action.payload);
      if (item) {
        item.isRead = true;
      }
    },
    markAllAsRead: (state) => {
      state.items.forEach(n => { n.isRead = true; });
    },
    addNotification: (state, action: PayloadAction<NotificationItem>) => {
      state.items.unshift(action.payload);
    }
  },
});

export const { markAsRead, markAllAsRead, addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
