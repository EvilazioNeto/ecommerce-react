import { useState } from "react";
import ProdutoProps from "../../../types/ProdutoProps";
import styles from "./InfoProduto.module.css"


function InfoProduto({ produto }: { produto: ProdutoProps }) {
    const [cep, setCep] = useState<number>()
    const [meuEndereco, setMeuEndereco] = useState<any>()

    async function buscarCEP() {
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                setMeuEndereco(data);
            }).catch((error)=>{
                console.log(error)
            })
    }

    return (
        <>
            <div className={styles.title}>
                <h1>{produto.title}</h1>
                <span>Marca: {produto.brand}</span> 
            </div>
            <div className={styles.rating}>
                <span>
                     {produto.rating}<i className="fa-solid fa-star" style={{color: '#eeff00'}}></i>
                </span>
            </div>
            <div className={styles.price}>
                <h2><span className={styles.desconto}>-{(produto.discountPercentage).toFixed(0)}%</span> ${(produto.price - (produto.price * (produto.discountPercentage/100))).toFixed(2)}</h2>
                <h4>De: <span className={styles.valorAnterior}>${produto.price}</span></h4>
                <h4>Em até 10x de ${produto.price / 10} sem juros</h4>
            </div>
            <div className={styles.description}>
                <p>{produto.description}</p>
            </div>
            <div className={styles.cep}>
                <div>
                    <input type="number" onChange={(e) => setCep(+e.target.value)} placeholder="Encontre sua cidade:" />
                    <button onClick={buscarCEP}>PROCURAR</button>
                </div>

                {meuEndereco && (
                    <div>
                        <p>Localidade: {meuEndereco.localidade}</p>
                        <p>UF: {meuEndereco.uf}</p>
                    </div> 
                )}
            </div>
            <div className={styles.btnComprar}>
                <button>COMPRAR</button>
            </div>
        </>
    )
}

export default InfoProduto;
