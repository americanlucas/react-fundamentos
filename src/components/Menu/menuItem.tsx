import Link from "next/link";

export default function MenuItem (props: any) {
    return (
        <>
            <Link href={props.url}>{props.texto}</Link>
        </>
    )
}