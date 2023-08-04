import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiNews, BiUser, BiSearch } from 'react-icons/bi';

const Navbar = () => {
  const location = useLocation();

  return (
   <div>
    
   <div className='w-90%   bg-black/20 flex justify-between py-3  backdrop-blur-2xl items-center'>
    <Link to = {"/"} className='ml-20 mb-1 text-2xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-yellow-100 to-pink-500/60'>KageFlo</Link>
    <div className='mr-40 text-yellow-100 '>
    <Link to= "/">Log in as an Admin</Link>
    </div>
   </div>

    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>

      <div className='container mx-auto'>

        <div className='w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center text-2xl'>

          <Link
            className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center hover:bg-yellow-100 hover:scale-110 rounded-full ${
              location.pathname === '/' ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}`}
            to='/'
          >
            <BiNews className='w-6 h-6' />

          </Link>

          <Link
            className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center hover:bg-yellow-100 hover:scale-110 rounded-full ${
              location.pathname === '/animes' ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}`}
            to='/animes'
          >

            <BiSearch className='w-6 h-6' />
            
          </Link>

          <Link
           className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center hover:bg-yellow-100 hover:scale-110 rounded-full ${
              location.pathname === '/login' ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}`}
            to='/login'
          >
            <BiUser className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;