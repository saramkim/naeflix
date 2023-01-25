import { configureStore } from '@reduxjs/toolkit';

import { email } from './emailSlice';
import { isMarked } from './isMarkedSlice';
import { star } from './starSlice';

export const store = configureStore({
  reducer: {
    email: email.reducer,
    isMarked: isMarked.reducer,
    star: star.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
