import React, { createContext, useContext, useState, useEffect } from 'react';


const TopAnimesContext = createContext();

export const useTopAnimesContext = () => useContext(TopAnimesContext);

export const TopAnimesProvider = ({ children }) => {
  const [topAnimesData, setTopAnimesData] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null); // Add selectedAnime state

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains the anime data you need
        setTopAnimesData(data?.data || []);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <TopAnimesContext.Provider value={{ topAnimesData, selectedAnime, setSelectedAnime}}>
      {children}
    </TopAnimesContext.Provider>
  );
};
