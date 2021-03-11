import styled from 'styled-components'

import React from 'react'

export default function ContainerApp({children, open}) {
    return (
        <ContainerAppx open={open} >
            {children}
        </ContainerAppx>
    )
}



const ContainerAppx = styled.div`
  background-color: #e6e1e1;
  width: 100%;
  margin-left: ${({ open }) => (open ? "18rem" : "0")};
  transition: all 0.3s ease;
  /* height: 100vh; */
`;
