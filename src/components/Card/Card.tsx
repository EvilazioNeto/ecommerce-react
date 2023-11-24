import { Link } from "react-router-dom";
import styles from "./Card.module.css"
import ProdutoProps from "../../types/ProdutoProps";

interface CardProps {
    produtosDaCategoria: ProdutoProps[];
}

function Card({ produtosDaCategoria }: CardProps) {
    return (
        <>
            {produtosDaCategoria.map((produto) => (
                <div key={String(produto.id)} className={styles.cardProduto}>
                    <img src={produto.thumbnail} alt={produto.description}></img>
                    <i className="fa-solid fa-heart"></i>
                    <p>{produto.title}</p>
                    <p>{produto.brand}</p>
                    <p>${produto.price}</p>
                    <Link to={`/produto/${produto.id}`}>
                        <button>COMPRAR</button>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Card;
