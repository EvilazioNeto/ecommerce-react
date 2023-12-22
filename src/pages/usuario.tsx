import { useEffect, useState } from "react";
import CardUser from "../components/Usuario/Card-user/Card-user";
import usuarioProps from "../types/usuarioProps";



function Usuario(){
    const [usuario, setUsuario] = useState<usuarioProps | null>(null)

    useEffect(()=>{
        let usuarioString: string | null = localStorage.getItem("usuario")
        let usuarioLocal: usuarioProps | null = usuarioString ? JSON.parse(usuarioString) : null
        setUsuario(usuarioLocal)
        
    }, [])

    return(
        <>
            <CardUser usuario={usuario}/>
        </>
    )
}

export default Usuario;