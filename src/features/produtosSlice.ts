import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type ProdutosState = {
  produtos: Produto[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ProdutosState = {
  produtos: [],
  status: 'idle'
}

export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/ebac_sports'
    )
    return (await response.json()) as Produto[]
  }
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.produtos = action.payload
      })
      .addCase(fetchProdutos.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default produtosSlice.reducer
