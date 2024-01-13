import { createContext,useState } from "react";
import { obtenerDiferencia,calcularMarca,calcularPlan,formatearCantidades } from '../helper/helper'

const CotizadorContext = createContext();//declaracion simple del contexto

//el provider es de donde vienen los datos, su origen
const CotizadorProvider = ({children}) => {
    const [datos,setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })
    const [cargando,setCargando] = useState(false)
    const [error,setError] = useState(false)
    /**
     * todo lo que este a partir de la llave 
     * todo | son funciones "privadas"
     * todo | en cuanto las se las pases al value, 
     * todo | eso se podra usar en el componente que lo tenga importado
     * todo | 
    */
   const handleChangeDatos = (e) => {
         setDatos({
            ...datos,
            [e.target.name]:e.target.value

         })
        
   }
const [resultadoGlobal, setResultadoGlobal] = useState(0)

const cotizarSeguro = () => {
    let resultado = 2000
    let aux = resultado
    const diferecia = obtenerDiferencia(datos.year)
    resultado -=((diferecia*3)*resultado)/100
    const incremento = calcularMarca(datos.marca)
    resultado *=incremento 
    resultado = resultado+aux
    resultado *=calcularPlan(datos.plan)
    resultado = parseFloat(resultado).toFixed(2)
    resultado = formatearCantidades(resultado)
    
    setCargando(true)
    setTimeout(()=>{
        setCargando(false)
        setResultadoGlobal(resultado)
    },3000)
    
}
    
    return (
        <CotizadorContext.Provider
           value={{
                datos,
                handleChangeDatos,
                setError,
                error,
                cotizarSeguro,
                resultadoGlobal,
                cargando,
                setCargando,
               
           }}
           error
        >
            {children}
        </CotizadorContext.Provider>
    )
}
export {
    CotizadorProvider,
    CotizadorContext
}