import { useState, useEffect } from "react";
import ProdutoProps from "../../../types/ProdutoProps";
import styles from "./CardCarrinho.module.css"

function CardCarrinho() {
    const [itensCarrinho, setItensCarrinho] = useState<ProdutoProps[]>([])

    useEffect(() => {
        const itensCarrinhoString = localStorage.getItem('itens')
        const itensCarrinhoLocal = itensCarrinhoString ? JSON.parse(itensCarrinhoString) : []
        setItensCarrinho(itensCarrinhoLocal)
    }, [])

    function removerProduto(produto: ProdutoProps) {
        if (confirm(`Deseja remover o ${produto.title} do carrinho?`)) {
            const novosItensCarrinho = [...itensCarrinho]

            const indexProduto = novosItensCarrinho.indexOf(produto)
            if (indexProduto !== -1) {
                novosItensCarrinho.splice(indexProduto, 1);
            }
            setItensCarrinho(novosItensCarrinho)
            localStorage.setItem('itens', JSON.stringify(novosItensCarrinho))
        }
    }

    return ( 
        <>
            {itensCarrinho.length > 0 ? (
                itensCarrinho.map((produto: ProdutoProps) => (
                    <div className={styles.container_produto} key={produto.id}>
                        <div className={styles.divImagem}>
                            <img className={styles.imagemProduto} src={produto.thumbnail} alt="" />
                        </div>
                        <div className={styles.container_info}>
                            <h2>{produto.title}</h2>
                            <div className={styles.info_produto}>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                                <button onClick={() => removerProduto(produto)}>Remover</button>
                            </div>
                        </div>
                        <div className={styles.divValor}>
                            <h2>${produto.price}</h2>
                        </div>
                    </div>
                ))
            ) : (
                <h2>Nenhum produto encontrado</h2>
            )}
        </>
    )
}

export default CardCarrinho;