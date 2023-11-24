import { useState } from "react";
import ProdutoProps from "../../../types/ProdutoProps";
import styles from "./Thumbnail.module.css"

function Thumbnail({ produto }: { produto: ProdutoProps }) {
    const [thumbnail, setThumbnail] = useState<any>(produto.thumbnail)

    return (
        <>
            <div className={styles.conjuntoImagens}>
                {produto.images.map((imagem, i) => (
                    <img onClick={()=> setThumbnail(imagem)} key={i} src={imagem} alt={produto.description} />
                ))}
            </div>
            <div className={styles.containerThumbnail}>
                <img className={styles.thumbnail} src={thumbnail} alt="" />
            </div>
        </>
    )
}

export default Thumbnail;
