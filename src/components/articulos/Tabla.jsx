// 'use client'
import Articulo from "@/components/articulos/Fila"
// import { use } from "react"



export default async function TablaArticulos({ promesaArticulos }) {
    // const articulos = use(promesaArticulos)
    const articulos = await promesaArticulos

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-slate-800 dark:text-slate-200">
                <thead className="hidden bg-gray-900 text-white md:table-header-group">
                    <tr>
                        <th className="p-3 text-left w-1/3">Nombre</th>
                        <th className="p-3 text-left w-1/3">Descripción</th>
                        <th className="p-3 text-left w-4/6">Precio</th>
                        <th className="p-3 text-left w-2/6">{/* Acciones */}</th>
                    </tr>
                </thead>
                <tbody>
                    {articulos.map(articulo => <Articulo key={articulo.id} articulo={articulo} />)}
                </tbody>
            </table>
        </div>

    )
}

