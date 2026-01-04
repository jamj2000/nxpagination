import { eliminarArticulo, modificarArticulo } from "@/lib/actions"
import Form from "@/components/articulos/Formulario"
import Modal from "@/components/Modal"
import { PencilIcon, TrashIcon } from "lucide-react"
import Link from "next/link"

export default function FilaArticulo({ articulo }) {

    const { id, nombre, descripcion, precio } = articulo

    return (

        <tr className="mb-5 flex flex-col items-center justify-center p-2 odd:bg-white even:bg-gray-50 md:table-row dark:odd:bg-gray-900/50 dark:even:bg-gray-950"  >
            <td className="p-3 capitalize">
                <Link href={`/articulos/${id}`}>{nombre}</Link>
            </td>
            <td className="p-3">{descripcion}</td>
            <td className="p-3">{precio.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
            })}</td>

            {/* Acciones */}
            <td className="p-3 flex gap-2 justify-end">
                <Modal openElement={<IconoModificar />}>
                    <Form action={modificarArticulo} title={"Actualizar artículo"} articulo={articulo} />
                </Modal>
                <Modal openElement={<IconoEliminar />}>
                    <Form action={eliminarArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
                </Modal>
            </td>
        </tr>


    )
}






function IconoModificar() {
    return (
        <div title="MODIFICAR" className='p-2 rounded-full outline-none border border-amber-500 text-amber-700 bg-amber-200 hover:bg-amber-500 hover:text-white hover:cursor-pointer disabled:bg-zinc-400 disabled:text-zinc-100 disabled:cursor-default'>
            <PencilIcon className='size-4' />
        </div>
    )
}


function IconoEliminar() {
    return (
        <div title="ELIMINAR" className='p-2 rounded-full outline-none border border-red-500 text-red-700 bg-red-200 hover:bg-red-500 hover:text-white hover:cursor-pointer disabled:bg-zinc-400 disabled:text-zinc-100 disabled:cursor-default'>
            <TrashIcon className='size-4' />
        </div>
    )
}