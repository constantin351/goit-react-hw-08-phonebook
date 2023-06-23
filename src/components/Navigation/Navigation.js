import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import css from "./Navigation.module.css"
import {AiOutlineHome} from "react-icons/ai";
import {TiContacts} from "react-icons/ti";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0 auto;
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink 
          className={({ isActive }) => (isActive ? css.active : css.navlink)}
          to="/">
        Home
        <AiOutlineHome />
      </NavLink>

      {isLoggedIn && (
        <NavLink 
            className={({ isActive }) => (isActive ? css.active : css.navlink)}
            to="/contacts">
          Contacts
          <TiContacts />
        </NavLink>
      )}
    </Nav>
  );
};


