import React, { createContext, useContext, useState } from 'react';

const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [selectedAnime, setSelectedAnime] = useState(null);

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
