
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [pedido, setPeiddo] = useState([])
  const [modal, setMoal] = useState(false)
  const [categoriaActual, setCategoriaActual] = useState({ id: 1, icono: 'cafe', nombre: 'Café' });
  const [producto, setProducto] = useState({})
  const [paso,setPaso]= useState(1)
  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    //console.log(data)
    setCategorias(data);
  };
  const handleChangePaso = (paso) => {
    console.log(paso)
    setPaso(paso)

  }
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {//!exclucion de informacion
    if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
      //actualizamos en caso de que ya este el prdido registrado

      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
      setPeiddo(pedidoActualizado)
      toast.success('Producto actualizado')
    } else {
      //caso contrario solo agregamos la cantidad
      setPeiddo([...pedido, producto])
      toast.success('Producto agregado al pedido')
    }

  }
  // console.log(categorias)
  const handleClickCategoria = id => {
    //console.log(id)
    const categoria = categorias.filter(cat => cat.id === id)

    setCategoriaActual(categoria[0])
  }
  const handleModal = () => {
    setMoal(!modal)
  }
  //para poder filtrar el producto desde el resumen es necesario de mi pedido, extraer el producto que necesito
  const handleSetProducto = (producto) => {
  
    setProducto(producto)
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);
  const handleEditarCantidades = id =>{
    const pedidoActualizar = pedido.filter(pedidos=>pedidos.id===id)
    setProducto(pedidoActualizar[0])
    setMoal(!modal)
  }
  const handleEliminarProducto = id =>{
    console.log(id)
    const productosFiltrados = pedido.filter(pedido=>pedido.id!==id)
    setPeiddo(productosFiltrados)
  }

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
        modal,
        pedido,
        paso,
        handleChangePaso,
        handleEditarCantidades,
        handleEliminarProducto
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
export { QuioscoProvider, QuioscoContext };
