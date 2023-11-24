import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

function Layout({ children }: {children: ReactNode}){
    return(
        <>
            <Header />
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default Layout;