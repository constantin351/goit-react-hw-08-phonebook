import PropTypes from "prop-types";
import css from './ContactListItem.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";


const ContactListItem = ({ contact }) => { 
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
      <div className={css.item}>
          <p className={css.item__name}>{contact.name}: </p>
          <p className={css.item__number}>{contact.number}</p>
          <button
              className={css.item__btn}
              type="button"
              onClick={handleDelete}
          >
              Delete
          </button>
      </div>
  )
};


ContactListItem.propTypes = {
    contact: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
          }),
};

export default ContactListItem;

