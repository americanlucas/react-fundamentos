export default function Footer(props: any) {
    const estiloLink = "text-blue-500 text-decoration-line: none hover:text-blue-400 duration-300 ease-in-out"
    return(
        <>
            <footer className={`
                bg-zinc-800 items-center text-zinc-400
                flex justify-around 
                px-6 py-3 border-t-2 border-zinc-500
            `}>
                <h1>{props.saudacao}<a target="_blank" className={estiloLink} href="https://github.com/americanlucas">americanlucas</a></h1>
                <a target="_blank" className={estiloLink} href="https://www.linkedin.com/in/americanlucas/">{props.linkedin}</a>
            </footer>
        </>
    )
}