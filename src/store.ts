/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import produtosReducer from './features/produtosSlice';
import carrinhoReducer from './features/carrinhoSlice';
import favoritosReducer from './features/favoritosSlice';

export const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
