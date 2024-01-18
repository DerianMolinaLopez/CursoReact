import React from 'react';
import Image from 'next/image';
import logo from '../assets/img/logo.svg';
import useQuiosco from '../hook/useQuiosco';


import { useContext } from 'react';
import { QuioscoContext } from '../context/quioscoProvider';


import Categoria from './Categoria';

//import useQuiosco from '../hook/useQuiosco';
const SideBar = () => {
 // const {categorias} = useContext(QuioscoContext);
  return (
    <div>
      <Image
        width={300}
        height={100}
        src={logo}
        alt='logo de la pagina'
      />

      <nav>{/* Contenido de la barra de navegación */}</nav>
    </div>
  );
};

export default SideBar;
