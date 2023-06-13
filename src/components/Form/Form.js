import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import css from "./Form.module.css";

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
            <form onSubmit={handleSubmit} className={css.form}>
                <label className={css.form__label}>
                    Name
                    <input
                        // value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        className={css.form__input}
                        required
                    />
                </label>

                <label className={css.form__label}>
                    Number
                    <input
                        // value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        className={css.form__input}
                        required
                        />
                </label>

                <button type="submit" className={css.form__btn}>Add contact</button>
            </form>
        )
};

export default Form;