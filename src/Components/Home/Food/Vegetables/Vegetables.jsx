import React, { useEffect, useState } from 'react';

const Vegetables = () => {
 const [vegetableData, setVegetableData] = useState([]);

useEffect(() => {
      fetch("https://shrouded-escarpment-21521.herokuapp.com/services")
      .then(result => result.json())
      .then(data =>{
        setVegetableData(data)
        console.log(data)
      }
      )
}, [])
    return (
        <div>
            <h4>Vegetables</h4>
          <div>
          {
            vegetableData.map(datum => 
              <section key={datum?._id} className="text-center">
                <h2>{datum?.name}</h2>
                <div>
                  <img src={`data:image/png;base64,${datum.image.img}`} alt="" className="w-28" />
                </div>
              </section>
              
              )
            }
          </div>
        </div>
    );
};

export default Vegetables;