import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { FiLogIn } from 'react-icons/fi';
import { GiArchiveRegister } from 'react-icons/gi';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const AuthNav = () => {
  return (
    <Div>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.navlink)}
        to="/register"
      >
        Register
        <GiArchiveRegister />
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.navlink)}
        to="/login"
      >
        Log In
        <FiLogIn />
      </NavLink>
    </Div>
  );
};
