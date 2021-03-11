import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as s from "./Navbar.styled";
import { types } from "../../context/auth/types";
import * as FaIcons from "react-icons/fa";
import AuthContext from "../../context/auth/authContext";

const navLink = [
  { name: "Home", url: "/mavel" },
  { name: "Contact", url: "/productos" },
];

export default function Navbar({ open, setOpen }) {
  const { user, dispatch } = useContext(AuthContext);
  const { name } = user;

  const history = useHistory();

  // logout de user a login
  const exitUser = () => {
    dispatch({
      type: types.LOGOUT,
    });
    history.replace("/login");
  };

  return (
    <s.NavContainer>
      <s.NavSeccion1>
        <FaIcons.FaBars
          onClick={() => setOpen(!open)}
          style={{ fontSize: "25px" }}
        />
        {navLink.map((link, index) => (
          <s.NavLink key={index} to={link.url}>
            {link.name}
          </s.NavLink>
        ))}

        <s.ContenInput>
          <s.InputSearch type='text' placeholder="Buscar" />
          <s.IconSearch />
        </s.ContenInput>
      </s.NavSeccion1>

      <s.NavSeccion2>
        <button type="button" onClick={exitUser}>
          Salir
        </button>
      </s.NavSeccion2>
    </s.NavContainer>
  );
}
