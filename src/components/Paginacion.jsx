import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"




export default async function Paginacion({ promesaCount, page, limit }) {
    const count = await promesaCount
    const numPages = Math.ceil(count / limit)

    return (
        <div className="flex justify-center gap-2">

            {page > 1
                ? (
                    <Link
                        href={`/articulos?page=${page - 1}&limit=${limit}`}
                        className="p-2 rounded-md hover:bg-black hover:text-white"
                    >
                        <ChevronLeft />
                    </Link>
                ) : (
                    <div className="p-2 rounded-md text-slate-300">
                        <ChevronLeft />
                    </div>
                )}


            {Array.from({ length: numPages }, (_, i) => i + 1).map((numPage) => (
                <Link prefetch
                    key={numPage}
                    href={`/articulos?page=${numPage}&limit=${limit}`}
                    className={`p-2 rounded-md hover:bg-black hover:text-white ${numPage == page ? "bg-black text-white" : ""}`}
                >
                    {numPage}
                </Link>
            ))}


            {page < numPages
                ? (
                    <Link
                        href={`/articulos?page=${page + 1}&limit=${limit}`}
                        className="p-2 rounded-md hover:bg-black hover:text-white"
                    >
                        <ChevronRight />
                    </Link>
                ) : (
                    <div className="p-2 rounded-md text-slate-300">
                        <ChevronRight />
                    </div>
                )}
        </div>
    )
}



