import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
  width: 340px;
`;

const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

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
  width: 330px;

  &:hover, :focus, :active {
    border: 1px solid orangered;
    background-color: #F3F3F3;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);
  }
`;


const Filter = () => { 
    const dispatch = useDispatch();

    const onFilterInputChange = (event) => {
        dispatch(setFilter(event.currentTarget.value))
    };

    return (
        <Wrapper>
            <Label>
                Find contacts with name
                <Input
                    // value={filter}
                    type="text"
                    name="filter"
                    onChange={onFilterInputChange}
                />
            </Label>
        </Wrapper>
    )
};

export default Filter;