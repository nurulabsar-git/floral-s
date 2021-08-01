import React from 'react';
import { useHistory } from 'react-router-dom';
import f6 from '../../image/f6.png';
import f4 from '../../image/f4.png';
import f3 from '../../image/f3.png';
import f2 from '../../image/f2.png';
const foodData = [
    {
      _id: 1,
      image: f6,
      identity: 'Vegetables',
    },
    {   _id: 2,
        image: f4,
        identity: 'Irons',
      },
      { _id: 3,
        image: f3,
        identity: 'Fresh Fruits',
      },

      { _id: 4,
        image: f2,
        identity: 'Fast Food',
      },
      

]
const ProductFeatures = () => {
    const history = useHistory()

    
    const handleFood  = (id) => {
        history.push(`/fruits/${id}`)
    }



    return (
        <div className="m-2 md:m-5">
            <h1 className="text-center">Food Features</h1>
          <div className="grid grid-cols-2 md:grid-cols-4">
          {
            foodData.map(datum => 
                <section onClick={() => handleFood(datum._id)} className="m-2 p-5 place-self-center shadow-lg">
                    <div className="">
                        <img src={datum.image} alt="" className="w-40 h-28" />
                    </div>
                    <h4> {datum.identity}</h4>
                </section>
                
                )
          }
          </div>
        </div>
    );
};

export default ProductFeatures;