import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({ Cliente }) => {
    const navigate = useNavigate()
    const { nombre, empresa, email } = Cliente
    return (
      
            <tr className='border-b'>
                <td className='p-6 space-y-2'>
                    <p className='text-2xl text-gray-800'>
                        {nombre}
                    </p>
                    <p>
                        {empresa}
                    </p>
                </td>
                <td className='p-6 space-y-2'>
                    <p className='text'>
                        <span className='text-gray-800 uppercase font-bold'>
                            email
                        </span>
                        {email}
                    </p>
                </td>
                <td>
                    <button type='button'
                        className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
                        onClick={()=>navigate(`/clientes/${Cliente.id}/editar`)}
                    >
                        Modificar

                    </button>
                    <button type='button'
                        className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
                    >
                        eliminar

                    </button>
                </td>
            </tr>
        
    )
}

export default Cliente
