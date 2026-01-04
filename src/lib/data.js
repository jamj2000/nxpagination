'use server'
import prisma from '@/lib/prisma'




export async function obtenerArticulo(id) {
    try {
        const articulo = await prisma.articulo.findUnique({ where: { id: +id } })

        return articulo
    } catch (error) {
        console.log(error)
        return null;
    }
}




export async function obtenerArticulosLote(offset, limit = 5) {
    try {
        const articulos = await prisma.articulo.findMany({
            skip: offset,
            take: limit,
            orderBy: { id: "asc" },
        })
        // console.log(`articulos`, articulos);

        return articulos
    } catch (error) {
        console.log(error)
        return null;
    }
}




export async function obtenerArticulosCount() {
    try {
        const count = await prisma.articulo.count()
        return count
    } catch (error) {
        console.error(error);
        return null;
    }
}
