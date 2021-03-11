import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export const NavContainer = styled.nav`
  width: 100%;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavSeccion1 = styled.div`
  display: flex;
  margin: 0 1rem;
  align-items: center;
`;

export const ContenInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: #eeeded;
  border-radius: 5px;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  `;

export const IconSearch = styled(FaIcons.FaSearch)`
  position: absolute;
  color: #424242;
  right: 0px;
  margin-right: 0.9rem;
  `;


// seccion 2 nav
export const NavSeccion2 = styled.div``;

export const NavLink = styled(Link)`
  color: #424242;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1em;
  font-weight: 600;
  outline: none;
`;
