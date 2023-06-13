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
import { getIsLoading } from 'redux/selectors';

export default function Tasks() {
    const dispatch = useDispatch();
    // const isLoading = useSelector(selectLoading); //удалить
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            
            {/* <TaskEditor /> */} 
            {/* заменить на свой ContactEditor */}

            <div>{isLoading && 'Request in progress...'}</div>

            {/*  <TaskList />  УДАЛИТЬ */}
            {/* <TaskList /> */}
            <ContactList />
            {/*  */}
        </>
    );
};