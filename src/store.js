

import productReducer from '../features/productSlice';
import userReducer from "../features/userSlice"
import truthValueReducer from "../features/truthValueSlice";
import authReducer from "../features/authslice";


import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './features/adminSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    auth: authReducer,
    product: productReducer,
    user:userReducer,
    truthValue:truthValueReducer

  },
});


