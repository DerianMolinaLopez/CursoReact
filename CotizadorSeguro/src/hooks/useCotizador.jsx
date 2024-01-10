import { useContext } from "react";
import {CotizadorContext} from '../context/cotizadorProvider'
//!usamos un hook para odernar la importaciion y el uso del context


//SIMPLIFICO LA TAREA DE UNIR EL CONTEXT Y MI PROVIDER 
/**
 * 
 * PARA QUE EN UNA SOLA FUNCION, ME RETORNE 
 * EL CONTENIDO QUE ESTOY DESEANDO, EN ESTE CASO MANDO TODO EL CONTEXTO
 * PERO PODRIA TENER DIFERENTES CUSTOM HOOKS PARA RETORNAR ALGUNA TAREA ESPECIFICA,
 * PERO SERIA MAS TEDIOSO 
 * 
 */
const useCotizador = () => {
    return useContext(CotizadorContext)

}
export default useCotizador