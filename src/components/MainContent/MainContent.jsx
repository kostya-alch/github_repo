import React from 'react';
import { useSelector } from 'react-redux';
import InfoList from '../Info/InfoList';
import Loader from '../Loader/Loader';

const MainContent = () => {
    const store = useSelector((state) => state?.repos);
    const { loading, reposList, error, profile } = store;
    return (

        loading ? (
            <Loader />
        ) : error ? (
            <h2>{error?.data?.message}</h2>
        ) : (
            <InfoList profile={profile} reposList={reposList} />
        )

    );
};

export default MainContent;
