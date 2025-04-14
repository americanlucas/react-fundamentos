import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Conteudo from "@/components/Conteudo/conteudo"
import Menu from "@/components/Menu/menu"
import MenuItem from "@/components/Menu/menuItem"
import "../../app/globals.css"

export default function Main() {
    return (
        <>
            <main className={`
                flex flex-col
                h-screen p-4 gap-5
            `}>   
                <Header Hello="Olá do header"/>
                <div className="flex flex-1 bg-zinc-800 rounded-xl overflow-hidden gap-5">
                    <Menu>
                        <MenuItem texto="Pagina 1" url="/Home/main"/>
                    </Menu>
                    <Conteudo Hello="Olá do conteúdo"/>
                </div>
                <Footer 
                    saudacao="Feito com amor por "
                    linkedin="Linkedin"
                />
            </main>
        </>
    )
}