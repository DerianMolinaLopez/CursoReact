
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const   [categoriaActual, setCategoriaActual]  = useState({id: 1, icono: 'cafe', nombre: 'Café' });

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    //console.log(data)
    setCategorias(data);
  };
  console.log(categorias)
  const handleClickCategoria = id => {
    //console.log(id)
    const categoria = categorias.filter(cat=> cat.id === id)
    
    setCategoriaActual(categoria[0])
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);
 
  
  // console.log(categorias);
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        setCategoriaActual,
        handleClickCategoria
      
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
export { QuioscoProvider, QuioscoContext };
