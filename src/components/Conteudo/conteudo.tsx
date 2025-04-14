export default function Conteudo (props: any) {
    return (
        <>
            <div className={`
                flex items-center justify-center flex-1
                text-yellow-200 font-bold bg-zinc-600
            `}>
                {props.Hello}
            </div>
        </>
    )
}