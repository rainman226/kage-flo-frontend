import React from 'react';
import "./Profile.css";
import backgroundImage from './360_F_564939220_zBTHOP74DDyBL26K1xN3H6j4h634Fzu9.webp'

const NewProfile = () => {
  return (
    <div className='background'>
      <div className='container-profile'>
        <div className='profile_info ' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="blurred-content"></div>
           <div className="text-content">
            <div className='content_profile'>
            <h1>Profile Stuff</h1>
            <p>More text if needed</p>
            </div>
             <div className='content_profile'>
            <h1>Badges and all that</h1>
            <p>More text if needed</p>
            </div>
             <div className='content_profile'>
            <h1>Friends</h1>
            <p>More text if needed</p>
            </div>
          </div>
            
      </div>
    </div>
     </div>
  );
};

export default NewProfile;
