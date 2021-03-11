import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.section`
  /* position: fixed; */
  display: flex;
  background-color: #212121;
  width: 18rem;
  height: 100vh;
  flex-flow: column nowrap;
  /* left: ${({ open }) => (open ? 0 : "-100%")}; */
  /* transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)" )}; */
  transform: ${({ open }) => (open ? "translateX(-100%)" :"translateX(0)"   )};
  /* top: 0px;
  right: 0; */
  width: 18em;
  /* padding-left: 0;
  margin-top: 0;
  margin-left: 0; */
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
  }
`;

export const Sidebarx = styled.div`
  display: flex;
  /* padding: 0rem 1.7rem; */
  flex-direction: column;
`;

export const HeaderLogo = styled.div`
  border-bottom: 1px solid #615b5b;
  padding: 9px 1.7rem;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    color: #fff;
    font-size: 1.2rem;
    &:hover {
      color: #00a2ff;
      transition: all 0.3s ease;
    }
  }

  h3 {
    margin-left: 5px;
    letter-spacing: 1px;
  }
`;

export const HeaderAvatar = styled.div`
  border-bottom: 1px solid #615b5b;
  padding: 9px 1.7rem;
  div {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.1rem;
  }
  img {
    width: 13%;
    margin-right: 12px;
    border-radius: 50%;
  }

  span {
  }
`;

export const DivButton = styled.div`
  margin: 0.5rem 0;
`;
//button con props
export const Buttonx = styled.button`
  background-color: #cac2c2;
  outline: none;
  border-radius: 3px;
  text-align: start;
  width: 90%;
  border: none;
  font-weight: 600;
  color: #424242;
  margin: 0.3em 1em;
  padding: 0.55em 1.7em;

  :hover {
    box-shadow: 0px 0px 4px #fff;
  }

  ${(props) =>
    props.primary &&
    css`
      background: #0059ff;
      color: #fff;
    `}
`;

export const DivLinks = styled.div`
  padding: 9px 1.1rem;
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled(Link)`
  text-align: start;
  display: flex;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 0.5em 0.8em;
  text-decoration: none;

  &:hover {
    background-color: #42424242;
    transition: all 0.3s ease;
  }

  svg {
    margin-right: 8px;
  }
`;
