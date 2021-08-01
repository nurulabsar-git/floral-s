import React, { useState } from 'react';
import { useEffect } from 'react';

const Meals = () => {
  const [mealData, setMealData] = useState([]);


  useEffect(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(result => result?.json())
      .then(data =>  setMealData(data))

  }, [])

    return (
        <div className="mt-28">
           <div>
          
           </div>
        </div>
    );
};

export default Meals;