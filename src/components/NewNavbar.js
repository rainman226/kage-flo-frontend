import { Link } from 'react-router-dom'; // Import the Link component from React Router
import './style--nav.css';

const NewNavbar = () => {
  return (
    <header className='header'>
     <nav className='container'>
     <div className='header_logo'>
      <h1>KageFlo</h1>
      </div>

      <ul className='header__menu'>
       <li>
        <Link to="/">News</Link></li>
       <li>
        <Link to="animes">Browse</Link>
        </li>
       <li>Profile</li>
      </ul>

      <ul className='header__info'>
       <li>Log In</li>
       <li>Sign In</li>
      </ul>
     
     </nav>
     </header>
    
  )
}

export default NewNavbar