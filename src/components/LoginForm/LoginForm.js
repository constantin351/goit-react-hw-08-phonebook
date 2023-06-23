import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 96px 0; */
  padding-top: 96px;
`

const Form = styled.form`
  width: 340px;
`

const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-weight: 700;
`

const Input = styled.input`
  margin-top: 8px;
  height: 30px;
  padding: 6px 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid black;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;

  &:hover, :focus, :active {
    border: 1px solid orangered;
    background-color: #F3F3F3;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);

  }
`

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 800;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: none;
  background: #1976d2;
  cursor: pointer;
  /* box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37); */

  &:hover, :focus {
    background-color: green;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);
  }
`

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>
          <Button type="submit">Log In</Button>
        </Form>
    </Wrapper>
  );
};
