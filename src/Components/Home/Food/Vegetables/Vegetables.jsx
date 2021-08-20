import React, { useEffect, useState } from 'react';
import SubVegetable from './SubVegetable';

const Vegetables = () => {
 const [vegetableData, setVegetableData] = useState([]);
useEffect(() => {
      fetch("http://localhost:5000/services")
      .then(result => result.json())
      .then(data =>{
        setVegetableData(data)
        console.log(data)
      }
      )
}, [])



    return (
        <div>
          <div>
          {
              vegetableData?.length === 0 && <div className=" flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">
              </div>
            </div>
          }
          {
            vegetableData?.map(datum => <SubVegetable key={datum?._id} datum={datum}/> )
            }
          </div>
        </div>
    );
};

export default Vegetables;