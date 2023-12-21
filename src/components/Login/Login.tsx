import styles from "./Login.module.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [userName, setUserName] = useState('kminchelle')
    const [password, setPassword] = useState('0lelplR')

    function fazerLogin() {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: userName,
                password: password,
                // expiresInMins: 60, // opcional
            })
        })
            .then(res => res.json())
            .then((data) => {
                const token = data.token
                if(token){
                    localStorage.setItem("tokenUser", JSON.stringify(token))
                    location.assign('/')
                }else{
                    console.log("Token não encontrado")
                }
            })
            .catch(error => console.error("Erro na requisição:", error));
    }

    return (
        <div className={styles.containerLogin}>
            <div className={styles.divLogo}>
                <img src={logo} alt="Logo do ecommerce" />
            </div>
            <form className={styles.divLogin}>
                <div>
                    <p>Login</p>
                    <input onChange={(e: any) => setUserName(e.target.value)} type="text" placeholder="E-mail ou usuário" value={userName} />
                    <p>Senha</p>
                    <input onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder="password" value={password} />
                    <div className={styles.userOptions}>
                        <label htmlFor=""><input type="checkbox" name="" id="" /> lembrar-me</label>
                        <Link to="esqueceuasenha">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <button onClick={fazerLogin} type="button">Sign in<i className="fa-solid fa-right-to-bracket"></i></button>
                    <button type="button">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Login;