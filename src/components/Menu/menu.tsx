import { BadgeCheck, Calculator, Code2, House, TextCursorInput } from "lucide-react";
import MenuItem from "./menuItem";
export default function Menu (props:any) {
    return (
        <>
            <div>
                <div className="flex flex-col pt-6 px-6.5 w-56 justify-start gap-3">
                    <p className="text-zinc-500 px-2">Fundamentos</p>
                    <span className="flex flex-col gap-2 mb-4">
                        <MenuItem icon={<House/>} texto="Pagina 1" url="/Home/main"/>
                        <MenuItem icon={<BadgeCheck/>} texto="Pagina 2" url="/Home/main"/>
                    </span>
                </div>
                <div className="flex flex-col px-6.5 w-56 justify-start gap-3">
                    <p className="text-zinc-500 px-2">Estado</p>
                    <span className="flex flex-col gap-2 mb-4">
                        <MenuItem icon={<Code2/>} texto="Contador" url="/Home/contador"/>
                        <MenuItem icon={<TextCursorInput/>} texto="Campo Texto" url="/Home/campoTexto"/>
                        <MenuItem icon={<Calculator/>} texto="Calculadora" url="/Home/calculadora"/>
                    </span>
                </div>
            </div>
        </>
    )
}