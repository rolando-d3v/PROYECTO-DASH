import styled from "styled-components";
import { Link } from "react-router-dom";

export const AccordionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
`;

export const HeadContent = styled.div`
  width: 100%;
  padding: 0 1.7rem;
  background: #292929;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    h1 {
      padding: 0.7rem 0;
      font-size: 1rem;
      margin-left: 7px;
    }
  }
`;

export const DropdownItem = styled.div`
  background: #3c3d3d;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 8px 1.7rem;
  width: 100%;
  display: flex;
  align-items: center;
&:hover {
    background-color: #00a2ff;
    transition: all 0.3s ease;
    color: #000;
    font-weight: 600;
}

  svg {
      margin-right: 9px;
  }
  span{
      font-size: 0.9rem;
  }
`;
