import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/selectors"; 
import ContactListItem from "components/ContactListItem";

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
        <ul>
            {filteredContacts.map(contact => (
                <li key={contact.id}>
                    <ContactListItem contact={contact} />
                </li>
            ))               
            }
        </ul>
    )
};

export default ContactList;