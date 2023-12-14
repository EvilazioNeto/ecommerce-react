import styles from "./FecharPedido.module.css";

function FecharPedido({valorTotal}: {valorTotal: number}) {

  return (
    <>
      <div className={styles.comprar}>
        <h2 className={styles.subtotal}>Subtotal: ${valorTotal}</h2>
        <button>Fechar Pedido</button>
      </div>
    </>
  );
}

export default FecharPedido;
