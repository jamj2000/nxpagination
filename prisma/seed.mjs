// INSERCIÓN DE DATOS INICIALES
import { articulos } from './seed-articulos.js'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();




const load = async () => {
    try {
        await prisma.articulo.deleteMany({});
        console.log('Borrados los registros de la tabla articulos');

        // await prisma.$queryRaw`ALTER SEQUENCE articulos_id_seq RESTART WITH 1`;
        // console.log('reset articulo sequence to 1');

        await prisma.articulo.createMany({
            data: articulos,
        });
        console.log('Añadidos datos a tabla articulos');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();