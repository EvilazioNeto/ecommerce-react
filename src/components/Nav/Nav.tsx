import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

function Nav() {
    return (
        <nav className={styles.navCategorias}>
                <ul className={styles.listaCategorias}>
                    <li>
                        <Link to="categorias/eletronicos">ELETRÔNICOS</Link>
                    </li>
                    <li>
                        <Link to="categorias/roupas">ROUPAS</Link>
                    </li>
                    <li>
                        <Link to="categorias/relogios">RELÓGIOS</Link>
                    </li>
                    <li>
                        <Link to="categorias/acessorios">ACESSÓRIOS</Link>
                    </li>
                    <li>
                        <Link to="categorias/veiculos">VEÍCULOS</Link>
                    </li>
                    <li>
                        <Link to="categorias/decoracao">DECORAÇÃO</Link>
                    </li>
                    <li>
                        <Link to="categorias/cosmeticos">COSMÉTICOS</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Nav;