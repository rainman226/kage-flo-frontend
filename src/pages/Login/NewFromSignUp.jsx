
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import backgroundImage from './wp11166273.webp'
import * as yup from 'yup';

const NewFromSignUp = () => {


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





   //When we submit we create a user using this onSubmit function
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
    <div className="background">

     

      <div className="form-container  " 
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
       <div className='form-setup'>

        <div className='logo__title'>
            <h1 className='logo_sign'>KAGEFLO</h1>
            <h2>LET'S SIGN UP</h2>
        </div>

        <form className='form__info'  onSubmit={handleSubmit(onSubmit)}>

    <p className='input__text'>UserName</p>
<input className='input__field__signUp'  type='text' placeholder='Type your username here' {...register("username")} />

    <p className='err'>{errors.username?.message}</p>

   <p className='input__text'>Email</p>
    <input className='input__field__signUp'  type='text' placeholder='Type your Email here' {...register("email")} />

    <p className='err'>{errors.email?.message}</p>

<p className='input__text'>Date of Birth</p>
    <input className='input__field__signUp' type='date' placeholder='write your dob' {...register("dob")} />

    <p className='err'>{errors.dob?.message}</p>

<p className='input__text'>Password</p>
    <input className='input__field__signUp' type='password' placeholder='write your password' {...register("password")} />

    <p className='err'>{errors.password?.message}</p>

<p className='input__text'>Confirm Password</p>
    <input className='input__field__signUp' type='password' placeholder='Confirm your password' {...register("confirmPassword")} />

    <p >{errors.confirmPassword?.message}</p>



    <input className='submit_button' type='submit'   />


    </form>


       </div>
        
      </div>

    </div>
  );
};

export default NewFromSignUp