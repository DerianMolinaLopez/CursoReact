import { useContext } from 'react';
import { QuioscoContext } from '../context/quioscoProvider'; // Asegúrate de que la ruta al archivo QuioscoProvider es correcta

const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;