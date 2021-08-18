import React from 'react';
import Modal from 'react-modal';

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
const BuyProducts = () => {
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
            <h5>Name: $<span>{productInfo?.name?.name} {clothDetails?.name?.name}</span></h5>
            <h6>Total Price: $<span>{productInfo?.name?.price} {clothDetails?.name?.price}</span></h6>
            
          </div>
          <div>
           <h4>Please Pay Your Payment</h4>
           <PaymentProcess></PaymentProcess>
        
          </div>
          </section>
        </Modal>
    </div>
    );
};

export default BuyProducts;