/* eslint linebreak-style: ["error", "windows"] */
import { configureStore } from '@reduxjs/toolkit';
import { vehiclesReducer } from './vehicles/vehicles';
import { reservationsReducer } from './users/users';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    reservations: reservationsReducer,
  },
});

export default store;
