import React, { useEffect, useState } from 'react';

const FreshFruits = () => {
  const[getFreshFruits, setGetFreshFruits] = useState([])


  useEffect(() => {
    
  fetch("https://shrouded-escarpment-21521.herokuapp.com/get")
  .then(result => result.json())
  .then(data => setGetFreshFruits(data))
  }, [])
    return (
        <div>
            <div>
              {
                getFreshFruits.map(datum => 
                  <div key={datum._id}>
                      <h2>{datum?.title}</h2>
                      <img src={datum.image} alt="" />
                  </div>
                  )}
            </div>
        </div>
    );
};

export default FreshFruits;