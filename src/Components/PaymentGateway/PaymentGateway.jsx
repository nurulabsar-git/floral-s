import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.API_KEY}`);


const PaymentGateway = () => {
    return (
    <Elements stripe={stripePromise}>
      
    </Elements>
    );
};

export default PaymentGateway;