import React from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { BiNews, BiUser, BiSearch,BiAngry } from 'react-icons/bi';
import { useAuth } from '../AuthContext';
import { useState } from 'react';
import { useUser } from '../UserContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {profileData} = useUser();
  console.log("this is the userData", profileData);

  const [bottomNavbarVisible, setBottomNavbarVisible] = useState(true);

   const handleLogout = () => {
    // Perform logout logic, then navigate to the signup route
    logout();
    navigate('/signup');
  };

  const { isLoggedIn, logout } = useAuth(); // Get the isLoggedIn state from the context


   const toggleBottomNavbar = () => {
    setBottomNavbarVisible(!bottomNavbarVisible);
  };



  return (
   <div>
    
   <div className='w-90%   bg-custom-yellow/80 flex justify-between py-3  backdrop-blur-3xl items-center'>
    <div className='flex w-[450px] justify-between'>
    <Link to = {"/"} className='ml-20 mb-1 text-2xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-yellow-100 to-pink-500/60'>KageFlo</Link>

    <div > {/* Add margin to create space for the bottom navbar */}
        <button
          className=' bg-white/20 p-2 rounded hover:bg-gradient-to-r from-yellow-500/10 to-yellow-900/10 text-yellow-100'
          onClick={toggleBottomNavbar}
        >
          <BiAngry />
        </button>
      </div>
   {profileData.admin&&isLoggedIn && 
   <div className='mt-2'>
       <Link to={"/addEntry"} className=' bg-white/20 p-3 rounded hover:bg-gradient-to-r  from-yellow-500/10 to-yellow-900/10 text-yellow-100'>Add anime entry</Link>
   </div>}




      </div>



    <div className='mr-40 text-yellow-100 '>


    {isLoggedIn && 
            // Render logout button when the user is logged in
            <button
              onClick={handleLogout}
              className='bg-white/20 p-2 rounded hover:bg-gradient-to-r from-yellow-500/10 to-yellow-900/10 mr-4'
            >
              Log Out
            </button>
             }

    <Link to= "/">
      <button className='bg-white/20  p-2  rounded hover:bg-gradient-to-r from-yellow-500/10 to-yellow-900/10 '>Log in as an Admin</button>
      
      </Link>
    </div>
   </div>


   


       {/* bottom navbar */}
    {bottomNavbarVisible && (<nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>

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
              location.pathname === '/animes' ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'} 
              ${location.pathname === '/anime/:title'  ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}
              `}
            to='/animes'
          >

            <BiSearch className='w-6 h-6' />
            
          </Link>

          <Link
           className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center hover:bg-yellow-100 hover:scale-110 rounded-full 
           ${location.pathname === '/signup'  ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}  
          ${location.pathname === '/profile'  ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'} 
          ${location.pathname === '/login'  ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}
          ${location.pathname === '/addEntry'  ?  'bg-yellow-100' : 'hover:bg-opacity-20 rounded-full'}
              `}
            to={isLoggedIn ? '/profile' : '/signup'}
          >
            <BiUser className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </nav>)}
    </div>
  );
};

export default Navbar;