export default function Conteudo (props: any) {
    return (
        <>
            <div className={`
                flex items-center justify-center flex-1
                font-bold bg-zinc-800
            `}>
                {props.children}
            </div>
        </>
    )
}