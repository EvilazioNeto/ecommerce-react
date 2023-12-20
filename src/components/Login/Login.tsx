import styles from "./Login.module.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className={styles.containerLogin}>
            <div className={styles.divLogo}>
                <img src={logo} alt="Logo do ecommerce" />
            </div>
            <form className={styles.divLogin}>
                <div>
                    <p>Login</p>
                    <input type="text" placeholder="E-mail ou usuário" />
                    <p>Senha</p>
                    <input type="password" placeholder="password" />
                    <div className={styles.userOptions}>
                        <label htmlFor=""><input type="checkbox" name="" id="" /> lembrar-me</label>
                        <Link to="esqueceuasenha">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <button type="button">Sign in<i className="fa-solid fa-right-to-bracket"></i></button>
                    <button type="button">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Login;