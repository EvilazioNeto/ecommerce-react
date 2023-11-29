import { useState, useEffect } from "react"
import ProdutoProps from "../types/ProdutoProps"

function Carrinho() {
    const [itensCarrinho, setItensCarrinho] = useState<ProdutoProps[]>([]) 
    
    useEffect(()=>{
        const itensCarrinhoString = localStorage.getItem('itens')
        const itensCarrinhoLocal = itensCarrinhoString ? JSON.parse(itensCarrinhoString) : []
        setItensCarrinho(itensCarrinhoLocal)
    }, [])



    function removerProduto(produto: ProdutoProps){
            if(confirm(`Deseja remover o ${produto.title} do carrinho?`)){
                const novosItensCarrinho = [...itensCarrinho]

                const indexProduto = novosItensCarrinho.indexOf(produto)
                if(indexProduto !== -1){
                    novosItensCarrinho.splice(indexProduto, 1);
                }
                setItensCarrinho(novosItensCarrinho)
                localStorage.setItem('itens', JSON.stringify(novosItensCarrinho))
            }
    }

    return (
        <>
            <h1>Carrinho</h1>
            {itensCarrinho.length > 0 ? (
                itensCarrinho.map((produto: ProdutoProps, i: number)=>(
                    <div key={i}>
                        <h3>{produto.title}</h3>
                        <img src={produto.thumbnail} alt="" />
                        <button onClick={()=> removerProduto(produto)}>Remover</button>
                    </div>
                ))
            ) : (
                <h2>Nenhum produto encontrado</h2>
            ) }            
        </>
    )
}

export default Carrinho;