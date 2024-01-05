import { useRouteError } from "react-router-dom";
export function ErorrPage (){
    const Verificador = useRouteError()
    console.log(Verificador)
    return(
        <div className="space-y-8">
          <h1 className="font-extrabold text-center text-blue-900 text-6xl">CRM-clientes</h1>
          <p className="text-center">Hay un error en:</p>
          <p>{Verificador.message}</p>
        </div>
    )
}