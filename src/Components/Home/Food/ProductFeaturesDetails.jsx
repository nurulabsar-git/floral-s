import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FreshFruits from './FreshFruits/FreshFruits';
import Vegetables from './Vegetables/Vegetables';

const ProductFeaturesDetails = () => {
    const {productFeatureId} = useParams()
  
    const menuItems = [
        {component: <Vegetables/>, title: "Vegetables", _id: 0},
        {component: <FreshFruits/>, title: "Fruits", _id: 1}
    ]

    const [mulComponent, setMulComponents] = useState([])

   const first = () => {
       if(productFeatureId == '1'){
           return(
              <Vegetables/>
           )

       }
    else if(productFeatureId == '2'){
        return(
            <FreshFruits/>
        )
    }
   }

    return (
        <div>
            <h1>This is {productFeatureId}</h1>
            <div>
                <ul>

                

                    {

                        first()
                        // menuItems.map((item, i) => 
                        // <li key={i} onClick={() => setMulComponents(item.component)}>
                        //     {item.title}
                        // </li>
                        // )
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProductFeaturesDetails;