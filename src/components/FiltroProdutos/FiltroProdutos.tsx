import { useState } from "react";
import styles from "./FiltroProdutos.module.css"
import { useNavigate } from 'react-router-dom';
import { useProdutoContext } from "../../context/ProdutoContext";

function FiltroProdutos({ nome }: any) {
    const [pesquisa, setPesquisa] = useState<string>('')
    const produtoContext = useProdutoContext();
    const navigate = useNavigate();



    function filtrarProduto(pesquisa: string) {
        if (pesquisa) {
            fetch(`https://dummyjson.com/products/search?q=${pesquisa}`)
                .then(res => res.json())
                .then((data) => {
                    produtoContext?.setProdutos(data.products)
                    navigate('/categorias/produtos');
                });
        }
    }


    return (
        <>
            <h1 className={styles.categoriaAtual}>{nome}</h1>
            <div className={styles.divFiltro}>
                <input type="text" onChange={(e: any) => setPesquisa(e.target.value)} />
                <input onClick={() => filtrarProduto(pesquisa)} type="button" value="PESQUISAR" />
            </div>
        </>
    )
}

export default FiltroProdutos;
