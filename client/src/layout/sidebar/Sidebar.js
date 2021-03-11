import React from "react";
import * as s from "./Sidebar.styled";
import * as FaIcons from "react-icons/fa";
import Dropdown from "../dropdown/Dropdown";

const linkSidebar = [
  { name: "Home", icon: <FaIcons.FaHome /> },
  { name: "Tools", icon: <FaIcons.FaTools /> },
  { name: "Formulario", icon: <FaIcons.FaFolder /> },
  { name: "Calendario", icon: <FaIcons.FaCalendarAlt /> },
];

//open  estado de sidebar
export default function Sidebar({ open }) {
  return (
    <s.SidebarContainer open={open}>
      <s.Sidebarx>
        <s.HeaderLogo>
          <div>
            <FaIcons.FaApple style={{ fontSize: "1.5rem" }} />
            <h3>Dashboar</h3>
          </div>
        </s.HeaderLogo>
        <s.HeaderAvatar>
          <div>
            <img src="/assets/avatar.jpg" alt="alt" />
            <span>Susan Torres</span>
          </div>
        </s.HeaderAvatar>
        <s.DivButton>
          <s.Buttonx primary>Dashboar</s.Buttonx>
          <s.Buttonx>theme</s.Buttonx>
        </s.DivButton>

        <s.DivLinks>
          {linkSidebar.map((li, index) => (
            <s.SidebarLink key={index} to="/">
              {li.icon} {li.name}
            </s.SidebarLink>
          ))}
        </s.DivLinks>
        <Dropdown/>
      </s.Sidebarx>
    </s.SidebarContainer>
  );
}
