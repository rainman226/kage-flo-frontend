import { useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import { useUser } from '../../UserContext';


import * as yup from 'yup';

const FormLogin = () => {
   const navigate = useNavigate();

   const { setprofileData } = useUser();
  
   const { login, isLoggedIn } = useAuth();

  const schema = yup.object().shape({
   username: yup.string().required("Your Username is required!"),
   
   password: yup.string().min(4).max(100).required("A Password is needed at least 4 cahracters"),
  });


   const [loading, setLoading] = useState(false); // Add loading state
   const [pass, setPass] = useState(false)

   

   
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
<div className='flex flex-col justify-center allign-center  w-[500px]  h-full '>


<div className='w-full h-[300px] flex flex-col items-center justify-center mb-20 rounded-lg  transition ease-in-out delay-150 bg-indigo-900/10 

hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900/10 duration-300

   border-black self-center '>

    

  <h1 className='mt-10 text-4xl text-yellow-100'>Log In now</h1>

    <form className='flex flex-col  justify-center align-middle  py-10 w-[300px] 
    ' onSubmit={handleSubmit(onSubmit)}>


     <p className='text-white mb-1'>Username or Email</p>

    <input className='mb-3 p-1 w-full bg-yellow-500/20 text-white' type='text' placeholder='UserName' {...register("username")} />

    <p className="text-red-500">{errors.username?.message}</p>

   
<p className='text-white mb-1'>Password</p>

    <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75" type='password' placeholder='Password...' {...register("password")}  />

    <p className='text-red-500'>{errors.password?.message}</p>

    <Link to = "/signup" className='mt-2  text-yellow-100 hover:text-white'>Don't have an account, Sign Up</Link>

    <input className=" rounded mt-4 bg-yellow-100 hover:bg-white cursor-pointer" type='submit' />
   
   {loading && <div className="mt-4 text-center text-yellow-50">Loading...</div>}

   {pass && <h1 className="mt-4 text-center text-yellow-50" >Password inccorect</h1>}
    </form>
    
    </div>

    </div>
  )
}

export default FormLogin