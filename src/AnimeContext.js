import React, { createContext, useContext, useState ,useEffect} from 'react';

const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [selectedAnime, setSelectedAnime] = useState(null);

 //Here we have a context for the selected anime, so when u press on an anime it saves the anime data wich will be send to animedetails

  return (
    <AnimeContext.Provider value={{ selectedAnime, setSelectedAnime }}>
      {children}
    </AnimeContext.Provider>
  );
}

export function useAnime() {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error('useAnime must be used within an AnimeProvider');
  }
  return context;
}
