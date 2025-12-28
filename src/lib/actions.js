'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';



export async function crearArticulo(prevState, formData) {
  try {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = +formData.get('precio')    //convertimos a número
    const articulo = await prisma.articulo.create({
      data: { nombre, descripcion, precio },
    })

    // console.log(articulo);
    revalidatePath('/articulos')
    return { success: "Artículo creado.", articulo }
  } catch (error) {
    console.log(error)
    return { error: "Fallo al crear artículo." }
  }
}


export async function modificarArticulo(prevState, formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = +formData.get('precio')  //convertimos a número

  try {
    const articulo = await prisma.articulo.update({
      where: { id },
      data: { nombre, descripcion, precio },
    })

    revalidatePath('/productos')
    return { success: "Artículo modificado.", articulo }
  } catch (error) {
    console.log(error)
    return { error: "Fallo al modificar artículo." }
  }
}



export async function eliminarArticulo(prevState, formData) {
  try {
    const id = +formData.get('id') //convertimos a número

    const articulo = await prisma.articulo.delete({
      where: { id },
    })

    revalidatePath('/articulos')
    return { success: "Artículo eliminado.", articulo }
  } catch (error) {
    console.log(error)
    return { error: "Fallo al eliminar artículo." }
  }
}