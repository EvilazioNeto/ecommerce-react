import ProdutoProps from "../../../types/ProdutoProps";
import InfoProduto from "../InfoProduto/InfoProduto";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from "./Main.module.css";

function Main({produto}: {produto: ProdutoProps}){
    return(
        <main className={styles.containerProduto}>
            <section className={styles.imagens}>
                <Thumbnail produto={produto}/>
            </section>
            <section>
                <InfoProduto produto={produto}/>
            </section>
        </main>
    )
}

export default Main;
