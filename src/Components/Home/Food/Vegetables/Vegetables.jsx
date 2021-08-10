import React, { useEffect, useState } from 'react';

const Vegetables = () => {
 const [vegetableData, setVegetableData] = useState([]);

useEffect(() => {
      fetch()
      .then(result => console.log(result))
}, [])
    return (
        <div>
            <h4>Vegetables</h4>
          <div>
          {
                
            }
          </div>
        </div>
    );
};

export default Vegetables;