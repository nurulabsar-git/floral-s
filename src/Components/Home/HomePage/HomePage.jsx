import React from 'react';
import './HomePage.css';
const HomePage = () => {
    return (

        <div className="home-container text-center pt-56" >
            <input type="text" placeholder="Search" style={{width: '280px', height: '35px', padding: '5px'}} />
            <button className="bg-blue-900 h-10 w-10"><i class="fas fa-search"></i></button>

        <div className="home-container text-center" >
            <div className="p-56 text-center">
            <input type="text" style={{width: '280px', height: '35px'}} />
            </div> 
        </div>
    );
};

export default HomePage;