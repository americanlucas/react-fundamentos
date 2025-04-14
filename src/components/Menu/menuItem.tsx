import Link from "next/link";

export default function MenuItem (props: any) {
    return (
        <>
            <div className="flex gap-4 hover:bg-zinc-800 p-2 rounded-xl">
                {props.icon}
                <Link href={props.url}>{props.texto}</Link>
            </div>
        </>
    )
}