import React from 'react'
import styled from 'styled-components'

export const Error = () => {
  return (
    <ErrorStyled>
        404
    </ErrorStyled>
  )
}

const ErrorStyled = styled.div`
padding-top:100px;
font-weight: 700;
font-size:100px;
text-align:center;
`;