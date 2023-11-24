import { Link } from "react-router-dom";
import Logo from "../../img/logo.png"
import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <div className={styles.novidades}>
                <p>Novidade da semana:</p>
                <p>Eletrônicos com 5% de desconto!</p>
                <p>CUPOM: QWTGHA</p>
            </div>
            <div className={styles.headerContent}>

                <div className={styles.linksUteis}>
                    <Link to="/contatos"><i className="fa-regular fa-address-book"></i> CONTATO</Link>
                    <Link to="/endereco"><i className="fa-solid fa-location-dot"></i> ENDEREÇO</Link>
                </div>

                <div className={styles.divLogo}>
                    <Link to={"/"}>
                        <img className={styles.logo} src={Logo} alt="Logo" title="Logo" />
                    </Link>
                </div>
                <div className={styles.nav_mobile_menu}>
                    <div className={styles.userInfo}>
                    </div>
                    <div className={styles.dadosUser}>
                    </div>
                </div>

                <div className={styles.opcoesUsuario}>
                    <Link to="/usuario"><i className="fa-regular fa-user"></i></Link>
                    <Link to="/favoritos"><i className="fa-solid fa-heart favoritos"></i></Link>
                    <Link to="/carrinho"><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
