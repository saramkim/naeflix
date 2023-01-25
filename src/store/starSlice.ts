import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const star = createSlice({
  name: 'star',
  initialState: 0,
  reducers: {
    setStar: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setStar } = star.actions;
