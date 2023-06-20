import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
// import css from "./UserMenu.module.css"
// import { Box, Button, Typography } from "@mui/material";

// import { AiOutlineUser } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import {FiLogOut} from "react-icons/fi"
import styled from "@emotion/styled";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const IconTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Button = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background: inherit;
  cursor: pointer;
  box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: green;
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <IconTitleWrapper>
        <BiUserCircle />

        <Title>Welcome, {user.name}</Title>
      </IconTitleWrapper>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
        <FiLogOut />
      </Button>
    </Wrapper>
  );
};


