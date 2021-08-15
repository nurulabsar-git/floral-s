import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VegetableDetails = () => {
const {vegetableId} = useParams();
console.log(vegetableId);
const[vegetableDetails, setVegetableDetails] = useState([])

useEffect(() => {
    fetch(`http://localhost:5000/services/${vegetableId}`)
    .then(result => result.json())
    .then(data => setVegetableDetails(data))
}, [vegetableId])

    return (
        <div>
           <h1> this is vegetable details {vegetableId}</h1>
        </div>
    );
};

export default VegetableDetails;