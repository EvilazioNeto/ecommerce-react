import usuarioProps from "../../../types/usuarioProps";
import styles from "./Card-user.module.css"

function CardUser({ usuario }: { usuario: usuarioProps | null }) {
    function logout(){
        localStorage.removeItem("usuario")
        localStorage.removeItem("tokenUser")
        location.assign("/")
    }

    return (
        <>
            {usuario ? (
                <section className={styles.containerUsuario}>
                    <div className={styles.profileDetails}>
                        <img src={usuario.image} alt="" />
                        <h1>{usuario.firstName} {usuario.lastName}</h1>
                    </div>
                    <div className={styles.additionalInfo}>
                        <p><span>Nome do usuário:</span> {usuario.username}</p>
                        <p><span>E-mail:</span> {usuario.email}</p>
                        <p><span>Gênero:</span> {usuario.gender}</p>
                    </div>
                    <button onClick={logout} className={styles.logout}>Sair <i className="fa-solid fa-right-to-bracket"></i></button>
                </section>
            ) : ( 
                <div>
                    <h1>Usuário não encontrado :(</h1>
                </div>
            )}
        </>
    )
}

export default CardUser;
