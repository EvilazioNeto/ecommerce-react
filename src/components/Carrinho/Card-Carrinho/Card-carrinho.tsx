import { useState, useEffect } from "react";
import ProdutoProps from "../../../types/ProdutoProps";
import styles from "./CardCarrinho.module.css"
import FecharPedido from "../FecharPedido/FecharPedido";
import { Link } from "react-router-dom";

function CardCarrinho() {
    const [itensCarrinho, setItensCarrinho] = useState<ProdutoProps[]>([])
    const [valorTotal, setValorTotal] = useState<number>(0)

    useEffect(() => {
        const itensCarrinhoString = localStorage.getItem('itens')
        const itensCarrinhoLocal = itensCarrinhoString ? JSON.parse(itensCarrinhoString) : []
        setItensCarrinho(itensCarrinhoLocal)
    }, [])

    useEffect(() => {
        calcularValorTotal();
    }, [itensCarrinho]);

    function calcularValorTotal() {
        let subtotal: number = 0;
        itensCarrinho.forEach((item) => {
            subtotal += item.price * (item.quantity || 1); // Considera a quantidade, padrão para 1 se não estiver definida
        });
        setValorTotal(subtotal);
    }

    function setQuantidade(qtd: number, id: number) {
        const novosItensCarrinho = itensCarrinho.map((item) =>
            item.id === id ? { ...item, quantity: qtd } : item
        );

        setItensCarrinho(novosItensCarrinho);
        localStorage.setItem("itens", JSON.stringify(novosItensCarrinho));
        localStorage.setItem(`quantidade_${id}`, qtd.toString());
    }

    function removerProduto(produto: ProdutoProps) {
        if (confirm(`Deseja remover o ${produto.title} do carrinho?`)) {
            const novosItensCarrinho = [...itensCarrinho]

            const indexProduto = novosItensCarrinho.indexOf(produto)
            if (indexProduto !== -1) {
                novosItensCarrinho.splice(indexProduto, 1);
            }
            setItensCarrinho(novosItensCarrinho)
            localStorage.setItem('itens', JSON.stringify(novosItensCarrinho))
            localStorage.removeItem(`quantidade_${produto.id}`)
        }
    }

    return (
        <>
            <section className={styles.section1_carrinho}>
                {itensCarrinho.length > 0 ? (
                    itensCarrinho.map((produto: ProdutoProps) => (
                        <div className={styles.container_produto} key={produto.id}>
                            <div className={styles.divImagem}>
                                <Link to={`/produto/${produto.id}`}>
                                    <img className={styles.imagemProduto} src={produto.thumbnail} alt="" />
                                </Link>
                            </div>
                            <div className={styles.container_info}>
                                <h2>{produto.title}</h2>
                                <div className={styles.info_produto}>
                                    <select onChange={(e: any) => setQuantidade(e.target.value, produto.id)} value={localStorage.getItem(`quantidade_${produto.id}`) || "1"} name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
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
                    <h2 className={styles.productNotFound}>Nenhum produto encontrado :(</h2>
                )}
            </section>
            <section className={styles.section2_carrinho}>
                <FecharPedido valorTotal={valorTotal} />
            </section>
        </>
    )
}

export default CardCarrinho;