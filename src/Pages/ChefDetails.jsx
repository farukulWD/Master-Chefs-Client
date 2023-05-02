import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefHeader from '../Component/Shared/ChefHeader';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <ChefHeader></ChefHeader>
            <h3>Chef details</h3>
        </div>
    );
};

export default ChefDetails;