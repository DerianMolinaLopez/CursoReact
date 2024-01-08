export const MARCAS = [
   {id:1, nombre:'America no'},
   {id:2, nombre:'Americano'},
   {id:3, nombre:'Americano'},
   {id:4, nombre:'Americano'},
   {id:5, nombre:'Americano'},
]
const YEAR_MAX = new Date().getFullYear()

export const YEARS = Array.from(new Array(20), (year,index) => YEAR_MAX - index)
export const PLANES =[
    {id:1, nombre:'Basico'},
    {id:2, nombre:'Completo'}
]