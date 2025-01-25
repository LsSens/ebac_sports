import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './produtosSlice'

type FavoritosState = Produto[]

const initialState: FavoritosState = []

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = state.find((p) => p.id === action.payload.id)
      if (produto) {
        return state.filter((p) => p.id !== action.payload.id)
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
