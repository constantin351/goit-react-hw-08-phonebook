import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors"; 
import ContactListItem from "components/ContactListItem";
import css from "./ContactList.module.css";

const filteredContactsArray = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

const ContactList = () => { 
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filteredContacts = filteredContactsArray(contacts, filter);

    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={css.item}>
                    <ContactListItem contact={contact} />
                </li>
            ))               
            }
        </ul>
    )
};

export default ContactList;