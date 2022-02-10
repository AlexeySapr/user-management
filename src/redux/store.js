import { configureStore } from '@reduxjs/toolkit';
// import { filter } from './phonebook/phonebook-reducer';
import { usersApi } from './usersAPI';

export const store = configureStore({
  reducer: {
    // filter,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
