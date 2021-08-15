import React, { useEffect, useState } from 'react';
import {  useHistory } from 'react-router-dom';

const Vegetables = () => {
 const [vegetableData, setVegetableData] = useState([]);
useEffect(() => {
      fetch("https://shrouded-escarpment-21521.herokuapp.com/services")
      .then(result => result.json())
      .then(data =>{
        setVegetableData(data)
        // console.log(data)
      }
      )
}, [])

const history = useHistory();
const handleVegetableCartClick = (id) => {
   history.push(`/vegetableDetails/${id}`)
}

    return (
        <div>
          vegetable
          <div>
          {
            vegetableData.map(datum => 
              <div onClick={() => {handleVegetableCartClick(datum?._id)}} key={datum?._id} className="text-center" >
               <div>
               <h2>{datum?.name}</h2>
                <div>
                  <img src={`data:image/png;base64,${datum.image.img}`} alt="" className="w-28" />
                </div>
              </div>
               </div>
              
              )
            }
          </div>
        </div>
    );
};

export default Vegetables;