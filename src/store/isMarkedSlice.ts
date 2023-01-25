import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const isMarked = createSlice({
  name: 'isMarked',
  initialState: false,
  reducers: {
    setMarked: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setMarked } = isMarked.actions;
