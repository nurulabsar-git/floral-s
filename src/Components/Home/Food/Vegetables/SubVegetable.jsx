import React from 'react';
import {  useHistory } from 'react-router-dom';

const SubVegetable = ({datum}) => {
      const history = useHistory();
      const handleVegetableCartClick = (id) => {
      history.push(`/vegetableDetails/${id}`)
}
    return (
        <div onClick={() => {handleVegetableCartClick(datum?._id)}}  className="text-center" >    
        <div style={{display: 'grid', boxShadow: '2px 2px 4px gray', margin: '5px', width: '150px', gridTemplateColumns: ''}}>
           <img src={`data:image/png;base64,${datum?.image?.img}`} alt="" className="w-48" />
           <h2>{datum?.name}</h2>
         </div>
       </div>
    );
};

export default SubVegetable;