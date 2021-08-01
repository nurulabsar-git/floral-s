import React from 'react';
import { useParams } from 'react-router-dom';

const ProductFeaturesDetails = () => {
    const {productFeatureId} = useParams()
    return (
        <div>
            <h1>This is {productFeatureId}</h1>
            <img src="" alt="" />
            <h4>Vegetables</h4>
        </div>
    );
};

export default ProductFeaturesDetails;