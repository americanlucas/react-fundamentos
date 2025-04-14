import Link from "next/link";
import Menu from "./menu";
import { Amphora } from "lucide-react";

export default function AreaLateral () {
    return(
        <>
            <Link href="/" className="flex px-4 py-4 items-center gap-3">
                <Amphora className="p-1 w-12 h-10 text-zinc-200 rounded-xl hover:bg-zinc-600 cursor-pointer "/>
                <h1 className="text-4xl">Home</h1>
            </Link>
            <div className="flex justify-start">
                <Menu/>
            </div>
        </>
    )
}