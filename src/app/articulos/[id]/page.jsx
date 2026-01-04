import { obtenerArticulo } from "@/lib/data"
import { Suspense } from "react"



export default async function page({ params }) {
    const { id } = await params

    return (
        <div>
            <h1 className="mb-8 border-b-2 border-blue-400 text-2xl text-slate-700 dark:text-slate-200 ">
                Articulo {id}
            </h1>


            <Suspense fallback="...">
                <Articulo id={id} />
            </Suspense>
        </div>
    )
}



async function Articulo({ id }) {
    const articulo = await obtenerArticulo(id)

    const { nombre, descripcion, precio } = articulo

    return (
        <div>
            <img src={articulo?.imagen || '/imagen.png'} className="w-80" />
            <p className="p-3 capitalize text-xl font-bold">  {nombre} </p>
            <p className="p-3 italic text-slate-600">{descripcion}</p>
            <p className="p-3 text-xl">{precio.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
            })}</p>

        </div>
    )
}
