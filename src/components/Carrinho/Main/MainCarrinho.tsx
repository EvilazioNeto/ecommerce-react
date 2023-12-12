import CardCarrinho from "../Card-Carrinho/Card-carrinho";
import FecharPedido from "../FecharPedido/FecharPedido";
import styles from "./Main.module.css"

function MainCarrinho() {
    return (
        <main className={styles.mainCarrinho}>
            <section className={styles.section1_carrinho}>
                <CardCarrinho />
            </section>
            <section className={styles.section2_carrinho}>
                <FecharPedido />
            </section>
        </main>
    )
}

export default MainCarrinho;

