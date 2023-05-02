import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from '../details/Details';

const ChefDetails = () => {
        const {id} = useParams()
        console.log(id)
        const [details, setDetails] = useState([])
        useEffect( ()=>{
                fetch(`http://localhost:5000/chef`)
                .then(res=> res.json())
                .then(data=> setDetails(data))
        },[])

        const filterData = details.find(dt=> dt.id == id)
        console.log(filterData)
        return (
                <div>
                        <h2>chef details </h2>
                      
                </div>
        );
};

export default ChefDetails;