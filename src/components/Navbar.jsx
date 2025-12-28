import Link from "next/link"
import { HomeIcon } from "lucide-react"

function Navbar() {

    return (
        <nav className="w-full flex justify-between bg-white text-blue-900">
            <div className="flex gap-1">
                <Link href="/" className="no-underline text-inherit p-2 rounded-md hover:bg-black hover:text-white">
                    <HomeIcon />
                </Link>
                <Link href="/articulos" className="no-underline text-inherit p-2 rounded-md hover:bg-black hover:text-white">
                    Articulos
                </Link>
            </div>
            <div className="flex gap-5">
                <Link href="/acerca" className="self-start no-underline text-inherit p-2 rounded-md hover:bg-black hover:text-white">
                    Acerca de ...
                </Link>
            </div>
        </nav>
    )
}

export default Navbar