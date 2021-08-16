import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VegetableDetails = () => {
const {vegetableId} = useParams();
console.log(vegetableId);
const[vegetableDetails, setVegetableDetails] = useState({})
console.log(vegetableDetails);
useEffect(() => {
    fetch(`https://shrouded-escarpment-21521.herokuapp.com/services/${vegetableId}`)
    .then(result => result.json())
    .then(data => setVegetableDetails(data))
}, [vegetableId])
 const style = {
     display: 'grid',

 }
    return (
        <main className="d-grid text-center">
           <h1> This is vegetable details {vegetableId}</h1>
             <div>
             <img src={`data:image/png;base64,${vegetableDetails?.image?.img}`} alt=""  style={{maxWidth: '150px'}}/>
             </div>
             {vegetableDetails?.name} <br />
             <div >
                
               
             </div>
        </main>
    );
};

export default VegetableDetails;