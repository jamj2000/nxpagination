import TablaArticulos from "@/components/articulos/Tabla";
import Paginacion from "@/components/Paginacion";
import { Suspense } from "react";
import { obtenerArticulosCount, obtenerArticulosLote } from "@/lib/data";
import Modal from "@/components/Modal";
import Form from "@/components/articulos/Formulario";
import { PlusIcon } from "lucide-react";
import { crearArticulo } from "@/lib/actions";


const LIMIT = 5


export default async function PagArticulos({ searchParams }) {
    let { page, limit } = await searchParams

    // Convertimos a número y ponemos valores por defecto
    page = (!page) ? 1 : +page
    limit = (!limit) ? LIMIT : +limit

    const offset = (page - 1) * limit

    const promesaArticulos = obtenerArticulosLote(offset, limit)
    const promesaCount = obtenerArticulosCount()

    return (
        <div>
            <div className='flex gap-4 items-center mb-8 border-b-2 border-blue-400'>
                <h1 className="text-2xl text-slate-700 dark:text-slate-200 ">Artículos</h1>

                <Modal openElement={<IconoCrear />}>
                    <Form action={crearArticulo} title={"Crear artículo"} />
                </Modal>

            </div>



            <Suspense fallback={<p>Cargando artículos...</p>}>
                <TablaArticulos promesaArticulos={promesaArticulos} />
            </Suspense>

            <Suspense fallback={<p>Cargando paginación...</p>}>
                <Paginacion promesaCount={promesaCount} page={page} limit={limit} />
            </Suspense>
        </div>
    );
}




function IconoCrear() {
    return (
        <div title="CREAR ARTÍCULO" className='p-2 rounded-full outline-none border border-green-500 text-green-700 bg-green-200 hover:bg-green-500 hover:text-white hover:cursor-pointer disabled:bg-zinc-400 disabled:text-zinc-100 disabled:cursor-default'>
            <PlusIcon className='size-4' />
        </div>
    )
}
