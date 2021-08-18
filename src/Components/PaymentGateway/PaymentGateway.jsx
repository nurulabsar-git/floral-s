import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SubPaymentGateway from './SubPaymentGateway';
require('dotenv').config()
// console.log(process.env.API_KEY);
const stripePromise = loadStripe(`${process.env.API_KEY}`);


const PaymentGateway = () => {
    return (
    <Elements stripe={stripePromise}>
      <SubPaymentGateway/>
    </Elements>
    );
};

export default PaymentGateway;