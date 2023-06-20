import PropTypes from "prop-types";
import css from './ContactListItem.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  width: 340px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 1px dashed black;
  padding: 10px 0;
`;

const DeleteBtn = styled.button`
  width: 100px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: none;
  background: #1976d2;
  cursor: pointer;
  /* box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37); */

  &:hover,
  :focus {
    background-color: orangered;
    box-shadow: 1px 1px 6px 2px rgba(12, 0, 0, 0.37);
  }
`;

const ContactListItem = ({ contact }) => { 
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
      <Wrapper>
          <p className={css.item__name}>{contact.name}: </p>
          <p className={css.item__number}>{contact.number}</p>
          <DeleteBtn
            //   className={css.item__btn}
              type="button"
              onClick={handleDelete}
          >
              Delete
          </DeleteBtn>
      </Wrapper>
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

