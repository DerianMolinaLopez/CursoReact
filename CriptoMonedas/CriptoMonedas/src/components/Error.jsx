import React from 'react'

import syled from '@emotion/styled'
import styled from '@emotion/styled'
const Texto = styled.div`
   background-color: #b73223;
   color: #fff;
   text-transform: uppercase ;
   font-size: 22px;
   padding: 15px;
   font-family: 'Lato',sans-serif;
   text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
