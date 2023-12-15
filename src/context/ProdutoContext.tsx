import { createContext, useContext, useState } from "react";
import ProdutoProps from "../types/ProdutoProps";

interface ProdutoContextType {
    produtos: ProdutoProps[]; 
    setProdutos: React.Dispatch<React.SetStateAction<any[]>>;
  }

const ProdutoContext = createContext<ProdutoContextType | undefined>(undefined);

const ProdutoProvider = ({ children }: any) => {
    const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

    return (
        <ProdutoContext.Provider value={{ produtos, setProdutos }}>
            {children}
        </ProdutoContext.Provider>
    );
}

const useProdutoContext = () =>{
    return useContext(ProdutoContext)
}

export {ProdutoProvider, useProdutoContext}