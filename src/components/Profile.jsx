import React from 'react'
import { useUser } from '../UserContext';

const Profile = () => {

  const { profileData } = useUser();
  console.log(profileData)

  return (

   <div className='w-full h-[700px] flex  justify-center items-center  '>
  <div className="  w-[1100px] h-full flex flex-row border-x-2 border-indigo-900/20  bg-custom-yellow/80 backdrop-blur-2xl p-4 text-yellow-100  ">
    <div>Profile
      {/* <h1>{profileData.username}</h1> */}
      <h1>Welcome back {profileData.username}</h1>
      <h1>{profileData.email}</h1>
      
      <h1>{profileData.dob}</h1>
      <h1>{profileData.admin ? "Seems that you are an Admin" : "You are not an Admin"}</h1>
    </div>
    </div>
    </div>
  )
}

export default Profile