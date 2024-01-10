import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-600 uppercase text-white text-center rounded-md font-black p-5'>      
        {children}
    </div>
  )
}

export default Error
