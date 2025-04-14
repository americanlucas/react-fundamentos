export default function Menu (props:any) {
    return (
        <>
            <div className="flex flex-col p-4 w-56 justify-start items-center">
                {props.children}
            </div>
        </>
    )
}