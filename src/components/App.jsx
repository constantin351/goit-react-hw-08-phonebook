import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';
import Loader from './Loader';


const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />

      {isLoading && !error && <Loader />} 
    </div>
  );
};

export default App;