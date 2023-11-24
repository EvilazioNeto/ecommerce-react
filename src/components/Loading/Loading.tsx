import loading from "../../img/loading.gif"
import styles from "./Loading.module.css"

function Loading(){
    return(
        <div className={styles.containerLogo}>
            <img src={loading} alt="" />
        </div>
    )
}

export default Loading;
