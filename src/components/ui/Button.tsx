import { PropsWithChildren } from "react"

type ButtonProps = {
    name? : string,
    className? : string,
    onClick? : (e : any) => void,
    children : React.ReactPortal | PropsWithChildren<any> | React.ReactNode,
    type? : string,
    disabled? : boolean,
}

export default function Button({ name , className, type, onClick = () => {console.log("Test Button")}, children } : ButtonProps) {

    switch (type) {
        case "primary" :
            className = `${className} bg-black text-white`
            break
        case  "secondary" :
            className = `${className} bg-white border-2 border-black text-black`
            break
        default :
            className += ""
            break
    }

    return (
        <button 
            name={name}
            className={`${className} flex justify-center items-center gap-2 px-4 py-2 rounded-full font-semibold` }
            onClick={onClick}>
            {children}
        </button>
    )
}
