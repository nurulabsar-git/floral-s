import React from 'react';
import { Link } from 'react-router-dom';
import AddServices from '../Services/AddServices/AddServices';
import UploadFile from '../UploadFiles/UploadFile';

const Contact = () => {
    return (
        <main>
            <div className="p-28">
            <address className="grid justify-center">
                <p> Mohammad Nurul Absar </p>
                 <p>+8801862787070 </p>
                <p> mohammadnurulabsar@yahoo.com</p>
                 <a href="https://www.linkedin.com/in/mohammadnurulabsar/">LinkedIn</a>
            </address>
            </div>
            <section>
            <div>
            <ul class="flex border-b pt-5 shadow-md">
                <li class="mr-1">
                 <Link  class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/serviceOne">Service One</Link>
                </li>
                <li class="mr-1">
                 <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#serviceTwo">Recipies</Link>
                </li>
                <li class="mr-1">
                 <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Recipies</Link>
                </li>
                <li class="mr-1">
                 <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Recipies</Link>
                </li>
            </ul>
         </div>
         <div>
         <AddServices/>
         </div>
         <div id="serviceTwo">
         <UploadFile/>
         </div>
         <div id="serviceOne">
         <AddServices/>
         </div>
      </section>
        </main>
    );
};

export default Contact;