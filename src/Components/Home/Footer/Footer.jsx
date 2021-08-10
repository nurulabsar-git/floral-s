import React from 'react';

const shoppingGideData = [
   { 
    heading: 'SHOPPING GUIDE',    
     buy: 'How to buy?',
     faq: ' FAQs',
     payment: 'Payment',
     shipment: 'Shipment',
     order: ' Where is my order?',
     policy: ' Return policy',

   },
   {
       heading: 'INFORMATION',
       about: 'About Us',
       delivery: ' Delivery Information',
       policy: ' Privacy Policy',
       terms: 'Terms & Conditions',
       contact: ' Contact Us',
       return: 'Returns',
       map: 'Site Map',
       gift: ' Gift vouchers',
       affiliates: 'Affiliates',
       specials: ' Specials'
   },

   {
    heading: 'MORE SERVICES',
},

]
const Footer = () => {
    console.log(shoppingGideData);
    console.log(shoppingGideData[0].buy);
    console.log(shoppingGideData[1].heading);
    console.log(shoppingGideData[2].heading);
    return (
        <div className="p-10 bg-gray-400">
            <h4 data-testid="detail">Footer</h4>
            {
                // shoppingGideData.map(datum => // )
                    <section className="grid grid-cols-2 md:grid-cols-3">
                       <div>
                       <h1>{shoppingGideData[0].heading}</h1> <br />
                        <p>{shoppingGideData[0].buy}</p>
                        <p>{shoppingGideData[0].faq}</p>
                        <p>{shoppingGideData[0].payment}</p>
                        <p>{shoppingGideData[0].shipment}</p>
                        <p>{shoppingGideData[0].order}</p>
                        <p>{shoppingGideData[0].policy}</p>
                       </div>
                       <div>
                           <h1>{shoppingGideData[1].heading}</h1> <br />
                           <p>{shoppingGideData[1].about}</p>
                           <p>{shoppingGideData[1].delivery}</p>
                           <p>{shoppingGideData[1].policy}</p>
                           <p>{shoppingGideData[1].terms}</p>
                           <p>{shoppingGideData[1].contact}</p>
                           <p>{shoppingGideData[1].return}</p>
                           <p>{shoppingGideData[1].map}</p>
                           <p>{shoppingGideData[1].gift}</p>
                           <p>{shoppingGideData[1].affiliates}</p>
                           <p>{shoppingGideData[1].specials}</p>
                       </div>
                       <div>
                          <h1>{shoppingGideData[2].heading}</h1> <br />
                       </div>
                    </section>
                    
            }
        </div>
    );
};

export default Footer;