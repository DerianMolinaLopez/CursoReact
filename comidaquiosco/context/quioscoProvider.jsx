
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [pedido, setPeiddo]= useState([])
 const [modal,setMoal] = useState(false)
  const   [categoriaActual, setCategoriaActual]  = useState({id: 1, icono: 'cafe', nombre: 'Café' });
  const [producto,setProducto] = useState({})
  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    //console.log(data)
    setCategorias(data);
  };
  const handleAgregarPedido = ({categoriaId,imagen,producto}) =>{//!exclucion de informacion
     setPeiddo([...pedido,producto])
  }
 // console.log(categorias)
  const handleClickCategoria = id => {
    //console.log(id)
    const categoria = categorias.filter(cat=> cat.id === id)
    
    setCategoriaActual(categoria[0])
  }
  const handleModal = () =>{
    setMoal(!modal)
  }
  const handleSetProducto = (producto) =>{
    console.log(producto)
    setProducto(producto)
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);
 
  
  // console.log(categorias);
  return (
    <QuioscoContext.Provider
      value={{
        handleAgregarPedido,
        categorias,
        categoriaActual,
        producto,
        setCategoriaActual,
        handleClickCategoria,
        handleSetProducto,
        handleModal,
        modal
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
export { QuioscoProvider, QuioscoContext };
