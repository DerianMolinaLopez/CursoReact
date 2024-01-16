import { useState,createContext } from "react";

const ClimaContext = createContext();
import axios from 'axios'
const ClimaProvider = ({children}) => {

    const [busqueda,setBusqueda] = useState({
        cidad:'',
        pais:''
    })
    const consultarClima = async datos=>{
        console.log(datos)
        console.log(import.meta.env.VITE_API_LLAVE)
        try{
            const {ciudad,pais} = datos
            const appID = import.meta.env.VITE_API_LLAVE
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}, ${pais}&limit=1&appid=${appID}`
            const {data} = await axios(url)
            const {lat,lon} = data[0]
           //extraer el lat y lon
           
           console.log(lat)
           console.log(lon) 
           console.log(data)
            //console.log(data.lon)
           const urlLan = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appID}`
           console.log(urlLan)
             const {data:clima} = await axios(urlLan)
            console.log(urlclima)
        }catch(error){
            console.log(error)
        }
    }

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
            datosBusqueda,
            busqueda,
            setBusqueda,
            consultarClima
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