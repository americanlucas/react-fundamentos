import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Conteudo from "@/components/Conteudo/conteudo"
import AreaLateral from "@/components/Menu/areaLateral"
import { useState } from "react"

export default function CampoTexto() {
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)


    return (
        <>
            <title>Calculadora</title>
            <main className="flex flex-row h-screen bg-gradient-to-br from-slate-800 to-zinc-800">
                <div className="flex flex-col bg-black">
                    <AreaLateral/>
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header>
                        <div className="flex flex-col self-start">
                            <h1 className="font-bold">Calculadora</h1>
                            <h2 className="text-zinc-400">Capitulo Estado</h2>
                        </div>
                    </Header>
                    <Conteudo>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <input 
                                    className="input"
                                    type="number"
                                    onChange={(e:any) => setNumero1(+e.target.value)}
                                />
                                <input 
                                    className="input"
                                    type="number"
                                    onChange={(e:any) => setNumero2(+e.target.value)}
                                />
                            </div>
                            <button className="botao">Calcular</button>
                            <div className="flex flex-col">
                                <span>{numero1} + {numero2} = {numero1 + numero2}</span>
                                <span>{numero1} - {numero2} = {numero1 - numero2}</span>
                                <span>{numero1} * {numero2} = {numero1 * numero2}</span>
                                <span>{numero1} / {numero2} = {numero1 / numero2}</span>
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