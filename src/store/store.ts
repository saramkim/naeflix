import { configureStore } from '@reduxjs/toolkit';

import { email } from './emailSlice';

export const store = configureStore({
  reducer: {
    email: email.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
