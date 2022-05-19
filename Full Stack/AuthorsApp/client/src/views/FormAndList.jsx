import React from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const FormAndList = () => {
    return (
        <div>
            <AuthorForm/>
            <hr />
            <AuthorList/>
        </div>
    );
}

export default FormAndList;
