import React from 'react'
import Image from 'next/image'
import logo from '../assets/img/logo.svg'
const SideBar = () => {
  return (
    <div>
        <Image 
          width={300}
          height={100}
          src={logo}
          alt='logo de la pagina'
        >

        </Image>
      
    </div>
  )
}

export default SideBar
