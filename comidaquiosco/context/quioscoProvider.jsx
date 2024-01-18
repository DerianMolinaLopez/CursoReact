import { createContext,useState,useEffect } from "react";
const contextQuiosco = createContext();
const QuioscoProvider = ({children})=>{
    return ( 
    <contextQuiosco.Provider 
    value={{}}>
        {children}
    </contextQuiosco.Provider>
    )
}
export {
    QuioscoProvider
}
export default contextQuiosco;