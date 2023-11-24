import styles from "./FiltroProdutos.module.css"

function FiltroProdutos({nome}: {nome: string}) {
    return (
        <>
            <h1 className={styles.categoriaAtual}>{nome}</h1>
            <div className={styles.divFiltro}>
                <input type="text" />
                <input type="button" value="PESQUISAR" />
            </div>
        </>
    )
}

export default FiltroProdutos;
