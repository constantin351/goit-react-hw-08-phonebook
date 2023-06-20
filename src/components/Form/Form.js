import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import css from "./Form.module.css";
//
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  margin-top: 96px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 14px;
`;

const ContactAddForm = styled.form`
  width: 340px;
`;

const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
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

  &:hover,
  :focus,
  :active {
    border: 1px solid orangered;
    background-color: #f3f3f3;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);
  }
`;

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

  &:hover,
  :focus {
    background-color: green;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);
  }
`;


const Form = () => { 
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        
        contacts.some(contact => contact.name === name)
            ? alert(`${name} is already in the phonebook`)
            : dispatch(addContact({name, number}));
        
        form.reset();
    };

     return (
        <Wrapper>
            <Title>Add your contacts here</Title>
            <ContactAddForm onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        // value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // className={css.form__input}
                        required
                    />
                </Label>

                <Label>
                    Number
                    <Input
                        // value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // className={css.form__input}
                        required
                        />
                </Label>

                <Button type="submit" >Add contact</Button>
            </ContactAddForm>
        </Wrapper>
        )
};

export default Form;