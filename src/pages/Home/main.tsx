import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Conteudo from "@/components/Conteudo/conteudo"
import AreaLateral from "@/components/Menu/areaLateral"

export default function Main() {
    return (
        <>
            <main className="flex flex-row h-screen bg-gradient-to-br from-slate-800 to-zinc-800">
                <div className="flex flex-col bg-black">
                    <AreaLateral/>
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header>
                        Olá do Header
                    </Header>
                    <Conteudo>
                        <h1>Olá do conteúdo</h1>
                    </Conteudo>
                    <Footer 
                        saudacao="Feito com amor por "
                        linkedin="Linkedin"
                    />
                </div>
            </main>
        </>
    )
}