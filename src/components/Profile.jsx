import React,{useEffect, useState} from 'react'
import { useUser } from '../UserContext';
import {Link} from "react-router-dom";
import "./Profile.css"
const Profile = () => {

  const { profileData } = useUser();
  console.log(profileData)
  const [userData, setUserData] = useState(null)

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



  return (

   <div className='w-full h-auto flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex flex-col border-x-2 border-purple-800/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">
    <div className='text-5xl w-full text-center my-5'>Profile
     
      <h1 className='my-5'>Welcome back {profileData.username}</h1>
      <h1 className='my-5'>{profileData.email}</h1>
      
      <h1 className='my-5'>{profileData.dob}</h1>
      <h1 className='my-5'>{profileData.admin ? "Seems that you are an Admin" : "You are not an Admin"}</h1>
    </div>
    <div className='text-black '>
   {Array.isArray(userData) ? (
  userData.map((item) => (
    <div className={`flex h-[80px] w-full mb-20 rounded-md justify-center align-middle ${item.status}`} key={item.id}>
      <div className='flex-1 text-center self-center'>
      <Link 
      // to={`/anime/${item.animeID.title.replace(/\s+/g, '-')}`}
         
      className='max-w-[450px] '>{item.animeID.title}</Link>
      </div>
      <div className='flex-1 justify-center '>
      <img className='w-[70px] h-full ml-20 hover:scale-110 transition-transform duration-300 ' src={item.animeID.thumbnail} alt="" />
      </div>
      {/* Add more properties as needed */}
      <div className='flex-1 text-center'>
        <h1 className='mb-3 mt-2'>Status</h1>
      <h1 >{item.status}</h1>
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
  <p>Loading user data...</p>
)}
</div>
    </div>
    </div>
  )
}

export default Profile