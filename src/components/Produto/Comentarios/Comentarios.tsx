import { useEffect, useState } from "react";
import commentsEletronicos from "../../../data/comentariosEletronicos.json"
import commentsRoupas from "../../../data/comentariosRoupas.json"
import commentsRelogios from "../../../data/comentariosRelogios.json"
import commentsAcessorios from "../../../data/comentariosAcessorios.json"
import commentsVeiculos from "../../../data/comentariosVeiculos.json"
import commentsDecoracao from "../../../data/comentariosDecoracao.json"
import commentsCosmeticos from "../../../data/comentariosCosmeticos.json"
import styles from "./Comentarios.module.css"

function Comentarios({ categoria }: { categoria: string }) {
  const [comentarios, setComentarios] = useState<ComentariosProps[]>([]);

  useEffect(() => {
    if (categoria === "smartphones" || categoria === "laptops") {
      setComentarios(commentsEletronicos);
    }
    if (categoria === "tops" || categoria === "womens-dresses" || categoria === "mens-shirts") {
      setComentarios(commentsRoupas);
    }
    if (categoria === "mens-watches" || categoria === "womens-watches") {
      setComentarios(commentsRelogios);
    }
    if (categoria === "womens-bags" || categoria === "sunglasses" || categoria === "mens-shoes" || categoria === "womens-shoes" || categoria === "womens-jewellery") {
      setComentarios(commentsAcessorios);
    }
    if (categoria === "automotive" || categoria === "motorcycle") {
      setComentarios(commentsVeiculos);
    }
    if (categoria === "home-decoration" || categoria === "lighting" || categoria === "furniture") {
      setComentarios(commentsDecoracao);
    }
    if (categoria === "skincare" || categoria === "fragrances") {
      setComentarios(commentsCosmeticos);
    }
  }, [categoria]);

  return (
    <>
      <div className={styles.containerComentarios}>
        <h1 className={styles.tituloComentarios}>Avaliação de clientes:</h1>
        <div className={styles.yourComment}>
          <textarea placeholder="Faça seu comentário sobre o produto:"></textarea>
          <button>ENVIAR</button>
        </div>
      </div>
      <div className={styles.comentariosUsers}>
        {comentarios.map((comentario: ComentariosProps, i: number) => (
          <div key={i} className={styles.divComments}>
            <label><i className="fa-regular fa-user"></i> {comentario.usuario} - {comentario.avaliacao}<i className="fa-solid fa-star" style={{ color: '#eeff00' }}></i></label>
            <p>{comentario.descricao}</p>
            <div className={styles.thumbs_up_down}>
              <label>
                <i className="fa-regular fa-thumbs-up"></i>
                0
              </label> 
              <label>
                <i className="fa-regular fa-thumbs-down"></i>
                0
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Comentarios;
