import Footer from "@/components/Footer/footer"
import Header from "@/components/Header/header"
import Conteudo from "@/components/Conteudo/conteudo"
import AreaLateral from "@/components/Menu/areaLateral"
import { useState } from "react"

export default function CampoTexto() {
    const [valor, setValor] = useState('')
    const [isClick, setIsClick] = useState(false)

    function atualizaInput (e:any) {
        setValor(e.target.value)
    }

    return (
        <>
            <title>Atualiza Campo Texto</title>
            <main className="flex flex-row h-screen bg-gradient-to-br from-slate-800 to-zinc-800">
                <div className="flex flex-col bg-black">
                    <AreaLateral/>
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header>
                        <div className="flex flex-col self-start">
                            <h1 className="font-bold">Campo Texto</h1>
                            <h2 className="text-zinc-400">Capitulo Estado</h2>
                        </div>
                    </Header>
                    <Conteudo>
                        <div className="flex flex-col gap-5">
                            <label className="flex items-center justify-center">Text Box</label>
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Escreva Seu Nome"
                                onChange={atualizaInput}
                            />
                            <button onClick={() => {
                                setIsClick(!isClick)
                            }} className="botao">Mostrar Input</button>
                            <div className="flex justify-center items-center">
                                {isClick === true ? <h2>{valor}</h2> : ''}
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