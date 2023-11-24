import styles from "./Filtros.module.css";

function Filtros({marcas}: any) {
    return (
        <div className={styles.filtros}>
            <h2>Filtrar por</h2>
            <p>PREÇO:</p>
            <label>De<input id="valorInicial" placeholder="R$0,00" type="number"/></label>
            <label>Até<input id="valorFinal" placeholder="R$0,00" type="number"/></label>
            <div className={styles.marcas}>
                <p>MARCA: </p>
                {marcas.map((marca: any, i: number)=>(
                    <label key={i}>{marca} <input type="checkbox"/></label>
                ))}
            </div>
            <div className={styles.rating}>
                <p>Avaliação:</p>
                <div className="5star"><i className="fa-solid fa-star" style={{color: '#eeff00'}}></i><i className="fa-solid fa-star" style={{color: '#eeff00'}}></i><i className="fa-solid fa-star" style={{color: '#eeff00'}}></i><i className="fa-solid fa-star" style={{color: '#eeff00'}}></i><i className="fa-solid fa-star" style={{color: '#eeff00'}}></i></div>
            </div>
            <button className={styles.btnFiltro} type="button">APLICAR</button>
        </div>
    )
}

export default Filtros;
