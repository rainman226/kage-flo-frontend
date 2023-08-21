import React from 'react'
import { useUser } from '../UserContext';

const Profile = () => {

  const { profileData } = useUser();
  console.log(profileData)

  return (

   <div className='w-full h-[700px] flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex flex-row border-x-2 border-purple-800/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">
    <div className='text-5xl w-full text-center my-5'>Profile
      {/* <h1>{profileData.username}</h1> */}
      <h1 className='my-5'>Welcome back {profileData.username}</h1>
      <h1 className='my-5'>{profileData.email}</h1>
      
      <h1 className='my-5'>{profileData.dob}</h1>
      <h1 className='my-5'>{profileData.admin ? "Seems that you are an Admin" : "You are not an Admin"}</h1>
    </div>
    </div>
    </div>
  )
}

export default Profile