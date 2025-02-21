/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from './produtosSlice';

type CarrinhoState = Produto[];

const initialState: CarrinhoState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (!state.find((p) => p.id === action.payload.id)) {
        state.push(action.payload);
      } else {
        alert('Item já adicionado');
      }
    },
  },
});

export const { adicionarAoCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
