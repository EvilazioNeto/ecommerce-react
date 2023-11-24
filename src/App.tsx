import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './styles/App.css'
import './styles/index.css'
import Contatos from "./pages/contatos";
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


function App() {

  const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/?limit=100')
      .then((res) => {
        return res.json()
      }).then((data) => {
        setProdutos(data.products)
      })
  }, [])
             
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/categorias/eletronicos" element={<CategoriaEletronicos produtos={produtos} />} />
            <Route path="/categorias/roupas" element={<CategoriaRoupas produtos={produtos} />} />
            <Route path="/categorias/relogios" element={<CategoriaRelogios produtos={produtos} />} />
            <Route path="/categorias/acessorios" element={<CategoriaAcessorios produtos={produtos} />} />
            <Route path="/categorias/veiculos" element={<CategoriaVeiculos produtos={produtos} />} />
            <Route path="/categorias/decoracao" element={<CategoriaDecoracao produtos={produtos} />} />
            <Route path="/categorias/cosmeticos" element={<CategoriaCosmeticos produtos={produtos} />} />
            <Route path="/produto/:produtoId" element={<Produto />}/>
            <Route path="/" element={<CategoriaEletronicos produtos={produtos} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>  
        </Layout>
      </Router>
    </>
  )
}
export default App
