import React from 'react';
import err from '../image/sadface.gif'
const Error = () => {
    return (
        <div style={{textAlign: 'center', margin: '30px'}}>
           <img src={err} alt="404" style={{textAlign: 'center', width: '60%'}} />
        </div>
    );
};

export default Error;