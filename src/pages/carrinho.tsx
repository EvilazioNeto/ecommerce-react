import ProdutoProps from "../types/ProdutoProps"

function Carrinho() {
    let itensCarrinhoString = localStorage.getItem('itens')
    let itensCarrinho = itensCarrinhoString ? JSON.parse(itensCarrinhoString) : []

    return (
        <>
            <h1>Carrinho</h1>
            {itensCarrinho.length > 0 ? (
                itensCarrinho.map((produto: ProdutoProps, i: number)=>(
                    <div key={i}>
                        <h3>{produto.title}</h3>
                        <img src={produto.thumbnail} alt="" />
                    </div>
                ))
            ) : (
                <h2>Nenhum produto encontrado</h2>
            ) }            
        </>
    )
}

export default Carrinho;