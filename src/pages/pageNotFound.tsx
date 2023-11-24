import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import styles from "../styles/PageNotFound.module.css"

function PageNotFound(){
    return(
        <>
            <main className={styles.main}>
                <div>
                    <img src={Logo} className={styles.logo} alt="Logo do Ecommerce"/>
                </div>
                <div>
                    <h2 className={styles.pnfTitle}>PÁGINA NÃO ENCONTRADA :(</h2>
                    <Link className={styles.voltar} to={"/"}>Voltar</Link>
                </div>
            </main>
        </>
    )
}

export default PageNotFound;
