import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


import * as yup from 'yup';

const FormSignUp = () => {

  

  const flo = "florinjr95@yahoo.com" ;

  const navigate = useNavigate();

  const schema = yup.object().shape({
   username: yup.string().required("Your Full Name is required"),
   email: yup.string().email().required("Your email is required"),
   dob: yup.string().required("Please insert your date"),
   password: yup.string().min(4).max(20).required("A Password is needed at least 4 cahracters"),
   confirmPassword: yup
   .string()
   .oneOf([yup.ref("password"), null], "Passwords don't match")
   .required("The passwords are not the same"),



  });



const {register, handleSubmit, formState:{errors} } = useForm(
  {
    resolver: yupResolver(schema),
  }
);


// fetch(`http://localhost:8080/user?email=${flo}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//   });




  const onSubmit = async (data) => {
   
   try {

     const { confirmPassword, ...formDataWithoutConfirmPassword } = data;

     const formDataWithZero = {
        ...formDataWithoutConfirmPassword,
        isAdmin: false,
      };
  


      console.log(JSON.stringify(formDataWithZero, null, 2));
      // We send the data whitout the confirm password and whit isAdmin proprety
      const response = await axios.post('http://localhost:8080/user/add', formDataWithZero, {
  headers: {
    'Content-Type': 'application/json',
  },
});
      console.log('Form data sent successfully:', response.data);
      navigate("/login")
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  }



  return (


   <div className='flex flex-col justify-center allign-center  w-[500px]  h-full '>


<div className='w-full h-[300px] flex flex-col items-center justify-center mb-20 rounded-lg  transition ease-in-out delay-150 bg-indigo-900/10 

hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900/10 duration-300

   border-black self-center '>

    

  <h1 className='mt-10 text-4xl text-yellow-100'>Sign Up</h1>

    <form className='flex flex-col  justify-center align-middle  py-10 w-[300px]' onSubmit={handleSubmit(onSubmit)}>

    <p className='mb-1 text-white'>UserName</p>
<input className='bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1' type='text' placeholder='UserName...' {...register("username")} />

    <p className='err'>{errors.username?.message}</p>

<p className='mb-1 text-white'>Email</p>
    <input className='bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1' type='text' placeholder='Email...' {...register("email")} />

    <p className='err'>{errors.email?.message}</p>

<p className='mb-1 text-white'>Date of Birth</p>
    <input className='bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1' type='date' placeholder='date..' {...register("dob")} />

    <p className='err'>{errors.dob?.message}</p>

<p className='mb-1 text-white'>Password</p>
    <input className='bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1' type='password' placeholder='Password...' {...register("password")} />

    <p className='err'>{errors.password?.message}</p>

<p className='mb-1 text-white'>Confirm Password</p>
    <input className='bg-yellow-500/20 text-white p-1 disabled:opacity-75 mb-1' type='password' placeholder='Confirm Password...' {...register("confirmPassword")} />

    <p className='err'>{errors.confirmPassword?.message}</p>

    <Link className='text-l text-yellow-100 my-1' to ="/login">Already have an account</Link>


    <input className='rounded mt-3 bg-yellow-100 hover:bg-white cursor-pointer' type='submit' />


    </form>
    
    </div>

    </div>

    
  )
}

export default FormSignUp