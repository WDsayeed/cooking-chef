import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../details/Details';

const ChefDetails = () => {
        const details = useLoaderData()
        console.log(details)
        return (
                <div>
                        <h2>chef details </h2>
                      
                </div>
        );
};

export default ChefDetails;