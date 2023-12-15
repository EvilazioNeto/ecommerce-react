import Card from "../components/Card/Card";
import Filtros from "../components/Filtros/Filtros";
import styles from "../styles/Main.module.css";
import FiltroProdutos from "../components/FiltroProdutos/FiltroProdutos";
import { useProdutoContext } from "../context/ProdutoContext";

function ProdutosFiltrados() {
    const context = useProdutoContext();

    if (!context) {
        return null;
    }
    const  produtos  = context.produtos

    const marcas: string[] = []

    produtos.forEach((produto) => {
        if (!marcas.includes(produto.brand)) {
            marcas.push(produto.brand);
        }
    });

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <Filtros marcas={marcas} />
            </section>
            <section className={styles.section}>
                <div className={styles.container_produtos}>
                    <FiltroProdutos nome="PRODUTOS" />
                    <div className={styles.cards_produtos}>
                        {produtos.length > 0 ? (
                            <Card produtosDaCategoria={produtos} />
                        ): (
                            <h2>Nenhum Produto Encontrado :(</h2>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProdutosFiltrados;
