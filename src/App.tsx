import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import { fetchProdutos } from './features/produtosSlice'
import { adicionarAoCarrinho } from './features/carrinhoSlice'
import { favoritar } from './features/favoritosSlice'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const produtos = useSelector((state: RootState) => state.produtos.produtos)
  const carrinho = useSelector((state: RootState) => state.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos)

  useEffect(() => {
    dispatch(fetchProdutos())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(favoritar(produto))}
          adicionarAoCarrinho={(produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
        />
      </div>
    </>
  )
}

export default App
