import React from 'react';
import { Link } from 'react-router-dom';
import fe from '../../../image/fe.png'
const Navbar = () => {
   const styles = {
     width: '30px',
     border: 'none'
   }

    return (
     <div>
        <ul class="flex border-b pt-5 shadow-md">
      <li class="-mb-px mr-1">
        <Link class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/"> <img src={fe} alt="" style={styles} /></Link>
      </li>
      <li class="mr-1">
        <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Home</Link>
      </li>
      <li class="mr-1">
        <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Recipies</Link>
      </li>
      <li class="mr-1">
        <Link class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Podcast</Link>
      </li>
      <li class="mr-1">
        <Link class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Contact</Link>
      </li>
      <li class="mr-1">
        <Link class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Basics</Link>
      </li>
      <li class="mr-1">
        <Link class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Health</Link>
      </li>
      
    </ul>
     </div>
    );
};

export default Navbar;