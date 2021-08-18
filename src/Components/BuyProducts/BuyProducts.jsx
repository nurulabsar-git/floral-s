import React from 'react';
import Modal from 'react-modal';
import PaymentGateway from '../PaymentGateway/PaymentGateway';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root')



  
const BuyProducts = ({modalIsOpen, closeModal, productDetails}) => {
    return (
    <div>
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <button onClick={closeModal} className="rounded">Close</button>
          <section className="p-2">
          <div style={{textAlign: 'justify'}}>
             <h5>Name: <span>{productDetails?.name}</span></h5>
            <h6>Total Price: $<span>{productDetails?.price} </span></h6> 
            
          </div>
          <div>
           <h4>Please Pay Your Payment</h4>
           <PaymentGateway/>
        
          </div>
          </section>
        </Modal>
    </div>
    );
};

export default BuyProducts;