import styled from 'styled-components'

import React from 'react'

export default function ContainerApp({children}) {
    return (
        <ContainerAppx  >
            {children}
        </ContainerAppx>
    )
}



const ContainerAppx = styled.div`
  background-color: #a33131;
  width: 100%;
  padding: 1rem;
  height: 400px;
  /* margin-left: ${({ open }) => (open ? "18rem" : "0")}; */
  transition: all 0.3s ease;
  /* height: 100vh; */
`;
