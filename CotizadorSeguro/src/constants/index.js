export const MARCAS = [
   {id:1, nombre:'americano'},
   {id:2, nombre:'europeo'},
   {id:3, nombre:'asiatico'},

]
const YEAR_MAX = new Date().getFullYear()

export const YEARS = Array.from(new Array(20), (year,index) => YEAR_MAX - index)
export const PLANES =[
    {id:1, nombre:'Basico'},
    {id:2, nombre:'Completo'}
]