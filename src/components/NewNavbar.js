import { Link, useLocation,useNavigate } from 'react-router-dom'; // Import the Link component from React Router
import { useAuth } from '../AuthContext';
import { useState } from 'react';
import { useUser } from '../UserContext';
import './style--nav.css';

const NewNavbar = () => {


   //for the slide in animations 
   const [linkClicked, setLinkClicked] = useState(false);

// Function to reset linkClicked state after animation ends
   const resetLinkClicked = () => {
    setTimeout(() => {
      setLinkClicked(false);
    }, 10); // Adjust the delay to match your animation duration
  };

  const location = useLocation();

  const navigate = useNavigate();

  const {profileData} = useUser();

  console.log("this is the userData", profileData);

   const handleLogout = () => {
    // Perform logout logic, then navigate to the signup route
    logout();
    navigate('/signup');
  };

  
    const { isLoggedIn, logout } = useAuth(); // Get the isLoggedIn state from the context
console.log(isLoggedIn)
  return (
  
 <header className='header'>
      <nav
        className={`container ${linkClicked ? 'fade-down' : ''}`}
        onAnimationStart={() => setLinkClicked(true)}
        onAnimationEnd={resetLinkClicked}
      >

     <div className='header_logo'>
      <h1 className='logo'>KageFlo</h1>
      </div>

      <ul className='header__menu'>
       <li>
        <Link to="/" onClick={() => setLinkClicked(true)}>News</Link></li>
       <li>
        <Link to="animes" onClick={() => setLinkClicked(true)}>Browse</Link>
        </li>
       <li>
        <Link to="/profile" onClick={() => setLinkClicked(true)}>Profile</Link>
        </li>
      </ul>

      <ul className='header__info'>
       <li className='Log__In'>
       {!isLoggedIn && <Link to="/login " onClick={() => setLinkClicked(true)}>Log In</Link>}
        </li>
       <li className='Sign__Up'>
        {isLoggedIn ? (
    <button className='button__out' onClick={handleLogout}>Log Out</button>
  ) : (
    <Link to="/signup" onClick={() => setLinkClicked(true)}>Sign Up</Link>
  )}
        </li>
      </ul>
     
     </nav>
     </header>
    
  )
}

export default NewNavbar