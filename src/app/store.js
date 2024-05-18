import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import HomeReducer from '../features/PAGES/HOME/HomeSlice';
import loginReducer from '../features/PAGES/LOGIN/LoginSlice';
import cartReducer from '../features/PAGES/CARTS/cartsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: HomeReducer,
    login: loginReducer,
    cart: cartReducer
  },
});