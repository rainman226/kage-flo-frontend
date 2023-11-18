import { useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import { useUser } from '../../UserContext';
import backgroundImage from './wp11166273.webp'
import logoImg from './tac_pak_mrk.png'
import './LogIn.css';

import * as yup from 'yup';

const NewFormLogin = () => {


 const navigate = useNavigate();

   const { setprofileData } = useUser();
  
   const { login, isLoggedIn } = useAuth();

  const schema = yup.object().shape({
   username: yup.string().required("Your Username is required!"),
   
   password: yup.string().min(4).max(100).required("A Password is needed at least 4 cahracters"),
  });


   const [loading, setLoading] = useState(false); // Add loading state
   const [pass, setPass] = useState(false)// Pass state where we check the password and username 

   

   
const {register, handleSubmit, formState:{errors} } = useForm(
  {
    resolver: yupResolver(schema),
  }
);



const onSubmit = async (formData) => {
    try {
      setLoading(true); // Set loading to true when submitting
      setPass(false);
      // Make a POST request to your login endpoint
      const response = await axios.get(`http://localhost:8080/user/login?username=${formData.username}&password=${formData.password}`);
     console.log(response.data);
      if (response.data) {
        // If login is successful, set profileData and navigate
        const username = formData.username;
        const userProfileResponse = await axios.get(`http://localhost:8080/user?username=${username}`);
        console.log(userProfileResponse.data[0]);
        setprofileData(userProfileResponse.data[0]); // Assuming your data structure matches your context
        login(); // Assuming this logs the user in (update as needed)
        navigate('/profile'); // Redirect to the desired location
        setPass(false);
      } else {
        // Handle login failure, display an error message, etc.
        console.error('Login failed');
        setLoading(false);
        setPass(true);
      }
    } catch (error) {
       setLoading(false); // Set loading to false in case of an error
      console.error('Error during login:', error);
    }
  };






  return (
    <div className="background">

     

      <div className="form-container  " 
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
   <div className='form-setup for_gojo'>
     <div className='logo__title'>
            <h1 className='logo_sign'>KAGEFLO</h1>
            <h2>LET'S LOG IN</h2>
</div>
            <form className='form__login' onSubmit={handleSubmit(onSubmit)}>


     <p className='input__text'>Username or Email</p>

    <input className='input__field' type='text'  placeholder='Type your Username' {...register("username")} />

    <p>{errors.username?.message}</p>

   
<p className='input__text'>Password</p>

    <input className='input__field' type='password' placeholder='Type your Password' {...register("password")}  />

    <p>{errors.password?.message}</p>

    <Link className='dont' to = "/signup">Don't have an account, Sign Up</Link>

    <input className="submit_button" type='submit' />
   
   {loading && <div className='loading__text'>Loading...</div>}

   {pass && <h1 className='loading__text'>Password or Username inccorect</h1>}
    </form>
        
        
  <img src={logoImg} alt="Gojo_Img" className='logo_Img' />

         </div>

      </div>

     </div>
  )
}

export default NewFormLogin