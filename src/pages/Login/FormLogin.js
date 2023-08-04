
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";

import * as yup from 'yup';

const FormLogin = () => {
  

  //Verification

  const schema = yup.object().shape({
   fullName: yup.string().required("Your Username is required!"),
   
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
<div className='flex flex-col justify-center allign-center  w-[500px]  h-full '>


<div className='w-full h-[300px] flex flex-col items-center justify-center mb-20 rounded-lg  transition ease-in-out delay-150 bg-indigo-900/10 

hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900/10 duration-300

   border-black self-center '>

    

  <h1 className='mt-10 text-4xl text-yellow-100'>Log In now</h1>

    <form className='flex flex-col  justify-center align-middle  py-10 w-[300px] 
    ' onSubmit={handleSubmit(onSubmit)}>


     <p className='text-white mb-1'>Username or Email</p>

    <input className='mb-3 p-1 w-full bg-yellow-500/20 text-white' type='text' placeholder='UserName' {...register("fullName")} />

    <p className="text-red-500">{errors.fullName?.message}</p>

   
<p className='text-white mb-1'>Password</p>

    <input className="bg-yellow-500/20 text-white p-1 disabled:opacity-75" type='password' placeholder='Password...' {...register("password")} />

    <p className='text-red-500'>{errors.password?.message}</p>

   

    <input className=" rounded mt-6 bg-yellow-100 hover:bg-white cursor-pointer" type='submit' />

    </form>
    
    </div>

    </div>
  )
}

export default FormLogin