
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";

import * as yup from 'yup';

const FormLogin = () => {
  

  //Verification

  const schema = yup.object().shape({
   fullName: yup.string().required("Your Full Name is required!!!"),
   
   password: yup.string().min(4).max(20).required("A Password is needed at least 4 cahracters"),
   



  });



const {register, handleSubmit, formState:{errors} } = useForm(
  {
    resolver: yupResolver(schema),
  }
);


  const onSubmit = (data) => {
   console.log(data);
  }



  return (
<div className='flex flex-col justify-center allign-center  w-[400px]  h-full '>

<div className='w-[400px] h-[300px] flex flex-col items-center justify-center mb-20 rounded-t-lg  transition ease-in-out delay-150 bg-indigo-900/10 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900/10 duration-300 
  self-start border-black '>

  <h1 className='mt-10 text-3xl text-yellow-100'>Log In now</h1>

    <form className='flex flex-col  justify-center align-middle  p-10 ' onSubmit={handleSubmit(onSubmit)}>


     <p className='text-white'>Username or Email</p>

    <input className='mb-3 w-full bg-yellow-500/20 text-white' type='text' placeholder='UserName' {...register("fullName")} />

    <p className="text-red-500">{errors.fullName?.message}</p>

   
<p className='text-white'>Password</p>

    <input className="bg-yellow-500/20 text-white" type='password' placeholder='Password...' {...register("password")} />

    <p className='text-red-500'>{errors.password?.message}</p>

   

    <input className="mt-4 bg-yellow-100 hover:bg-white cursor-pointer" type='submit' />

    </form>
    
    </div>

    </div>
  )
}

export default FormLogin