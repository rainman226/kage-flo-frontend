import React from 'react';
import { useTopAnimesContext } from '../TopAnimesContext';

const AnimeDetail = () => {
  const { selectedAnime } = useTopAnimesContext();
  console.log(selectedAnime);
  return (
    <div>
      {selectedAnime ? (
        <div className='text-red-500'>
          <h1>Anime Detail</h1>
          <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
          <p>{selectedAnime.synopsis}</p>
           <p>{selectedAnime.status}</p>
            
        </div>
      ) : (
        <p>No anime selected</p>
      )}
    </div>
  );
};

export default AnimeDetail;
