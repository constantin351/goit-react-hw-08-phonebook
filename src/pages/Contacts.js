import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import styled from '@emotion/styled';

import ContactList from 'components/ContactList/ContactList';
import Form from 'components/Form/Form';
import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
    font-size: 26px;
    font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    font-weight: 700;
    text-align: center;
`;

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Wrapper>
            <Helmet>
                <title>Your Phonebook</title>
            </Helmet>
            
            <Form/>

            <Title>Contacts:</Title>

            <Filter />

            <ContactList />

            {isLoading && !error && <Loader />} 
        </Wrapper>
    );
};