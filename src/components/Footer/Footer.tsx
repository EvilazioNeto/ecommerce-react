import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.rodapeNome}>
                    <h2>Lorem<span className={styles.span1}>Ipsum</span></h2>
                </div>
                <div className={styles.inicio}>
                    <h3>Inicio</h3>
                    <p><Link to="#">Home</Link></p>
                    <p><Link to="#">Help desk</Link></p>
                    <p><Link to="#">Suporte</Link></p>
                </div>
                <div className={styles.sobre}>
                    <h3>Sobre-nós</h3>
                    <p><Link to="#">Informações</Link></p>
                    <p><Link to="#">Contato</Link></p>
                    <p><Link to="#">Blog</Link></p>
                </div>
                <div className={styles.sobre}>
                    <h3>Suporte</h3>
                    <p><Link to="#">FAQ</Link></p>
                    <p><Link to="#">Telefones</Link></p>
                    <p><Link to="#">Chat</Link></p>
                </div>
                <div className={styles.socialmedia}>
                    <div>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-square-x-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                    <button>Contato</button>
                </div>

            </footer>
            <div className={styles.credito}>
                <p>Desenvolvido por <Link to="https://www.instagram.com/_evilazioneto/?hl=pt-br">Evilazio</Link></p>
            </div>
        </>
    )
}

export default Footer;