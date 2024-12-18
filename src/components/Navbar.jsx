import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-yellow-500 px-12 py-2'>
      <p className='text-lg font-semibold flex items-center'>
        Get ready to be amazed 
        <FaArrowDown className='ml-2 text-lg' />
      </p>
    </div>
  );
};

export default Navbar;
