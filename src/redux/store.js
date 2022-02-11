import { configureStore } from '@reduxjs/toolkit';
import managementReducer from './usersManagement/management-reducer';
import { usersApi } from './usersAPI';

export const store = configureStore({
  reducer: {
    managementReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
