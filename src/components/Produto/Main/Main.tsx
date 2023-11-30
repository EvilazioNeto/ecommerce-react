import ProdutoProps from "../../../types/ProdutoProps";
import Comentarios from "../Comentarios/Comentarios";
import InfoProduto from "../InfoProduto/InfoProduto";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./Main.module.css";

function Main({ produto }: { produto: ProdutoProps }) {
    return (
        <main className={styles.mainProduto}>
            <article className={styles.containerProduto}>
                <section className={styles.imagens}>
                    <Thumbnail produto={produto} />
                </section>
                <section>
                    <InfoProduto produto={produto} />
                </section>
            </article>
            <article className={styles.containerComentarios}>
                <section>
                    <Comentarios categoria={produto.category}/>
                </section>
            </article>
        </main>
    )
}

export default Main;
