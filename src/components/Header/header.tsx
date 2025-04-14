export default function Header(props: any) {
    return (
        <>
            <header className={`
                bg-zinc-500
                flex justify-start
                p-4
            `}>
                {props.children}
            </header>
        </>
    )
}