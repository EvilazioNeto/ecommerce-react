import Card from "../components/Card/Card";
import Filtros from "../components/Filtros/Filtros";
import CategoriaPageProps from "../types/CategoriaPagesProps";
import styles from "../styles/Main.module.css";
import FiltroProdutos from "../components/FiltroProdutos/FiltroProdutos";

function CategoriaAcessorios({ produtos }: CategoriaPageProps) {
    const tipoProdutos = ["womens-bags", "sunglasses", "mens-shoes", "womens-shoes", "womens-jewellery"]
    const produtosDaCategoria = produtos.filter((produto) => tipoProdutos.includes(produto.category))
    const marcas: string[] = []

    produtosDaCategoria.forEach((produto) => {
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
                    <FiltroProdutos nome="ACESSÓRIOS" />
                    <div className={styles.cards_produtos}>
                        <Card produtosDaCategoria={produtosDaCategoria} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CategoriaAcessorios;
