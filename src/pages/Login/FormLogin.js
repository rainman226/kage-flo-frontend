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
   fullName: yup.string().required("Your Username is required!"),
   
   password: yup.string().min(4).max(100).required("A Password is needed at least 4 cahracters"),
  });


   const [userData, setUserData] = useState(null);

   

   


   const fetchUserData = async (username) => {
    try {
      // Make an API request to fetch user data based on the provided username
      const response = await axios.get(`http://localhost:8080/user?username=${username}`);

      if (response.data) {
        console.log(response.data);
        setUserData(response.data); // Store the retrieved user data
      } else {
        setUserData(null); // Reset user data if not found
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserData(null); // Reset user data on error
    }
  };




  const debouncedFetchUserData = _debounce(fetchUserData, 200);

const {register, handleSubmit, formState:{errors} } = useForm(
  {
    resolver: yupResolver(schema),
  }
);


  const onSubmit =  (data) => {
  try {

    // Call fetchUserData and wait for it to complete
    // await fetchUserData(userData[0].username);

    if (userData) {
      const user = userData[0];
      console.log(user);
      
      // Compare the entered password with the stored password
      if (data.password === user.password) {
        console.log('Login successful');
        login();
        setprofileData(user);
        console.log(isLoggedIn);
        navigate("/profile");
      } else {
        console.log('Login failed');
        // Handle failed login attempt, show an error message to the user.
      }
    } else {
      console.log('User not found');
      // Handle user not found, show an error message to the user.
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle error, show an error message to the user.
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

    <input className='mb-3 p-1 w-full bg-yellow-500/20 text-white' type='text' placeholder='UserName' {...register("fullName")} onChange={(e) => debouncedFetchUserData(e.target.value)}/>

    <p className="text-red-500">{errors.fullName?.message}</p>

   
<p className='text-white mb-1'>Password</p>

    <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75" type='password' placeholder='Password...' {...register("password")}  />

    <p className='text-red-500'>{errors.password?.message}</p>

    <Link to = "/signup" className='mt-2  text-yellow-100 hover:text-white'>Don't have an account, Sign Up</Link>

    <input className=" rounded mt-4 bg-yellow-100 hover:bg-white cursor-pointer" type='submit' />

    </form>
    
    </div>

    </div>
  )
}

export default FormLogin