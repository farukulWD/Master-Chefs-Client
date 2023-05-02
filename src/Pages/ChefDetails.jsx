import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <h3>Chef details</h3>
        </div>
    );
};

export default ChefDetails;