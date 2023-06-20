import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  width: 340px;
`

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
    flex-direction: column;
    /* margin-bottom: 16px; */
    font-weight: 700;
`

export const Input = styled.input`
  margin-top: 8px;
  height: 30px;
  padding: 6px 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid black;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  width: 330px;

  &:hover, :focus, :active {
    border: 1px solid orangered;
    background-color: #F3F3F3;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);

  }
`