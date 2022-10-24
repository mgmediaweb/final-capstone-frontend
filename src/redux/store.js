/* eslint linebreak-style: ["error", "windows"] */
import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './vehicles/vehicles';

const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});

export default store;
