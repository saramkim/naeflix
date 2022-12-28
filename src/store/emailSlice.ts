import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const email = createSlice({
  name: 'email',
  initialState: '',
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setEmail } = email.actions;
