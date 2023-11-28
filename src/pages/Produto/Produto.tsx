import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProdutoProps from "../../types/ProdutoProps";
import Main from "../../components/Produto/Main/Main";
import Loading from "../../components/Loading/Loading";

function Produto() {
    const { produtoId } = useParams();
    const [produto, setProduto] = useState<ProdutoProps | null>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${produtoId}`)
            .then((res) => res.json())
            .then((data) => setProduto(data))
    }, [produtoId]);

    if (!produto) {
        return (<Loading />)
    }
    
    return (
        <>
            <Main produto={produto}/>
        </>
    )
}

export default Produto;
