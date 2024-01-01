import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
import './index.css'
import NuevoCliente from './pages/NuevoCliente'
//*para usar las funciones y el objeto es necesario instalar
//*la libreria de routing que este disponible para react
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

  //*creamos el objeto de routing
  const router = createBrowserRouter( [{
    path:'/',
    element: <Layout/>,
    //para usar el children correctamente es necesario usar el outlet en el componente que esta siendo usado en element
    children:[{//este children es para que se pueda renderizar el header en todos los componentes
      path:'/clientes/nuevos',
      element: <NuevoCliente/>,
    }]
  }])
  //!tambien se puede hacer un archivo especificamente para las rutas

  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
