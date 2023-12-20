import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './styles/App.css'
import './styles/index.css'
import Layout from "./layout/Layout";
import CategoriaEletronicos from "./pages/eletronicos";
import { useEffect, useState } from "react";
import CategoriaRoupas from "./pages/roupas";
import CategoriaRelogios from "./pages/relogios";
import CategoriaAcessorios from "./pages/acessorios";
import CategoriaVeiculos from "./pages/veiculos";
import CategoriaDecoracao from "./pages/decoracao";
import CategoriaCosmeticos from "./pages/cosmeticos";
import PageNotFound from "./pages/pageNotFound";
import Produto from "./pages/Produto/Produto";
import ProdutoProps from "./types/ProdutoProps";
import Carrinho from "./pages/carrinho";
import ProdutosFiltrados from "./pages/produtosFiltrados";
import { ProdutoProvider } from "./context/ProdutoContext";
import Login from "./components/Login/Login";


function App() {

  const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/?limit=100')
      .then((res) => {
        return res.json()
      }).then((data) => {
        setProdutos(data.products)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <ProdutoProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/categorias/eletronicos" element={<CategoriaEletronicos produtos={produtos} />} />
              <Route path="/categorias/roupas" element={<CategoriaRoupas produtos={produtos} />} />
              <Route path="/categorias/relogios" element={<CategoriaRelogios produtos={produtos} />} />
              <Route path="/categorias/acessorios" element={<CategoriaAcessorios produtos={produtos} />} />
              <Route path="/categorias/veiculos" element={<CategoriaVeiculos produtos={produtos} />} />
              <Route path="/categorias/decoracao" element={<CategoriaDecoracao produtos={produtos} />} />
              <Route path="/categorias/cosmeticos" element={<CategoriaCosmeticos produtos={produtos} />} />
              <Route path="/categorias/produtos" element={<ProdutosFiltrados />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/produto/:produtoId" element={<Produto />} />
              <Route path="/" element={<CategoriaEletronicos produtos={produtos} />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </Router>
      </ProdutoProvider>
    </>
  )
}
export default App
