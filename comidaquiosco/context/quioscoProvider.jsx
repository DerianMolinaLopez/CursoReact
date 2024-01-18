"use client"
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const hola = "hola";

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };
  console.log(hola)
  useEffect(() => {
    obtenerCategorias();
  }, []);
  // console.log(categorias);
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        hola,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
export { QuioscoProvider, QuioscoContext };
