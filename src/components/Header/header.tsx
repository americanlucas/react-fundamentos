export default function Header(props: any) {
    return (
        <>
            <header className={`
                text-blue-400 font-bold bg-zinc-500
                flex justify-center 
                p-6 rounded-xl
            `}>
                {props.Hello}
            </header>
        </>
    )
}