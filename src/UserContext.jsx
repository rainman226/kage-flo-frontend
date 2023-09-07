// UserContext.js

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();
//This is a Context for the ProfileData so it helps us to render profile details in the profile component, also saves in a memory storage(local).
export const UserProvider = ({ children }) => {
  const [profileData, setprofileData] = useState(() => {
    // Initialize profileData from localStorage, or null if not found
    const storedProfileData = localStorage.getItem('profileData');
    return storedProfileData ? JSON.parse(storedProfileData) : null;
  });

  useEffect(() => {
    // Update localStorage whenever profileData changes
    if (profileData) {
      localStorage.setItem('profileData', JSON.stringify(profileData));
    }
  }, [profileData]);

  return (
    <UserContext.Provider value={{ profileData, setprofileData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};