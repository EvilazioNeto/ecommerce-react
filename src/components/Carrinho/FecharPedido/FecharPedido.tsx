import styles from "./FecharPedido.module.css";

function FecharPedido() {

  return (
    <>
      <div className={styles.comprar}>
        <h2>Subtotal: </h2>
        <button>Fechar Pedido</button>
      </div>
    </>
  );
}

export default FecharPedido;
