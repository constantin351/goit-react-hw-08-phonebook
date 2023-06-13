import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
//
// import { TaskList } from 'components/TaskList/TaskList';
import ContactList from 'components/ContactList/ContactList';
//
// import { TaskEditor } from 'components/TaskEditor/TaskEditor'; // заменить на свой ContactEditor
// 
// import { fetchTasks } from 'redux/tasks/operations'; //удалить
import { fetchContacts } from 'redux/operations';
// 
// import { selectLoading } from 'redux/tasks/selectors'; // удалить
import { getError, getIsLoading } from 'redux/selectors';

////
import Form from 'components/Form/Form';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';

export default function Tasks() {
    const dispatch = useDispatch();
    // const isLoading = useSelector(selectLoading); //удалить
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className="wrapper">
            <Helmet>
                <title>Your Phonebook</title>
            </Helmet>
            
            {/* <TaskEditor /> */} 
            <Form/>

            <h2>Contacts</h2>

            {/* <div>{isLoading && 'Request in progress...'}</div> */}

            <Filter />

            {/* <TaskList /> */}
            <ContactList />

            {isLoading && !error && <Loader />} 
        </div>
    );
};