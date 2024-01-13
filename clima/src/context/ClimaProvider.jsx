import { useState,createContext } from "react";

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {
    const [busqueda,setBusqueda] = useState({
        cidad:'',
        pais:''
    })
    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    return(
        <ClimaContext.Provider
           value={{ //!ccuidao con la ortografia, si te equivocas escriviendo el valor, no te dice si esta mal, solo te da na advertencia
            ClimaProvider,
            datosBusqueda
           }}
        >
            {children}
        </ClimaContext.Provider>
    )
}
//en los context, el que se exporta es el provider, no el context
export { 
    ClimaProvider,
    ClimaContext};