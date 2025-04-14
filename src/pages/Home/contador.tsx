import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Conteudo from "@/components/Conteudo/conteudo"
import AreaLateral from "@/components/Menu/areaLateral"
import { useState } from "react"
import { Globe, Minus, Plus } from "lucide-react"

export default function Contador() {
    let [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1) 
    }
    function decrementar() {
        setNumero(numero - 1) 
    }

    return (
        <>
            <title>Meu Contador</title>
            <main className="flex flex-row h-screen bg-gradient-to-br from-slate-800 to-zinc-800">
                <div className="flex flex-col bg-black">
                    <AreaLateral/>
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header>
                        <div className="flex flex-col self-start">
                            <h1 className="font-bold">Contador</h1>
                            <h2 className="text-zinc-400">Capitulo Estado</h2>
                        </div>

                    </Header>
                    <Conteudo>
                        <div className="flex flex-col items-center">
                           <h1 className="text-6xl">Valor: {numero}</h1>
                            <div className="flex gap-5">
                                <button onClick={incrementar} className="botao">{<Plus/>}</button>
                                <button onClick={decrementar} className="botao">{<Minus/>}</button>
                            </div>
                        </div>
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