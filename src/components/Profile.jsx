import React,{useEffect, useState} from 'react'
import { useUser } from '../UserContext';
import {Link} from "react-router-dom";
import "./Profile.css"
import {BiDoughnutChart} from "react-icons/bi";
import {FaCrown} from "react-icons/fa"
const Profile = () => {

  const { profileData } = useUser();
  console.log(profileData);
  const [userData, setUserData] = useState(null);
 

 useEffect(() => {
    // Define the URL with the profileData.id
    const profileUrl = `http://localhost:8080/entry/${profileData.id}`;

    // Make an HTTP GET request to fetch user data
    fetch(profileUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [profileData.id]);


  // Function to get the first letter of the username
  const getFirstLetter = () => {
    if (profileData.username) {
      return profileData.username[0].toUpperCase();
    }
    return '';
  };


   const itemCount = userData ? userData.length : false;
   console.log("This is the Item Count",itemCount);
 

  return (

   <div className='w-full h-auto flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex flex-col border-x-2 border-purple-800/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">
    <div className='text-5xl w-full  my-5 font-light '>
      <div className='w-full flex justify-center'>
     <h1 className='text-5xl ml-5 border-solid border-b-2 py-2 '>
  Profile:
  
</h1>
 </div>

    <div className='my-5 flex flex-row'>
            {/* Create a div with the first letter as the background */}
            <div
              className='w-[100px] h-[100px] text-10xl p-6 rounded-full bg-red-800 hover:bg-red-800/40 transition duration-300 ease-in-out transform hover:scale-105'
               // Change the background color as needed
            >
              <h1 className='ml-2'>{getFirstLetter()}</h1>
              
               </div>
               <h1 className='my-6 ml-5 font-light'>Welcome back {profileData.username}</h1>
               <div className='ml-20 flex flex-col'>
               <h1 className='my-6 ml-5 font-light'>Badges:</h1>
               <h1 className='text-3xl ml-5'>{itemCount >= 3 ? (
                <div className='flex w-auto'>
    <BiDoughnutChart className='w-[50px] h-[50px] text-blue-500 font-extrabold' />
   {profileData.admin ? (
        <FaCrown className='self-center ml-4 w-[50px] h-[50px] text-yellow-600' />
      ) : (
       ""
      )}
    </div>
  ) : (
   <h1 className='ml-8'>  No Badges yet</h1>
  )}</h1>
               </div>
            </div>
     
      
      {/* <h1 className='my-5'>{profileData.email}</h1> */}
      {/* Here i want the picture */}
      
      {/* <h1 className='my-5'>{profileData.dob}</h1> */}
      {/* <h1 className='my-5'>{profileData.admin ? "Seems that you are an Admin" : "You are not an Admin"}</h1> */}
    </div>
    <div className='text-black '>
   {Array.isArray(userData) ? (
  userData.map((item) => (
    <div className={`flex h-[80px] w-full mb-10 rounded-md justify-center align-middle ${item.status}`} key={item.id}>
      <div className='flex-1 text-center self-center'>
      <Link 
      to={`/anime/${item.animeID.id}`}
      
      className='max-w-[450px] '>{item.animeID.title}</Link>
      </div>
      <div className='flex-1 justify-center '>
      <img className='w-[70px] h-full ml-20 hover:scale-110 transition-transform duration-300 ' src={item.animeID.thumbnail} alt="" />
      </div>
      {/* Add more properties as needed */}
      <div className='flex-1 text-center'>
        <h1 className='mb-3 mt-2'>Status</h1>
      <h1 >{item.status === "PTW" ?  "PLAN TO WATCH" : item.status}</h1>
      </div>           
      <div className='flex-1 text-center'>
        <h1 className='mb-3 mt-2'>Episodes Watched</h1>
      <h1 >{item.watchedEpisodes}</h1>
      </div>
      <div className='flex-1 text-center'>
        <h1 className='mb-3 mt-2'>Grade</h1>
      <h1 >{item.grade}</h1>
      </div>


    </div>
  ))
) : (
  <p>No Data at the moment...</p>
)}
</div>
    </div>
    </div>
  )
}

export default Profile