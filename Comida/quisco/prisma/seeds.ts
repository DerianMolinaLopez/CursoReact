
import { PrismaClient } from '@prisma/client'
import { categorias } from '../src/data/categorias'
import { productos } from '../src/data/productos'
const prisma = new PrismaClient()
//!si cambias algo del primsa y aun hay un error aqui, es ncecesario hacer una migracion para que se refleje
const main = async () : Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error)
    }
}
main()