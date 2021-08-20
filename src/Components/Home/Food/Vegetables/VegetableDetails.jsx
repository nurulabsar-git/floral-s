import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuyProducts from '../../../BuyProducts/BuyProducts';

const VegetableDetails = () => {
const {vegetableId} = useParams();
console.log(vegetableId);
const[vegetableDetails, setVegetableDetails] = useState({})
console.log(vegetableDetails);

//Modal
const [modalIsOpen,setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }

//Load Data

useEffect(() => {
    fetch(`https://shrouded-escarpment-21521.herokuapp.com/services/${vegetableId}`)
    .then(result => result.json())
    .then(data => setVegetableDetails(data))
}, [vegetableId])

 const style = {
     display: 'grid',

 }
    return (
        <main className="d-grid text-center">
           {/* <h1> This is vegetable details {vegetableId}</h1> */}
           {
              vegetableDetails?.length === 0 && <div className=" flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">
              </div>
            </div>
          }

             <section>
             <div>
             <img src={`data:image/png;base64,${vegetableDetails?.image?.img}`} alt=""  style={{maxWidth: '150px'}}/>
             </div>
             {vegetableDetails?.name} <br />
             <div >
            
             </div>
             <div>
                 <button onClick={openModal} type="submit">
                   Buy Now
                 </button>
                 <BuyProducts  modalIsOpen={modalIsOpen} closeModal={closeModal} productDetails={vegetableDetails}/>
             </div>
             </section>
        </main>
    );
};

export default VegetableDetails;